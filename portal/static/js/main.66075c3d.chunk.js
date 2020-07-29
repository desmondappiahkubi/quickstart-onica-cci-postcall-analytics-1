(this["webpackJsonpaws-icc-portal"]=this["webpackJsonpaws-icc-portal"]||[]).push([[0],{1050:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(46),i=n.n(o),c=n(72),s=n(19),l=n(33),u=n(37),p=n(144),d=n.n(p),m=n(42),h=function e(t){Object(l.a)(this,e),this.idToken=void 0,this.accessToken=void 0,this.refreshToken=void 0,this.idToken=t.idToken,this.accessToken=t.accessToken,this.refreshToken=t.refreshToken},g="POST",f="GET",E="PATCH",_=function(){function e(){Object(l.a)(this,e),this.baseUrl="__BASE_API__"}return Object(u.a)(e,[{key:"getCalls",value:function(e){return this.request(f,"".concat(this.baseUrl,"/calls"),{next:e},this.getAuth())}},{key:"_getHeader",value:function(e){var t={};return e&&(t.Authorization="Bearer ".concat(e.idToken)),console.log("The header",t),t}},{key:"getAuth",value:function(){return m.a.currentSession().then((function(e){return new h({idToken:e.getIdToken().getJwtToken(),accessToken:e.getAccessToken().getJwtToken(),refreshToken:e.getRefreshToken().getToken()})}))}},{key:"request",value:function(e,t,n){var a=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Promise.resolve(null);return e===g?r.then((function(e){return a._post(t,n,e)})):e===f?r.then((function(e){return a._get(t,n,e)})):e===E?r.then((function(e){return a._patch(t,n,e)})):Promise.resolve()}},{key:"_post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:g,uri:e,body:t,headers:this._getHeader(n),json:!0};return d()(a)}},{key:"_get",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:f,uri:e,qs:t,headers:this._getHeader(n),json:!0};return d()(a)}},{key:"_patch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:E,uri:e,body:t,headers:this._getHeader(n),json:!0};return d()(a)}}]),e}(),y=new(function(){function e(t){Object(l.a)(this,e),this.apiService=void 0,this.apiService=t}return Object(u.a)(e,[{key:"logout",value:function(){m.a.signOut()}}]),e}())(new _),O="LOGIN_PENDING",b="LOGIN",v="LOGOUT",I="LOGIN_ERROR",T=function(e){return function(t){var n=e.getSignInUserSession().getIdToken().decodePayload();t(function(e,t){return{type:b,value:{isAuthenticated:e,user:t}}}(!0,{email:n.email,roles:n["cognito:groups"]}))}},A=function(){return function(e){y.logout()}},C={loading:!1,loginError:null,isAuthenticated:!1,changePassword:!1,user:{email:"",roles:[]}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(s.a)({},e,{loading:t.value});case I:var n=e.changePassword||!1,a=t.value.error;return!n&&a&&(n="NewPasswordRequired"===a.error._error.name),Object(s.a)({},e,{changePassword:n,loginError:a});case b:return Object(s.a)({},e,{isAuthenticated:!0,changePassword:!1,user:t.value.user});case v:return Object(s.a)({},e,{changePassword:!1,isAuthenticated:!1,user:null});default:return e}},P=new _,N="GET_TRANSCRIPTS_PENDING",k="GET_TRANSCRIPTS_SUCCESS",j="GET_TRANSCRIPTS_ERROR",w=function(e){return function(t){var n="".concat("__BASE_API__","/api/transcripts");e&&(n="".concat(n,"?lastKey=").concat(encodeURIComponent(JSON.stringify(e)))),t({type:N}),P.getAuth().then((function(e){return fetch(n,{method:"GET",headers:{Authorization:"".concat(e.accessToken)},redirect:"follow",referrerPolicy:"no-referrer"})})).then((function(e){return e.json()})).then((function(e){return t({type:k,payload:e})})).catch((function(e){return t({type:j,payload:e})}))}},R={loading:!1,error:null,data:[],lastEvaluatedKey:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(s.a)({},e,{error:null,loading:!0});case j:return Object(s.a)({},e,{loading:!1,error:t.payload});case k:return Object(s.a)({},e,{loading:!1,error:null,data:t.payload.audio,lastEvaluatedKey:t.payload.lastEvaluatedKey,labels:t.payload.labels});default:return e}},D=new _,L="GET_SENTIMENT_PENDING",U="GET_SENTIMENT_SUCCESS",G="GET_SENTIMENT_ERROR",F=function(e){return function(t){var n="".concat("__BASE_API__","/api/sentiment?uri=").concat(encodeURIComponent(e));t({type:L}),D.getAuth().then((function(e){return fetch(n,{method:"GET",headers:{Authorization:"".concat(e.accessToken)},redirect:"follow"})})).then((function(e){return e.json()})).then((function(e){return t({type:U,payload:e})})).catch((function(e){return t({type:G,payload:e})}))}},M={loading:!1,error:null,data:null,lastEvaluatedKey:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(s.a)({},e,{data:null,error:null,loading:!0});case G:return Object(s.a)({},e,{loading:!1,error:t.payload});case U:return Object(s.a)({},e,{loading:!1,error:null,data:JSON.parse(t.payload.uri)});default:return e}},z=Object(c.c)({auth:S,transcripts:x,sentiment:B}),K=n(55),H=n(341),W=n(1078),J=n(352),q={mediumGray:"#757679",primary:"#3D4E62",turquoise:"#00ABBA",error:"#C22402",navBar:"#222A33"},V=new J.a({spacing:2,typography:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"].join(",")},colors:{mediumGray:q.mediumGray,error:q.error},palette:{primary:{main:q.primary},secondary:{main:q.turquoise},error:{main:q.error}},boxShadow:{high:"3px 8px 20px -6px rgba(0,0,0,0.35)",medium:"2px 6px 10px -4px rgba(0,0,0,0.35)",low:"1px 4px 8px -3px rgba(0,0,0,0.35)"},overrides:{MuiTableCell:{stickyHeader:{backgroundColor:q.primary},head:{color:"#FFFFFF"}},MuiTableSortLabel:{active:{color:"#FFFFFF !important"},icon:{color:"#FFFFFF !important"}}},infoCaption:{color:"#757575",fontSize:12},modal:{root:{padding:5},title:{fontSize:25,padding:0,margin:0},paper:{padding:20,width:300},inputsContainer:{marginTop:20},padTop:{marginTop:20},error:{fontSize:12,color:q.error}}}),Q=function(e){return function(t){return function(n){console.log("[Middleware] Dispatching",n);var a=t(n);return console.log("[Middleware] next state",e.getState()),a}}},X=n(56),Y=n(54),$=n(57),Z=n(1096),ee=n(9),te=n(60),ne=Object(te.a)(),ae=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(X.a)(this,Object(Y.a)(t).call(this,e)),m.b.listen("auth",(function(e){switch(e.payload.event){case"signIn":ne.push("/calls"),n.setState({authState:"signedIn",authData:e.payload.data})}})),n}return Object($.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.location&&this.props.location.search.startsWith("?code=")||m.a.currentAuthenticatedUser().then((function(e){ne.push("/calls")})).catch((function(e){m.a.federatedSignIn()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"})}}]),t}(a.Component),re=n(92),oe={ADMIN:"Admin",MANAGER:"Manager"},ie=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=function(t){function n(e){var t;return Object(l.a)(this,n),(t=Object(X.a)(this,Object(Y.a)(n).call(this,e))).state={authState:"loading"},t}return Object($.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this._checkAndRedirect()}},{key:"componentDidUpdate",value:function(){this._checkAndRedirect()}},{key:"_checkAndRedirect",value:function(){var e=this;"loading"===this.state.authState&&m.a.currentAuthenticatedUser().then((function(t){e.props.auth(t),e.setState({authState:"valid"})})).catch((function(t){e.setState({authState:"invalid"}),e.props.redirect()}))}},{key:"render",value:function(){return"valid"===this.state.authState?r.a.createElement(e,this.props):r.a.createElement("div",null)}},{key:"hasRole",value:function(e){return!!this.props.auth.user.roles&&this.props.auth.user.roles.includes(e)}}]),n}(r.a.Component),n=function(e){return{auth:e.auth}},a=function(e){return{redirect:function(){return e((function(){ne.push("/login")}))},auth:function(t){return e(T(t))}}};return Object(K.b)(n,a)(t)},ce=n(59),se=n.n(ce),le=n(93),ue=n(1079),pe=n(1080),de=n(1081),me=n(1082),he=n(1052),ge=n(1100),fe=n(138),Ee=n.n(fe),_e=(n(1047),n(50)),ye=n.n(_e),Oe=new _,be="__C_DOMAIN__".split(".")[2],ve=new J.a({palette:{primary:{main:q.navBar}}}),Ie=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(X.a)(this,(e=Object(Y.a)(t)).call.apply(e,[this].concat(r)))).handleOnLogout=function(){n.props.logout()},n.goToUpload=function(){return n.props.history.push("/upload")},n.goToQuickSight=Object(le.a)(se.a.mark((function e(){var t,n,a,r,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent("https://"+window.location.hostname),n=encodeURIComponent("https://".concat(be,".quicksight.aws.amazon.com/")),ye.a.config.region=be,e.next=5,Oe.getAuth();case 5:a=e.sent,r=a.idToken,(o={IdentityPoolId:"__CID_POOL__",Logins:{}}).Logins["cognito-idp.".concat(be,".amazonaws.com/").concat("__C_POOL__")]=r,ye.a.config.credentials=new ye.a.CognitoIdentityCredentials(o),ye.a.config.credentials.refresh((function(e){e?console.error(e):console.log("successful")})),ye.a.config.getCredentials((function(){var e={sessionId:ye.a.config.credentials.accessKeyId,sessionKey:ye.a.config.credentials.secretAccessKey,sessionToken:ye.a.config.credentials.sessionToken},r="https://signin.aws.amazon.com/federation?Action=getSigninToken&SessionDuration=43200&Session="+encodeURIComponent(JSON.stringify(e)),o={method:"POST",headers:{Authorization:a.accessToken},redirect:"follow",referrerPolicy:"no-referrer",body:r};fetch("".concat("__BASE_API__","/auth"),o).then((function(e){return e.json()})).then((function(e){var a="https://signin.aws.amazon.com/federation?Action=login&Issuer="+t+"&Destination="+n+"&SigninToken="+e.SigninToken;console.log("AWS Console Sign In URL: "+a),window.location=a}))}));case 12:case"end":return e.stop()}}),e)}))),n.goHome=function(){return n.props.history.push("/calls")},n}return Object($.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(W.a,{theme:ve},r.a.createElement("div",{className:e.root},r.a.createElement(ue.a,{position:"static"},r.a.createElement(pe.a,null,r.a.createElement(de.a,{container:!0,direction:"row",justify:"space-between",alignContent:"center",alignItems:"center"},r.a.createElement(de.a,{item:!0},r.a.createElement(de.a,{container:!0,direction:"row",alignItems:"center",alignContent:"center"},r.a.createElement(de.a,{item:!0,onClick:this.goHome,className:e.clickable},r.a.createElement(me.a,{variant:"h5"},"Call Analytics")))),r.a.createElement(de.a,{item:!0},r.a.createElement(de.a,{container:!0,direction:"row",alignItems:"center",alignContent:"center"},r.a.createElement(de.a,{item:!0,onClick:this.goToQuickSight,className:e.clickable},r.a.createElement("img",{alt:"Amazon QuickSight Logo",className:e.logo,src:"/images/quicksight.png"})),r.a.createElement(de.a,{item:!0},r.a.createElement(me.a,{variant:"h5"},"QuickSight")))),r.a.createElement(de.a,{item:!0},r.a.createElement(de.a,{container:!0,direction:"row"},r.a.createElement(de.a,{item:!0,className:e.userInfo},r.a.createElement(de.a,{container:!0,direction:"column",alignContent:"center",alignItems:"flex-end"},r.a.createElement(de.a,{item:!0},r.a.createElement("p",{className:e.role},this.props.userRole)),r.a.createElement(de.a,{item:!0},r.a.createElement("p",{className:e.email},this.props.userEmail)))),r.a.createElement(de.a,{item:!0},r.a.createElement(de.a,{container:!0,direction:"column",alignItems:"center",onClick:this.goToUpload,className:e.clickable},r.a.createElement(de.a,{item:!0},r.a.createElement(he.a,{style:{padding:0,paddingLeft:12,paddingRight:12},color:"inherit"},r.a.createElement(Ee.a,null))),r.a.createElement(de.a,{item:!0},r.a.createElement("p",{className:e.email},"Upload")))),r.a.createElement(de.a,{item:!0},r.a.createElement(de.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(de.a,{item:!0},r.a.createElement(he.a,{color:"inherit",onClick:this.handleOnLogout},r.a.createElement(ge.a,null))))))))))))}}]),t}(a.Component),Te=Object(K.b)((function(e){var t="";if(!e.auth.user)return{userEmail:null,userRole:null};var n=e.auth.user.roles||[];return n.includes(oe.MANAGER)&&(t="Manager"),n.includes(oe.ADMIN)&&(t="Administrator"),t||(t="Agent"),{userEmail:e.auth.user.email,userRole:t}}),(function(e){return{logout:function(){return e(A())}}}))(Object(ee.a)((function(e){return{root:{flexGrow:1},logo:{margin:"5px 10px 0 0",height:43},grow:{flexGrow:1},userInfo:{marginRight:10},role:{fontSize:12,textAlign:"right",fontWeight:"bold",margin:"4px 0 -2px 0",paddingTop:3},email:{fontSize:12,fontWeight:"light",textAlign:"right",margin:"-2px 0 0 0",padding:0},clickable:{cursor:"pointer"}}}))(Ie)),Ae=n(1087),Ce=n(1088),Se=n(1098),Pe=n(1089),Ne=n(142),ke=n(1083),je=n(346),we=n.n(je),Re=n(347),xe=n.n(Re),De=n(1094),Le=n(1086),Ue=n(1084),Ge=n(345),Fe=n.n(Ge),Me=n(1085),Be=n(343),ze=n.n(Be),Ke=n(344),He=n.n(Ke),We=n(342),Je=n.n(We),qe=n(1097),Ve=Object(ke.a)((function(e){return{root:{width:"100%"},chips:{marginRight:5},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function Qe(e){var t=e.classes;return e.turn?r.a.createElement(de.a,{container:!0,item:!0,xs:12},r.a.createElement(de.a,{item:!0,xs:10},r.a.createElement(de.a,{item:!0,xs:10},Xe[e.turn.sentiment.Sentiment],r.a.createElement(me.a,{style:{fontWeight:"bold"},className:t.heading,component:"span"},e.turn.speaker===Ye?"Agent ":"Customer "),r.a.createElement(me.a,{style:{color:"#4186b2"},className:t.secondaryHeading,component:"span"},e.turn.start_time)),r.a.createElement(de.a,{item:!0,xs:10},e.turn.text))):null}var Xe={NEGATIVE:r.a.createElement(Je.a,{style:{color:"#ff9495"}}),POSITIVE:r.a.createElement(ze.a,{style:{color:"#6cd3aa"}}),NEUTRAL:r.a.createElement(He.a,{style:{color:"#d5d5d5"}})},Ye="AGENT",$e=function(e){return e.hasOwnProperty("channel")?e.channel:e.speaker_label};function Ze(e){var t,n=Ve(),a=e.playing&&e.transcript.audioURI===e.currentKey,o=[((t=e.currentSentiment)||{}).call_motivation_status,(t||{}).call_resolution_status],i=Object(Ne.a)(o,2),c=i[0],s=i[1],l=e.showing&&e.currentKey===e.transcript.fullTranscriptURI||e.showing&&e.currentKey===e.transcript.audioURI;return r.a.createElement("div",{className:n.root},r.a.createElement(De.a,{expanded:l,onClick:function(t){return e.toggleTranscript(t,e.transcript.fullTranscriptURI,e.transcript.analysisURI)},onFocus:function(e){return e.stopPropagation()}},r.a.createElement(Ue.a,{expandIcon:r.a.createElement(Fe.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},r.a.createElement("div",{className:n.column},r.a.createElement(me.a,{className:n.heading},"Contact Summary"),r.a.createElement(me.a,{className:n.secondaryHeading},"Uploaded: ",e.transcript.user),r.a.createElement(me.a,{className:n.secondaryHeading},"Last Modified: ",e.transcript.lastModified)),r.a.createElement("div",{className:n.column,style:{margin:"auto 0"}},r.a.createElement(he.a,{"aria-label":"play/pause",onClick:function(t){return e.togglePlay(t,e.transcript.audioURI)},onFocus:function(e){return e.stopPropagation()}},!a&&r.a.createElement(we.a,{className:n.playIcon}),a&&r.a.createElement(xe.a,{className:n.playIcon})),r.a.createElement(me.a,{className:n.secondaryHeading},e.transcript.transcriptionJobName))),r.a.createElement(Me.a,null),r.a.createElement(Le.a,{className:n.details},e.currentSentiment&&l?r.a.createElement("div",{className:n.root},r.a.createElement(de.a,{container:!0,spacing:1},r.a.createElement(de.a,{item:!0,xs:12,style:{paddingBottom:".5em"}},r.a.createElement(me.a,{style:{fontWeight:"bold"},className:n.secondaryHeading,component:"span"},"Categories")),r.a.createElement(de.a,{container:!0,item:!0,xs:12,style:{paddingBottom:".5em"}},c&&r.a.createElement(qe.a,{className:n.chips,label:c,color:"primary"}),s&&r.a.createElement(qe.a,{className:n.chips,label:s,color:"primary"})),r.a.createElement(de.a,{item:!0,xs:12},r.a.createElement(me.a,{style:{fontWeight:"bold"},className:n.secondaryHeading,component:"span"},"Transcript")),function(e){var t=parseInt(2===e.sentiment.turns.numChannels?e.labels.agentChannel:e.labels.agentLabel);console.log(t);var n=0===t?1:0;return e.sentiment.turns.filter((function(e){return $e(e)===n})).map((function(e){return e.speaker="CUSTOMER"})),e.sentiment.turns.filter((function(e){return $e(e)===t})).map((function(e){return e.speaker=Ye})),console.log(e.sentiment.turns),e.sentiment.turns}({labels:e.transcript.labels,sentiment:e.currentSentiment}).map((function(e,t){return r.a.createElement(Qe,{key:"transcript-line-"+t,turn:e,classes:n})})))):r.a.createElement(Ae.a,null))))}var et=new _,tt={playing:!1,showing:!1,currentAudio:null,currentKey:null},nt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(X.a)(this,Object(Y.a)(t).call(this,e))).baseUrl="__BASE_API__",n.state=Object(s.a)({},tt),n.togglePlay=n.togglePlay.bind(Object(re.a)(n)),n.toggleTranscript=n.toggleTranscript.bind(Object(re.a)(n)),n.nextPage=n.nextPage.bind(Object(re.a)(n)),n}return Object($.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getTranscripts()}},{key:"togglePlay",value:function(e,t){var n=this;e.stopPropagation(),this.state.playing?this.setState(Object(s.a)({},this.state,{playing:!1})):et.getAuth().then((function(e){var a={method:"GET",headers:{Authorization:"".concat(e.accessToken)},redirect:"follow"};return fetch("".concat(n.baseUrl,"/api/audio?uri=").concat(encodeURIComponent(t)),a)})).then((function(e){return e.json()})).then((function(e){return n.setState({playing:!0,currentAudio:e.uri,currentKey:t})}))}},{key:"toggleTranscript",value:function(e,t,n){e.stopPropagation(),this.state.showing?this.setState(Object(s.a)({},this.state,{currentKey:null,showing:!1})):(this.props.getSentiment(n),this.setState({showing:!0,currentKey:t}))}},{key:"nextPage",value:function(){this.props.transcript.lastEvaluatedKey&&this.props.getTranscripts(this.props.transcript.lastEvaluatedKey)}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.transcripts.loading?r.a.createElement(Ae.a,null):this.props.transcripts.loading||0!==Object.keys(this.props.transcripts.data).length?this.props.transcripts.loading||0===Object.keys(this.props.transcripts.data).length?void 0:r.a.createElement("div",null,r.a.createElement(Te,{history:this.props.history}),r.a.createElement("h1",null,"Calls"),r.a.createElement(Ce.a,{component:"nav","aria-labelledby":"nested-list-subheader",style:{width:"100%"}},this.props.transcripts.data.map((function(t){return r.a.createElement(Se.a,{key:t.audioURI,button:!1},r.a.createElement(Ze,Object.assign({transcript:Object(s.a)({},t,{labels:e.props.transcripts.labels}),currentSentiment:e.props.sentiment.data},e.state,{togglePlay:e.togglePlay,toggleTranscript:e.toggleTranscript})))}))),this.state.playing&&r.a.createElement("audio",{src:this.state.currentAudio,autoPlay:!0}),r.a.createElement(Pe.a,{style:{marginLeft:16},variant:"contained",disabled:null===this.props.transcripts.lastEvaluatedKey,onClick:this.nextPage},"Next Page")):r.a.createElement("div",null,r.a.createElement(Te,{history:this.props.history}),r.a.createElement(de.a,{container:!0,spacing:0,alignItems:"center",justify:"center"},r.a.createElement("div",null,r.a.createElement(me.a,{className:t.heading},"Welcome to the Intelligent Contact Center Post Call Analytics."),r.a.createElement(me.a,{className:t.heading},"Please upload some calls using the Upload button in the top right corner of the Navigation Bar."),r.a.createElement(me.a,{className:t.heading},"If you just uploaded, Please Refresh this page in a few minutes to view calls."))))}}]),t}(a.Component),at=Object(K.b)((function(e){return{transcripts:e.transcripts,sentiment:e.sentiment}}),(function(e){return{logout:function(){return e(A())},getTranscripts:function(t){return e(w(t))},getSentiment:function(t){return e(F(t))}}}))(Object(ee.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(20),padding:e.spacing(1,2)},secondaryHeading:{fontSize:e.typography.pxToRem(20),color:e.palette.text.secondary}}}))(ie(nt))),rt=function(e){return{"@global":{body:Object(s.a)({},e.typography.body1,{margin:0}),h6:{color:e.palette.primary.main,fontWeight:"normal"}}}},ot=n(64),it=n(354),ct=n(1090),st=n(1091),lt=n(1092),ut=n(1099),pt=n(1093),dt=n(350),mt=n.n(dt),ht=n(353),gt=n(1095),ft=n(349),Et=n.n(ft),_t=new _,yt=Object(ke.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},paper:{padding:2,textAlign:"center"}}),Ot=function(){var e=Object(le.a)(se.a.mark((function e(t){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new FileReader;a.onabort=function(){return n("File read aborted")},a.onerror=function(e){return n(e)},a.onloadend=function(){return e({data:a.result,contentType:t.type,name:t.name.replace(/ /g,"_"),lastModified:Et.a.utc(new Date(t.lastModified)).toISOString()})},a.readAsArrayBuffer(t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bt=Object(K.b)((function(){return{}}),(function(){return{}}))(Object(ee.a)((function(){return{}}))(ie((function(e){var t,n={status:null,files:[]},r=yt(),o=(t={},Object(ot.a)(t,"FILE_DROPPED",(function(e,t){return{status:null,files:e.files.concat(t)}})),Object(ot.a)(t,"FILE_REMOVED",(function(e,t){return{status:null,files:e.files.filter((function(e){return e.path!==t}))}})),Object(ot.a)(t,"CLEAR_FILES",(function(){return n})),Object(ot.a)(t,"PENDING",(function(e){return Object(s.a)({},e,{status:"PENDING"})})),Object(ot.a)(t,"SUCCESS",(function(){return Object(s.a)({},n,{status:"SUCCESS"})})),Object(ot.a)(t,"FAIL",(function(e){return Object(s.a)({},e,{status:"FAIL"})})),t),i=a.useReducer((function(e,t){return o[t.type]?o[t.type](e,t.payload):e}),n),c=Object(Ne.a)(i,2),l=c[0],u=c[1];console.log("Stage: ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_COGNITO_DOMAIN:"__C_DOMAIN__",REACT_APP_COGNITO_IDENTITY_POOL_ID:"__CID_POOL__",REACT_APP_COGNITO_USER_POOL_ID:"__C_POOL__",REACT_APP_BASE_API:"__BASE_API__",REACT_APP_COGNITO_REDIRECT:"__C_REDIR__",REACT_APP_COGNITO_CLIENT_ID:"__C_CLIENT_ID__"}).STAGE));var p=function(){var e=Object(le.a)(se.a.mark((function e(){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_t.getAuth();case 2:if(t=e.sent){e.next=5;break}throw Error("No token found");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(le.a)(se.a.mark((function e(){var t,n,a,r,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(l.files.map((function(e){return Ot(e)})));case 2:if(t=e.sent){e.next=5;break}throw Error("No files to upload");case 5:return e.next=7,p();case 7:return n=e.sent,e.next=10,fetch("".concat("__BASE_API__","/api/presigned"),{method:"POST",headers:{Authorization:"".concat(n.accessToken)},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({files:t.map((function(e){return{name:e.name.replace(/ /g,"_"),type:e.contentType,lastModified:e.lastModified,jobId:Object(gt.a)()}}))})});case 10:if((a=e.sent).ok){e.next=13;break}throw Error(a.statusText);case 13:return e.next=15,a.json();case 15:return r=e.sent,console.log(r),e.next=19,p();case 19:return n=e.sent,e.next=22,fetch("".concat("__BASE_API__","/api/status"),{method:"POST",headers:{Authorization:"".concat(n.accessToken)},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({uris:r.map((function(e){return{uri:"s3://".concat(e.Bucket,"/").concat(e.Key),lastModified:e.lastModified,jobId:e.jobId}}))})});case 22:return e.next=24,Promise.all(r.map((function(e){var n=t.find((function(t){return t.name.replace(/ /g,"_")===e.name}));if(!n)throw Error("No file found for name "+e.name);return fetch(e.url,{method:"PUT",headers:{"Content-Type":n.contentType},redirect:"follow",referrerPolicy:"no-referrer",body:n.data})})));case 24:o=e.sent,console.log(o);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.createElement("div",null,a.createElement(Te,e),a.createElement(it.a,null,a.createElement(ct.a,{className:r.root},a.createElement(st.a,null,a.createElement(me.a,{color:"textSecondary",gutterBottom:!0,className:r.title},"Upload Files"),a.createElement(de.a,{container:!0,spacing:3},a.createElement(de.a,{item:!0,xs:12},a.createElement(it.a,{variant:"outlined",className:r.paper},a.createElement(ht.a,{onDrop:function(e,t,n){return u({type:"FILE_DROPPED",payload:e})}},(function(e){var t=e.getRootProps,n=e.getInputProps;return a.createElement("div",Object.assign({style:{height:"30vh"}},t()),a.createElement("input",n()),a.createElement(me.a,{className:r.title},"Drag and drop files here"))}))))),a.createElement(lt.a,null,l.files.map((function(e){return a.createElement(qe.a,{key:e.path,avatar:a.createElement(ut.a,{alt:"File"},a.createElement(mt.a,null)),label:e.path,onDelete:function(){return t=e.path,u({type:"FILE_REMOVED",payload:t});var t}})})))),a.createElement(pt.a,null,a.createElement(Pe.a,{variant:"contained",color:"default",size:"small",onClick:function(){return u({type:"CLEAR_FILES"})}},"Clear"),a.createElement(Pe.a,{disabled:"PENDING"===l.status,variant:"contained",color:"primary",startIcon:a.createElement(Ee.a,null),onClick:function(){u({type:"PENDING"}),d().then((function(){u({type:"SUCCESS"})})).catch((function(e){console.log(e),u({type:"FAIL"})}))}},"Upload"),"FAIL"===l.status&&a.createElement(me.a,{color:"textSecondary"},"Upload Failed. Try Logging In."),"PENDING"===l.status&&a.createElement(Ae.a,null),"SUCCESS"===l.status&&a.createElement(me.a,{color:"textSecondary"},"Upload Successful")))))}))));m.c.configure({Auth:{region:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_COGNITO_DOMAIN:"__C_DOMAIN__",REACT_APP_COGNITO_IDENTITY_POOL_ID:"__CID_POOL__",REACT_APP_COGNITO_USER_POOL_ID:"__C_POOL__",REACT_APP_BASE_API:"__BASE_API__",REACT_APP_COGNITO_REDIRECT:"__C_REDIR__",REACT_APP_COGNITO_CLIENT_ID:"__C_CLIENT_ID__"}).REACT_APP_REGION,userPoolId:"__C_POOL__",userPoolWebClientId:"__C_CLIENT_ID__",oauth:{domain:"__C_DOMAIN__",scope:["profile","openid"],redirectSignIn:"__C_REDIR__",redirectSignOut:"__C_REDIR__",responseType:"code"}}});var vt=function(e){function t(){return Object(l.a)(this,t),Object(X.a)(this,Object(Y.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(Z.c,{history:ne},r.a.createElement(Z.d,null,r.a.createElement(Z.b,{exact:!0,path:"/login",component:ae}),r.a.createElement(Z.b,{path:"/calls",component:at}),r.a.createElement(Z.b,{exact:!0,path:"/",component:ae}),r.a.createElement(Z.b,{path:"/upload",component:bt}),r.a.createElement(Z.a,{from:"/*",exact:!0,to:"/calls"})))}}]),t}(a.Component),It=Object(ee.a)(rt)(vt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Tt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,At=Object(c.e)(z,Tt(Object(c.a)(Q,H.a)));i.a.render(r.a.createElement(K.a,{store:At},r.a.createElement(W.a,{theme:V},r.a.createElement(It,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},180:function(e,t){},185:function(e,t){},360:function(e,t,n){e.exports=n(1050)},391:function(e,t){},393:function(e,t){},423:function(e,t){},424:function(e,t){},468:function(e,t){},470:function(e,t){},493:function(e,t){}},[[360,1,2]]]);
//# sourceMappingURL=main.66075c3d.chunk.js.map