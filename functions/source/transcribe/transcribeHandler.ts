import { SQSHandler, SQSEvent } from "aws-lambda";
import "source-map-support/register";
import { TranscribeService, DynamoDB, S3 } from "aws-sdk";
import { parseS3Object } from "@music-metadata/s3";
import v4 from "uuid/v4";

import { StartTranscriptionJobRequest } from "aws-sdk/clients/transcribeservice";
import FileType from "file-type";

const transcribeService = new TranscribeService({ apiVersion: "2017-10-26" });
const documentClient = new DynamoDB.DocumentClient();
const s3 = new S3({ apiVersion: "2006-03-01" });
var jp = require("jsonpath");

type S3Params = {
  name: string;
  key: string;
  type: string;
  size: number;
  format?: string;
  numberOfChannels?: number;
  meta?: any;
};

export const extractBucketParams = (event: SQSEvent) =>
  event.Records.map(({ messageAttributes }) => ({
    name: messageAttributes.bucketName.stringValue,
    key: messageAttributes.objectKey.stringValue,
    type: messageAttributes.objectKey.stringValue.includes("txt")
      ? "text"
      : messageAttributes.objectKey.stringValue.includes(".json")
      ? "json"
      : "audio",
    size: parseInt(messageAttributes.objectSize.stringValue),
  }));

export const doesVocabularyExist = async (): Promise<boolean> => {
  try {
    await transcribeService
      .getVocabulary({
        VocabularyName: process.env.CUSTOM_VOCABULARY_NAME,
      })
      .promise();
    return true;
  } catch (e) {
    if (
      e.message ===
      "The requested vocabulary couldn't be found. Check the vocabulary name and try your request again."
    ) {
      return false;
    } else {
      throw e;
    }
  }
};

const getAudioUriAndDefaultMetadata = async (s3Object) => {
  let metadata = {};

  const params = {
    Bucket: s3Object[0].name,
    Key: decodeURIComponent(s3Object[0].key),
  };

  const file = await s3.getObject(params).promise();

  const body = JSON.parse(file.Body.toString());
  const audioUri = jp.value(body, process.env.AUDIO_FILE_PATH);
  const audioFilePathKey = process.env.AUDIO_FILE_PATH.split(".")[1];

  Object.keys(body)
    .filter((key) => key != audioFilePathKey)
    .forEach((key) => {
      metadata[key] = body[key];
    });

  return { metadata, audioUri };
};

export const getAudioMetadata = async (
  s3Object: S3Params,
  mData: any,
  filePath: string
): Promise<S3Params> => {
  var params = {
    Bucket: s3Object.name,
    Key: decodeURIComponent(s3Object.key),
  };
  let stream;
  let defaultMetadata;

  const meta = await s3.headObject(params).promise();

  if (s3Object.type == "json") {
    defaultMetadata = mData;
    defaultMetadata.jobid = v4();
    defaultMetadata.lastmodified = "SYSTEM";
    const Key = decodeURIComponent(filePath.split(`${s3Object.name}/`)[1]);
    s3Object.key = Key.replace("/", "-");
    params = { ...params, Key };
  }
  stream = s3.getObject(params).createReadStream();
  // get mime type
  const mimeType = await FileType.fromStream(stream);
  const metadata = await parseS3Object(s3, params, {
    disableChunked: true,
  });
  console.log(metadata.format);
  stream.destroy();
  return {
    ...s3Object,
    format: mimeType.ext,
    numberOfChannels: metadata.format.numberOfChannels,
    meta: { ...meta.Metadata, ...defaultMetadata },
  };
};

export const createOrUpdateVocabulary = async (
  vocab: S3Params
): Promise<void> => {
  const params = {
    LanguageCode: "en-US",
    VocabularyName: process.env.CUSTOM_VOCABULARY_NAME,
    VocabularyFileUri: `s3://${vocab.name}/${vocab.key}`,
  };
  const exists = await doesVocabularyExist();
  if (exists) {
    console.log("Updating Vocabulary");
    await transcribeService.updateVocabulary(params).promise();
  } else {
    await transcribeService.createVocabulary(params).promise();
    console.log("Creating Vocabulary");
  }
};

export const audioOrMetadataOnly = (params) => {
  return params.type === "audio" || params.type === "json";
};

export const handler: SQSHandler = async (event: SQSEvent) => {
  // get paths for created objects
  const objectParams = extractBucketParams(event);
  console.log(objectParams);
  let uri;
  let defaultMetadata;

  const vocab = objectParams.find((params) => params.type === "text");
  if (vocab) {
    await createOrUpdateVocabulary(vocab);
  } else {
    const { audioUri, metadata } = await getAudioUriAndDefaultMetadata(
      objectParams.filter((params) => audioOrMetadataOnly(params))
    );

    defaultMetadata = metadata;
    uri = audioUri;
  }

  const s3Objects = await Promise.all(
    objectParams
      .filter((params) => audioOrMetadataOnly(params))
      .map((params) => getAudioMetadata(params, defaultMetadata, uri))
  );

  // get bucket paths for all event-sourced objects
  const paramMap: StartTranscriptionJobRequest[] = s3Objects
    .filter((params) => audioOrMetadataOnly(params))
    .map((params) => {
      let mediaUri;
      if (params.type == "json") {
        mediaUri = uri;
        params = {
          ...params,
          key: uri.split(`${params.name}/`)[1].replace("/", "-"),
        };
      } else {
        mediaUri = `s3://${params.name}/${params.key}`;
      }
      let transcriptionJob: StartTranscriptionJobRequest = {
        LanguageCode: "en-US",
        Media: {
          MediaFileUri: decodeURIComponent(mediaUri),
        },
        TranscriptionJobName: decodeURIComponent(params.key),
        MediaFormat: params.format,
        OutputBucketName: process.env.TRANSCRIBE_OUTPUT_BUCKET,
      };
      if (params.numberOfChannels > 1) {
        transcriptionJob = {
          ...transcriptionJob,
          Settings: {
            ChannelIdentification: true,
            ShowSpeakerLabels: false,
          },
        };
      } else {
        transcriptionJob = {
          ...transcriptionJob,
          Settings: {
            ChannelIdentification: false,
            ShowSpeakerLabels: true,
            MaxSpeakerLabels: 2,
          },
        };
      }

      const customVocabulary = process.env.CUSTOM_VOCABULARY_NAME;
      if (customVocabulary && customVocabulary !== "") {
        console.log(`Using custom vocabulary: ${customVocabulary}`);
        return {
          ...transcriptionJob,
          Settings: {
            ...transcriptionJob.Settings,
            VocabularyName: customVocabulary,
          },
        };
      }
      return transcriptionJob;
    });
  // start all transcription jobs
  await Promise.all(
    paramMap.map((params) =>
      transcribeService.startTranscriptionJob(params).promise()
    )
  );

  console.log("the s3 objects -> ", s3Objects);

  if (process.env.MODE_OF_OPERATION == "METADATA") {
    //create initial entry in db
    await documentClient
      .batchWrite({
        RequestItems: {
          [process.env.TABLE_NAME]: s3Objects.map((r, _) => ({
            PutRequest: {
              Item: {
                jobId: r.meta.jobid,
                audioURI: uri,
                status: 0,
                lastModified: r.meta.lastmodified,
                meta: r.meta,
              },
            },
          })),
        },
      })
      .promise();
  }

  // update table to reflect
  const tableUpdates = s3Objects.map((r, i) =>
    documentClient
      .update({
        TableName: process.env.TABLE_NAME,
        Key: {
          jobId: r.meta.jobid,
          lastModified: r.meta.lastmodified,
        },
        ExpressionAttributeNames: {
          "#status": "status",
          "#transcriptionJobName": "transcriptionJobName",
        },
        ExpressionAttributeValues: {
          ":st1": 1,
          ":tjn": `${decodeURIComponent(s3Objects[i].key)}.json`,
        },
        UpdateExpression: "set #status = :st1, #transcriptionJobName = :tjn",
        ReturnValues: "ALL_NEW",
      })
      .promise()
  );

  const updated = await Promise.all(tableUpdates);

  console.log({
    statusCode: 200,
    jobStatus: updated.map((res) => res.Attributes),
  });
};
