(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{"2i+x":function(e,t,i){i.d(t,"a",(function(){return n}));const n=e=>{const{thumbnail:t,url:i,width:n,height:a,duration:r}=e||{};return t&&i&&n&&a&&{thumbnail:t,url:i,width:n,height:a,duration:r}||void 0}},"3Qy3":function(e,t,i){i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));const n=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5}),a=e=>{switch(!0){case e.includes("Chrome"):return n.CHROME;case e.includes("Safari"):return n.SAFARI;case e.includes("Firefox"):return n.FIREFOX;case e.includes("Opera"):return n.OPERA;case e.includes("IE"):return n.IE;default:return n.OTHER}}},"51gp":function(e,t,i){i.d(t,"a",(function(){return T}));var n=i("nKUr"),a=i("q1tI"),r=i("sEfC"),s=i.n(r),o=i("qrav");var l=i("BEAQ"),d=i("9pre"),c=i("U4JR"),u=i("n6mq");function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const p=[0,.25,.5,.75,.95,.97],y=[0,.5,.8,1],m={threshold:y},b={rootMargin:"-64px 0px 0px 0px",threshold:d.c},f=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,STALLING:3});function v(){return(new Date).getTime()}function g(e){return!!e.volume&&e.volume>0}class T extends a.Component{constructor(e){super(e),h(this,"videoWrapperRef",Object(a.createRef)()),h(this,"handleWindowResize",()=>{if(!this.fullscreen){const e=this.getDimensions(),{height:t,width:i}=this.currentInterval;e.height!==t||e.width!==i?this.startNewInterval(e):(this.currentInterval.windowHeight=e.windowHeight,this.currentInterval.windowWidth=e.windowWidth)}}),h(this,"handlePlayheadDown",({event:e})=>{const{onPlayheadDown:t}=this.props;this.setState({seeking:!0}),t&&t({event:e})}),h(this,"handlePlayheadUp",({event:e})=>{const{onPlayheadUp:t}=this.props;this.setState({seeking:!1}),t&&t({event:e})}),h(this,"handleLoop",()=>{this.videoTime=0}),h(this,"handleTimeChange",e=>{const{seeking:t,ready:i}=this.state;if(!this.currentInterval.videoDuration)return;const n=1e3*e.time,a=function(e,t,i,n){if(e>t)return null;if(i<=0)return null;for(const a of n){const n=a*i;if(e<=n&&t>n)return a}return null}(this.videoTime,n,this.currentInterval.videoDuration,p);if("number"==typeof a&&this.props.playing&&!t&&i){const e=v();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:Math.floor(4*a),quartilePercentValue:a})}this.videoTime=n,this.props.onTimeChange&&this.props.onTimeChange(e)}),h(this,"handleDurationChange",e=>{this.currentInterval.videoDuration=1e3*e.duration,this.props.onDurationChange&&this.props.onDurationChange(e)}),h(this,"handleReady",e=>{const{ready:t}=this.state;t||this.setState({ready:!0}),this.props.onReady&&this.props.onReady(e)}),h(this,"handleEnded",e=>{this.logFourthQuartileEvent(),this.props.loop&&(this.startNewInterval(),this.currentInterval.videoStartTime=0),this.props.onEnded&&this.props.onEnded(e)}),h(this,"handleVisibilityChange",(e,t)=>{if(0===e.length)return;const i=e.slice(-1)[0],n=function(e,t){for(let i=0;i<t.length;i+=1){const n=t[i],a=t[i+1];if(null==a)return n;if(n<=e&&e<a)return n}return null}(Number.parseFloat(i.intersectionRatio.toFixed(2)),y);null==n||n===this.currentInterval.viewability||this.fullscreen||(0===n?this.startNewInterval({viewability:n,playbackState:f.PAUSED}):this.startNewInterval({viewability:n}))}),h(this,"handleFullscreenChange",({event:e,fullscreen:t})=>{if(t){const{height:e,width:t}=window.screen;this.startNewInterval({height:e,width:t,windowHeight:e,windowWidth:t})}else t||this.startNewInterval(this.getDimensions());this.fullscreen=t,this.props.onFullscreenChange&&this.props.onFullscreenChange({event:e,fullscreen:t})}),h(this,"handleClose",()=>{this.startNewInterval()}),h(this,"handleContextMenu",e=>{e.preventDefault()}),this.state={ready:!1,seeking:!1};const t=v();this.handleWindowResize=s()(this.handleWindowResize,1e3),this.currentInterval={videoDuration:0,startTime:t,endTime:t,videoStartTime:0,videoEndTime:0,isAudible:g(e),playbackState:this.getPlaybackState(e,this.state),quartile:-1,quartilePercentValue:0,height:null,width:null,windowHeight:null,windowWidth:null,viewability:null},this.videoTime=0,this.fullscreen=!1}componentDidMount(){this.currentInterval={...this.currentInterval,...this.getDimensions()},window.addEventListener("resize",this.handleWindowResize),window.addEventListener("beforeunload",this.handleClose)}componentDidUpdate(e,t){const i={};g(e)&&!g(this.props)?i.isAudible=!1:!g(e)&&g(this.props)&&(i.isAudible=!0);const n=this.getPlaybackState(this.props,this.state);this.getPlaybackState(e,t)!==n&&(i.playbackState=n),Object.keys(i).length>0&&this.startNewInterval(i)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("beforeunload",this.handleClose),this.startNewInterval()}getPlaybackState(e,t){return t.ready?e.playing&&!t.seeking?f.PLAYING:f.PAUSED:f.LOADING}getDimensions(){let e,t;if(this.videoWrapperRef.current){const i=this.videoWrapperRef.current;i.clientHeight&&i.clientWidth&&(e=i.clientHeight,t=i.clientWidth)}return{height:e,width:t,windowHeight:window.innerHeight,windowWidth:window.innerWidth}}logVideoEvent(e,t){const{contextLogData:i}=this.props,{height:n,width:a,windowHeight:r,windowWidth:s,viewability:o,...l}=t;if(null!=n&&null!=a&&null!=r&&null!=s&&null!=o){const t={...l,height:n,width:a,windowHeight:r,windowWidth:s,viewability:o};Object(c.b)(e,function(e){const{eventData:{videoEvent:{videoDuration:t,startTime:i,endTime:n,videoStartTime:a,videoEndTime:r,isAudible:s,height:o,width:l,playbackState:d,quartile:c,quartilePercentValue:u,windowHeight:h,windowWidth:p,viewability:y}},...m}=e;return{...m,eventData:{videoEventData:{videoDuration:t,time:i,endTime:n,videoTime:a,endVideoTime:r,isAudible:s,height:o,width:l,playbackState:d,quartile:c,quartilePercentValue:u,windowHeight:h,windowWidth:p,viewability:y}}}}({...i,view:this.fullscreen?108:i.view,eventData:{videoEvent:t}}))}}logFourthQuartileEvent(){const e=v();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:4,quartilePercentValue:1})}startNewInterval(e){const t=v();this.logVideoEvent(6904,{...this.currentInterval,endTime:t,videoEndTime:this.videoTime}),this.currentInterval={...this.currentInterval,...e,startTime:t,videoStartTime:this.videoTime,endTime:-1,videoEndTime:-1}}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:d,captions:c,contextLogData:u,controls:h,cropHeight:p,hlsConfig:y,inAdsDesktopVideoExperiment:f,loop:v,objectFit:g,onLoadedChange:T,onPause:P,onPlay:_,onSeek:E,onVolumeChange:I,playbackRate:R,playing:D,playsInline:S,poster:O,preload:w,rootMargin:C,src:A,videoStartTime:L,volume:M}=this.props,{seeking:k}=this.state,F=f?b:m;return void 0!==C&&(F.rootMargin=C),Object(n.jsx)(o.a,{options:F,onVisibilityChange:this.handleVisibilityChange,children:Object(n.jsx)("div",{ref:this.videoWrapperRef,onContextMenu:this.handleContextMenu,style:p?{display:"flex",alignItems:"center",height:"236px"}:{},children:Object(n.jsx)(l.a,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:d,captions:c,contextLogData:u,controls:h,hlsConfig:y,loop:v,objectFit:g,onDurationChange:this.handleDurationChange,onEnded:this.handleEnded,onFullscreenChange:this.handleFullscreenChange,onLoadedChange:T,onLoop:this.handleLoop,onPause:P,onPlay:_,onPlayheadDown:this.handlePlayheadDown,onPlayheadUp:this.handlePlayheadUp,onReady:this.handleReady,onSeek:E,onTimeChange:this.handleTimeChange,onVolumeChange:I,playbackRate:R,playing:!k&&D,playsInline:S,poster:O,preload:w,src:A,videoStartTime:L,volume:M})})})}}h(T,"defaultProps",u.ab.defaultProps)},"5f3z":function(e,t,i){function n({appliedProductFilters:e,autoCorrectionDisabled:t,filters:i,query:n,scope:a,selectedPinImgSig:r,user:s}){const o=[a,i,e,s,r,n].map(e=>null!=e?e:"").join(":");return t?"auto-correction-disabled:"+o:o}function a({autoCorrectionDisabled:e=!1,appliedProductFilters:t=null,bubbleId:i=null,filters:n=null,query:a=null,rs:r="direct_navigation",scope:s="pins",selectedPinImgSig:o=null,sourceId:l=null,user:d}){return{article:i,appliedProductFilters:t,auto_correction_disabled:e,corpus:o?"personalize":null,customized_rerank_type:o?"manas_graph_sage_only_wand_rewrite":null,filters:n,query:a,query_pin_sigs:o,redux_normalize_feed:!0,rs:r,scope:s,source_id:l,user:d}}i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}));const r={name:"BaseSearchResource",options:e=>{const{autoCorrectionDisabled:t,appliedProductFilters:i,filters:n,selectedPinImgSig:r,query:s,rs:o,scope:l,bubbleId:d,user:c}=e;return a({autoCorrectionDisabled:!!t,appliedProductFilters:i,filters:n,query:s,rs:o,scope:l,selectedPinImgSig:r,bubbleId:d,user:c})},key:"searchResource"};function s(e){const{autoCorrectionDisabled:t,appliedProductFilters:i,filters:n,selectedPinImgSig:r,query:s,rs:o,scope:l,bubbleId:d,user:c}=e;return{name:"BaseSearchResource",options:a({autoCorrectionDisabled:!!t,appliedProductFilters:i,filters:n,query:s,rs:o,scope:l,selectedPinImgSig:r,bubbleId:d,user:c})}}},"7jH2":function(e,t,i){i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a.a})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return u})),i.d(t,"h",(function(){return h})),i.d(t,"j",(function(){return y})),i.d(t,"k",(function(){return m})),i.d(t,"l",(function(){return b})),i.d(t,"m",(function(){return f})),i.d(t,"i",(function(){return v})),i.d(t,"n",(function(){return g})),i.d(t,"o",(function(){return T})),i.d(t,"p",(function(){return P.a})),i.d(t,"q",(function(){return _})),i.d(t,"r",(function(){return R})),i.d(t,"s",(function(){return D})),i.d(t,"t",(function(){return S})),i.d(t,"u",(function(){return O})),i.d(t,"v",(function(){return w})),i.d(t,"w",(function(){return C})),i.d(t,"x",(function(){return L})),i.d(t,"y",(function(){return M})),i.d(t,"z",(function(){return k})),i.d(t,"A",(function(){return V}));var n=({closeupPaneWidth:e,imgSrc:t,isGif:i,pin:n})=>{const a=g(Object(P.a)({pin:n})),{image564x:r={}}=m(a)||{},{imageOrig:s={}}=f(a)||{},o=0===Object.keys(r).length?s:r,l=o.height,d=o.width,{image236x:c={}}=y(g(Object(P.a)({pin:n})))||{},u=c.url,h=Math.max(Math.min(d,e),60),p=h/d*l;return{alt:n.description,src:i?t:u,naturalHeight:p,naturalWidth:h}},a=i("Nle8");function r(e){return!e.is_promoted}var s=e=>{const t=(e||[]).reduce((e,t)=>t.name?e.concat({name:t.name}):e,[]);return t.length>0?t:null};function o(e){if(e&&e.pin){const t=e.pin.rich_metadata;if(t)return t.products?144:t.article?141:t.recipe?145:139;if(e.pin.story_pin_data)return 157}return 140}var l=i("pOug");var d=Object(l.a)(e=>{const{richMetadata:t}=e,{article:i}=t,{name:n,description:a,authors:r,date_published:o}=i||{};return n?{...e,article:{name:n,description:a,authors:s(r),datePublished:o&&new Date(o)||void 0}}:null});var c=Object(l.a)(e=>{const{attribution:t}=e.pin,{author_url:i,url:n,author_name:a,title:r,provider_name:s,cc_url:o,embed:l}=t||{};return s&&n?{...e,attribution:{providerUrl:n,providerName:s,title:r,authorUrl:i,authorName:a,ccUrl:o,embed:l}}:null});var u=Object(l.a)(e=>{const{categorizedIngredients:t}=e.recipe;return t&&t.length>0?{...e,categorizedIngredients:t}:null});var h=Object(l.a)(e=>{const{display_name:t}=e.richSummary;return t?{...e,displayName:t}:null});const p=e=>t=>{const{images:i}=t,n=i[e],{url:a,width:r,height:s}=n||{};return a&&r&&s?{url:a,width:r,height:s}:null},y=Object(l.a)(e=>{const t=p("236x")(e);return t&&{...e,image236x:t}}),m=Object(l.a)(e=>{const t=p("564x")(e);return t&&{...e,image564x:t}}),b=Object(l.a)(e=>{const t=p("736x")(e);return t&&{...e,image736x:t}});var f=Object(l.a)(e=>{const{images:t}=e,i=t.orig,{url:n,width:a,height:r}=i||{};return n&&a&&r?{...e,imageOrig:{url:n,width:a,height:r}}:null});var v=Object(l.a)(e=>{const{embed:t}=e.pin,{type:i,src:n,subtype:a}=t||{},{attribution:r={}}=c(e)||{},{embed:s={}}=r,{src:o}=s,l=n||o;return l?{...e,embed:{type:i,src:l,subtype:a}}:null});var g=Object(l.a)(e=>{const{pin:t}=e,{images:i}=t,n=Object.keys(i||{}).reduce((e,t)=>{const n=i[t],{url:a,width:r,height:s}=n;return e&&a&&r&&s?{...e,[t]:{url:a,width:r,height:s}}:null},{});return n&&Object.keys(n).length>0?{...e,images:n}:null});var T=Object(l.a)(e=>{const{products:t=null}=D(e)&&_(D(e))||{},{pin:i}=e,{tracked_link:n,link:a,method:r}=i,s=n||a,o=s&&("catalog_bulk_create"===r||!!t)?decodeURIComponent(s):s;return o?{...e,link:o}:null}),P=i("O1y+");Object(l.a)(e=>{const{pin:t}=e,{aggregated_pin_data:i}=t,{pin_tags:n}=i||{};return n?{...e,pinTags:n}:null});var _=Object(l.a)(e=>{const{pin:t,richMetadata:i}=e,{buyable_availability:n}=t,{products:a}=i,r=Array.isArray(a)?a.map(e=>{const{name:t,offer_summary:i}=e,{in_stock:a,min_price:r,max_price:s,price:o}=i||{};let l=null;return void 0!==r&&void 0!==s?l=`${r} - ${s}`:void 0!==o&&(l=""+o),t?{name:t,outOfStock:!1===n||!1===a,priceText:l}:null}).filter(e=>null!==e):[];return r.length>0?{...e,products:{first:r[0],rest:r.slice(1)}}:null}),E=i("PsyL");const I=e=>{const{h:t,m:i}=e||{},n={hours:t||0,minutes:i||0};return void 0!==t||void 0!==i?{h:t,m:i,time:n,isoDuration:Object(E.a)(n)}:null};var R=Object(l.a)(e=>{const{richMetadata:t}=e,{recipe:i}=t,{name:n,categorized_ingredients:a,diets:r,from_aggregated_data:s,cook_times:o,servings_summary:l}=i||{},{total:d,cook:c,prep:u}=o||{},{summary:h}=l||{},p=I(u),y=I(c),m=I(d);return n?{...e,recipe:{name:n,categorizedIngredients:a,diets:r,fromAggregatedData:s,prepTime:p,cookTime:y,totalTime:m,servingSummary:h}}:null});var D=Object(l.a)(e=>{const{rich_metadata:t}=e.pin;return t?{...e,richMetadata:t}:null});var S=Object(l.a)(e=>{const{rich_summary:t}=e.pin;return t?{...e,richSummary:t}:null});var O=Object(l.a)(e=>{const{title:t}=e.richMetadata;return t?{...e,title:t}:null});var w=Object(l.a)(e=>{const{pin:t,inChangeTitlesExp:i}=e,{carousel_data:n,title:a,closeup_unified_title:r}=t;let s=i?r:a;if(n){const{carousel_slots:e=[],index:t}=n;e[t]&&e[t].title&&(s=e[t].title)}return s?{...e,title:s}:null});var C=Object(l.a)(e=>{const{richMetadata:t}=e,{tutorial:i}=t,{name:n,description:a,from_aggregated_data:r}=i||{};return i&&n?{...e,tutorial:{name:n,description:a,fromAggregatedData:r}}:null}),A=i("2i+x");var L=Object(l.a)(e=>{const{videos:t}=e.pin,{id:i,video_list:n={}}=t||{},{V_720P:a,V_HLSV4:r,V_HLSV3_MOBILE:s}=n,o=Object(A.a)(r),l=Object(A.a)(s),d=Object(A.a)(a),c=d||o||l;return i&&c?{...e,video:{id:i,hasVideo:c,mp4:d||void 0,hls:o||void 0,hlsv3:l||void 0}}:null});var M=Object(l.a)(e=>{const{video:t}=L(Object(P.a)(e))||{},{embed:i}=v(Object(P.a)(e))||{},n=!(!t||!(e=>{const{hlsv3:t,hls:i}=e,n=t||i;return!!n&&n.width>n.height})(t))||!(!i||!i.src||"pinstory"===i.subtype||"gif"===i.type);return{...e,isWideVideo:n}});function k({pin:e,boardCount:t}){return(!e.content_sensitivity||!e.content_sensitivity.is_sensitive_content)&&(void 0!==t&&t>=1)}var F=i("Zygf"),V=e=>!(e&&e.pinner&&e.pinner.blocked_by_me||e&&Object(F.a)(e))},"9pre":function(e,t,i){i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r}));const n=5,a="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},BEAQ:function(e,t,i){i.d(t,"b",(function(){return y})),i.d(t,"a",(function(){return m}));var n=i("nKUr"),a=i("q1tI"),r=i("PioT"),s=i("U4JR"),o=i("n6mq");function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const d=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,SEEKING:3,STALLING:4,FAILED:5}),c=1e3;class u extends a.Component{constructor(...e){super(...e),l(this,"state",{canPlay:!1}),l(this,"componentDidMount",()=>{this.props.playing&&(this.videoVisibleTime=new Date)}),l(this,"componentDidUpdate",e=>{!1===e.playing&&this.props.playing&&(this.videoVisibleTime=new Date,this.state.canPlay&&this.setStartupReadyTime())}),l(this,"setStartupReadyTime",()=>{!this.playbackPerformance.startupReadyTimeMs&&this.videoVisibleTime&&(this.playbackPerformance.startupReadyTimeMs=new Date-this.videoVisibleTime)}),l(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;if(e&&(t(e),this.videoPlayerRef=e,this.videoRefSetTime=new Date,this.videoPlayerRef.video&&this.videoRefSetTime)){const e=this.videoPlayerRef.video,t=this.videoRefSetTime;e.addEventListener("error",()=>{this.playbackPerformance.fatalErrorMsg="Video failed loading"}),e.addEventListener("loadeddata",()=>{this.playbackPerformance.startupLoadTimeMs||(this.playbackPerformance.startupLoadTimeMs=new Date-t)}),e.addEventListener("pause",()=>{this.playbackState=d.PAUSED}),e.addEventListener("waiting",()=>{null!=this.startPlayTime&&(this.playbackPerformance.totalPlayDuration+=this.currentVideoTime-this.startPlayTime,this.startPlayTime=null),this.playbackState!==d.STALLING&&(this.playbackPerformance.numStalls+=1,this.stallTimestamp=new Date),this.playbackState=d.STALLING}),e.readyState>=3&&this.setState({canPlay:!0})}}),l(this,"startVideoPlaybackTimings",()=>{const e=()=>{null!=this.stallTimestamp&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.stallTimestamp,this.stallTimestamp=null)};window.clearInterval(this.videoPlaybackIntervalId),this.videoPlaybackIntervalId=window.setInterval(()=>{if(!this.videoPlayerRef||!this.videoPlayerRef.video)return;const t=this.videoPlayerRef.video.currentTime,i=t*c;if(-1===this.currentVideoTime)return void(this.currentVideoTime=t);const n=i-(this.currentVideoTime*c+250);Math.abs(n)>200?(Math.abs(i-this.currentVideoTime*c)<200&&this.playbackState!==d.PAUSED?this.stallTimestamp||(this.playbackPerformance.numStalls+=1,this.stallTimestamp=new Date):this.stallTimestamp&&e(),null!=this.startPlayTime&&(this.playbackPerformance.totalPlayDuration+=this.currentVideoTime-this.startPlayTime,this.startPlayTime=null)):(this.playbackState=d.PLAYING,null==this.startPlayTime&&(this.startPlayTime=this.currentVideoTime),this.stallTimestamp&&e()),this.currentVideoTime=t},250)}),l(this,"currentVideoTime",-1),l(this,"playbackState",d.LOADING),l(this,"stallTimestamp",null),l(this,"startPlayTime",null),l(this,"videoRefSetTime",null),l(this,"videoVisibleTime",null),l(this,"playbackPerformance",{fatalErrorMsg:null,numStalls:0,startupLoadTimeMs:null,startupReadyTimeMs:null,totalPlayDuration:0,totalStallDurationMs:0}),l(this,"handleCanPlay",e=>{const{onReady:t,playing:i,videoStartTime:n}=this.props,{canPlay:a}=this.state;a||(i&&this.setStartupReadyTime(),null!=n&&this.videoPlayerRef&&this.videoPlayerRef.video&&(this.videoPlayerRef.video.currentTime=n),this.startVideoPlaybackTimings(),this.setState({canPlay:!0})),t&&t(e)}),l(this,"handleSeek",e=>{const{onSeek:t}=this.props;this.playbackState=d.SEEKING,t&&t(e)})}componentWillUnmount(){const{contextLogData:e,src:t}=this.props,i=this.videoPlayerRef&&this.videoPlayerRef.video,n=this.videoRefSetTime;if(i&&n){const n="string"==typeof t?t:t[0].src;null!=this.startPlayTime&&(this.playbackPerformance.totalPlayDuration+=this.currentVideoTime-this.startPlayTime,this.startPlayTime=null),null!=this.stallTimestamp&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.stallTimestamp,this.stallTimestamp=null),Object(s.b)(3606,{...e,eventData:{videoPerformanceData:{isCellular:!1,fatalError:this.playbackPerformance.fatalErrorMsg||void 0,nativeVideoDurationMs:i.duration*c,numberOfStalls:this.playbackPerformance.numStalls,overallWatchedDurationMs:this.playbackPerformance.totalPlayDuration*c,rebufferRate:this.playbackPerformance.totalStallDurationMs/(this.playbackPerformance.totalPlayDuration*c),startupLatencyMs:this.playbackPerformance.startupReadyTimeMs||-1,startupPlayerHeight:i.clientHeight,startupPlayerWidth:i.clientWidth,startupTimeMs:this.playbackPerformance.startupLoadTimeMs||-1,videoUrl:n}}})}window.clearInterval(this.videoPlaybackIntervalId)}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:l,captions:d,controls:c,loop:u,objectFit:h,onDurationChange:p,onEnded:y,onFullscreenChange:m,onLoadedChange:b,onPause:f,onPlay:v,onPlayheadDown:g,onPlayheadUp:T,onTimeChange:P,onVolumeChange:_,playbackRate:E,playing:I,playsInline:R,poster:D,preload:S,src:O,volume:w}=this.props,{canPlay:C}=this.state;return Object(n.jsx)(o.ab,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:l,captions:d,controls:c,loop:u,objectFit:h,onDurationChange:p,onEnded:y,onFullscreenChange:m,onLoadedChange:b,onPause:f,onPlay:v,onPlayheadDown:g,onPlayheadUp:T,onReady:this.handleCanPlay,onSeek:this.handleSeek,onTimeChange:P,onVolumeChange:_,playbackRate:E,playing:C&&I,playsInline:R,poster:D,preload:S,ref:this.setVideoPlayerRef,src:O,volume:w})}}var h=i("aFfM");function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const y=e=>{if(Array.isArray(e)){const t=e.find(e=>"video/m3u8"===e.type);return t?t.src:void 0}return RegExp("m3u8$").test(e)?e:void 0};class m extends a.PureComponent{constructor(e){super(e),p(this,"componentDidUpdate",(e,t)=>{var i;e.videoStartTime&&this.props.videoStartTime&&e.videoStartTime<this.props.videoStartTime&&(null===(i=this.videoPlayerRef)||void 0===i?void 0:i.video)&&(this.videoPlayerRef.video.currentTime=this.props.videoStartTime)}),p(this,"setVideoPlayerRef",e=>{e&&(this.videoPlayerRef=e)}),p(this,"handleOnEnded",({event:e})=>{const{loop:t,onLoop:i,onEnded:n}=this.props;n&&(n({event:e}),this.videoPlayerRef&&this.videoPlayerRef.video&&t&&(this.videoPlayerRef.video.play(),i&&i()))});const t=y(e.src);this.state={useHlsVideo:!r.b.isSafari()&&!!t}}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:o,captions:l,contextLogData:d,controls:c,hlsConfig:p,loop:m,objectFit:b,onDurationChange:f,onEnded:v,onFullscreenChange:g,onLoadedChange:T,onPause:P,onPlay:_,onPlayheadDown:E,onPlayheadUp:I,onReady:R,onSeek:D,onTimeChange:S,onVolumeChange:O,playbackRate:w,playing:C,playsInline:A,poster:L,preload:M,src:k,videoStartTime:F,volume:V}=this.props,{useHlsVideo:N}=this.state,j=y(k),U={...p,startPosition:F||-1},x=!v&&m;return N&&j?Object(n.jsx)(h.a,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:o,captions:l,contextLogData:d,controls:c,hlsConfig:U,loop:x,onDurationChange:f,onEnded:this.handleOnEnded,onFullscreenChange:g,onLoadedChange:T,onPause:P,onPlay:_,onPlayheadDown:E,onPlayheadUp:I,onReady:R,onSeek:D,onTimeChange:S,onVolumeChange:O,playbackRate:w,playing:C,playsInline:A,poster:L,preload:M,setVideoRef:this.setVideoPlayerRef,src:j,volume:V}):Object(n.jsx)(u,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:o,captions:l,contextLogData:d,controls:c,loop:x,objectFit:b,onDurationChange:f,onEnded:this.handleOnEnded,onFullscreenChange:g,onLoadedChange:T,onPause:P,onPlay:_,onPlayheadDown:E,onPlayheadUp:I,onReady:R,onSeek:D,onTimeChange:S,onVolumeChange:O,playbackRate:w,playing:C,playsInline:A,poster:L,preload:M,setVideoRef:this.setVideoPlayerRef,src:j||k,videoStartTime:F,volume:V})}}},KFEb:function(e,t,i){i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return d}));var n=i("5f3z"),a=i("qtKf");const r=["search_articles_story","style_pivot"],s={AGGREGATED_COMMENTS:"aggregatedComments",BOARD_ACTIVITYITEMS:"boardActivityItems",BOARD_ACTIVITYCOMMENTS:"boardActivityComments",BOARD_PINS:"boardPins",BOARD_SECTIONS:"boardSections",HOMEFEED_MORE_IDEAS_TABS:"homefeedMoreIdeasTabs",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",SECTION_PINS:"sectionPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unifiedComments",USER_DID_IT_DATA:"userDidItData"},o={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:s.USER_DID_IT_DATA,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:s.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{objectId:e}})=>({type:s.AGGREGATED_COMMENTS,id:e,reversed:!0}),BoardActivityFeedResource:({options:{board_id:e}})=>({type:s.BOARD_ACTIVITYITEMS,id:e}),BoardActivityCommentFeedResource:({options:{activityId:e,parentType:t}})=>({type:s.BOARD_ACTIVITYCOMMENTS,id:e,reversed:"boardactivitycomment"===t}),BoardFeedResource:({options:{board_id:e}})=>({type:s.BOARD_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:s.SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:s.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:t}})=>({type:s.PROFILE_BOARDS,id:Object(a.c)(e,t)}),BaseSearchResource:({options:{auto_correction_disabled:e,appliedProductFilters:t,scope:i,filters:a,query_pin_sigs:o,query:l,user:d},data:c})=>({type:s.SEARCH_PINS,id:Object(n.c)({appliedProductFilters:t,autoCorrectionDisabled:e,filters:a,query:l,selectedPinImgSig:o,scope:i,user:d}),items:c&&c.results&&c.results.filter(e=>!(e.story_type&&r.includes(e.story_type)))||[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:s.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:s.USER_DID_IT_DATA,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:s.TODAY_TAB,id:e}),MoreIdeasTabsResource:({data:e})=>({type:s.HOMEFEED_MORE_IDEAS_TABS,id:"hf",items:e&&e.tabs||[]}),RelatedArticlesResource:({options:{article_id:e}})=>({type:s.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:s.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:s.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:s.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:s.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e}})=>({type:s.UNIFIED_COMMENTS,id:e,reversed:!0})},l={aggregatedComments:{},boardActivityItems:{},boardActivityComments:{},boardPins:{},boardSections:{},homefeedMoreIdeasTabs:{},profileBoards:{},searchPins:{},sectionPins:{},storyPinData:{},todayArticleInterestFeed:{},todayTabFeed:{},unifiedComments:{},userDidItData:{}};function d(e,t,i){const n=[...e],a=n.splice(t,1)[0];return n.splice(i,0,a),n}t.b=(e=l,t)=>{switch(t.type){case"RESOURCE_FETCH_COMPLETE":case"RESOURCE_FETCH_MORE_COMPLETE":{const{payload:i}=t;if(!i.options.redux_normalize_feed)return e;const{type:n,id:a,items:r,reversed:l}=o[i.name](i);let d=(r||i.data||[]).map(e=>((e,t)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return t===s.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"boardactivity":return{id:e.id,type:"boardactivity"};case"boardactivitycomment":return{id:e.id,type:"boardactivitycomment"};case"board_section":return{type:"board_section",id:e.id};case"userdiditdata":return{type:"userdiditdata",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"userdiditdata",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}})(e,n));l&&(d=d.reverse());const c=e[n][a];if(c||"RESOURCE_FETCH_MORE_COMPLETE"!==t.type){const i=c||[];let r=d;return"RESOURCE_FETCH_MORE_COMPLETE"===t.type&&(r=l?d.concat(i):i.concat(d)),{...e,[n]:{...e[n],[a]:r}}}break}case"FEED_ITEM_REORDERED":{const{payload:{feedType:i,feedId:n,itemType:a,targetItemId:r,sourceItemId:o}}=t,l=e[i]||{},c=l[n]||[];let u=-1,h=-1;if([s.BOARD_PINS,s.SECTION_PINS,s.BOARD_SECTIONS,"profileBoards"].includes(i)&&(u=c.findIndex(e=>e.type===a&&e.id===o),h=c.findIndex(e=>e.type===a&&e.id===r)),-1!==u&&-1!==h)return{...e,[i]:{...l,[n]:d(c,u,h)}};break}case"FEED_ITEMS_REMOVED":{const{payload:{feedType:i,feedId:n,inverseSelection:a,itemType:r,itemIds:o=[]}}=t,l=e[i]||{},d=l[n];if(d&&d.length>0&&(i===s.SECTION_PINS||i===s.BOARD_PINS)){const t=d.filter(e=>{const t=o.includes(e.id);return!(e.type===r&&(a&&!t||!a&&t))}),s=!!t.find(e=>"pin"===e.type);return{...e,[i]:{...l,[n]:s?t:[]}}}if(d&&d.length>0&&i===s.BOARD_SECTIONS){const t=d.filter(e=>{const t=o.includes(e.id);return!(e.type===r&&t)});return{...e,[i]:{...l,[n]:t}}}if(d&&d.length>0&&(i===s.BOARD_ACTIVITYITEMS||i===s.AGGREGATED_COMMENTS||i===s.BOARD_ACTIVITYCOMMENTS||i===s.UNIFIED_COMMENTS||i===s.USER_DID_IT_DATA||i===s.STORY_PIN_DATA)){const t=d.filter(e=>{const t=o.includes(e.id);return!(e.type===r&&t)});return{...e,[i]:{...l,[n]:t}}}break}case"FEED_ITEMS_ADDED":{const{payload:{feedType:i,feedId:n,itemType:a,itemIds:r=[],prepend:o}}=t,l=e[i]||{},d=l[n];if(d&&(i===s.SECTION_PINS||i===s.BOARD_PINS)){const t=r.map(e=>({id:e,type:a}));let s=0;"story"===(d[0]||{}).type&&(s=1),"story"===(d[1]||{}).type&&(s=2);const o=[...d.slice(0,s),...t,...d.slice(s)];return{...e,[i]:{...l,[n]:o}}}if(d&&i===s.BOARD_SECTIONS){const t=[...r].reverse().map(e=>({id:e,type:"board_section"})),a=d?[...t,...d]:[...t];return{...e,[i]:{...l,[n]:a}}}if(i===s.BOARD_ACTIVITYITEMS||i===s.AGGREGATED_COMMENTS||i===s.BOARD_ACTIVITYCOMMENTS||i===s.UNIFIED_COMMENTS){const t=r.map(e=>({id:e,type:a})),s=d?[...o?t:d,...o?d:t]:t;return{...e,[i]:{...l,[n]:s}}}if(i===s.USER_DID_IT_DATA){const t=r.map(e=>({id:e,type:a})),s=d?[...t,...d]:t;return{...e,[i]:{...e[i],[n]:s}}}break}case"FEED_INVALIDATE":{const{payload:{feedType:i,feedId:n}}=t,a=e[i]||{};if(a[n])return{...e,[i]:{...a,[n]:null}};break}}return e}},MhBu:function(e,t,i){function n(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}i.d(t,"a",(function(){return n}))},Nle8:function(e,t,i){i.d(t,"a",(function(){return r}));var n=i("ajUs"),a=i("zpPL");function r(e,t){const i=a.a.instance;let r;if(i){const a=i.getState();if(a.pins&&e){const i=a.pins[e],s=a.location;if(null==t?void 0:t.shouldTrackForPrevLocation){const e=(null==i?void 0:i.tracking_params_map)||{},t=Object.keys(e).find(e=>"PinResource"!==e);i&&(r=t?e[t]:e.PinResource)}else i&&(r=Object(n.a)(i,s))}}return r}},"O1y+":function(e,t,i){var n=i("pOug");const a=Object(n.a)(e=>e.pin&&e.pin.id?{...e,id:e.id,aggregatedPinData:e.pin.aggregated_pin_data}:null);t.a=a},PioT:function(e,t,i){var n=i("+NLT"),a=i("3Qy3");i.d(t,"a",(function(){return a.a}));const r={getBrowser:()=>Object(a.b)(n.a.instance.browser_name||""),isSafari(){return this.getBrowser()===a.a.SAFARI},isChrome(){return this.getBrowser()===a.a.CHROME},isFirefox(){return this.getBrowser()===a.a.FIREFOX}};t.b=r},PsyL:function(e,t,i){t.a=function({hours:e,minutes:t}){return`PT${e}H${t}`}},ZVOf:function(e,t,i){i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l}));var n=i("eOdZ"),a=i("/X16");function r(e,t){return n.a.create("UserFollowResource",{user_id:e,aux_data:t?{pin_id:t}:void 0})}function s(e,t){return{type:a.a.USER_FOLLOW,payload:{id:e,value:t}}}function o(e,t=null){return i=>{r(e,t).callCreate().catch(()=>i(s(e,!1))),i(s(e,!0))}}function l(e,t=null){return i=>{r(e,t).callDelete().catch(()=>i(s(e,!0))),i(s(e,!1))}}},Zygf:function(e,t,i){function n(e){return Boolean(e.promoted_is_removable)}i.d(t,"a",(function(){return n}))},aFfM:function(e,t,i){i.d(t,"a",(function(){return h}));var n=i("nKUr"),a=i("q1tI"),r=i("ulZh"),s=i.n(r),o=i("U4JR"),l=i("n6mq");function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const c=1e3;function u(){return(new Date).getTime()}class h extends a.PureComponent{constructor(...e){super(...e),d(this,"state",{canPlayVideo:!1,isManifestParsed:!1}),d(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("canplay",()=>{this.setState({canPlayVideo:!0})}),e.readyState>=3&&this.setState({canPlayVideo:!0})}}),d(this,"currentVideoTime",0),d(this,"hls",null),d(this,"playbackPerformance",{fatalErrorMsg:"",firstLevelFetchTime:0,firstFragmentParsedTime:0,hasFatalError:!1,levelWatchDurationsMs:[],numStalls:0,rebufferingDurationMs:0,videoCreatedTime:0}),d(this,"initializeHls",()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,i=new s.a(t);i.loadSource(e),this.videoPlayerRef&&i.attachMedia(this.videoPlayerRef.video),i.on(s.a.Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0}),this.startVideoWatchTimings()}),i.on(s.a.Events.FRAG_PARSED,(e,t)=>{this.playbackPerformance.firstFragmentParsedTime||(this.playbackPerformance.firstFragmentParsedTime=u())}),i.on(s.a.Events.LEVEL_LOADING,(e,t)=>{this.playbackPerformance.firstLevelFetchTime||(this.playbackPerformance.firstLevelFetchTime=u())}),i.on(s.a.Events.ERROR,(e,t)=>{t.fatal&&(this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.fatalErrorMsg=t.details),t.details===s.a.ErrorDetails.BUFFER_STALLED_ERROR&&(this.playbackPerformance.numStalls+=1,t.buffer&&(this.playbackPerformance.rebufferingDurationMs+=t.buffer*c))}),this.hls=i}),d(this,"destroyHls",()=>{const{hls:e}=this;e&&e.destroy(),window.clearInterval(this.videoTimeIntervalId)}),d(this,"startVideoWatchTimings",()=>{window.clearInterval(this.videoTimeIntervalId),this.videoTimeIntervalId=window.setInterval(()=>{if(!this.hls||this.hls.currentLevel<=0||!this.videoPlayerRef||!this.videoPlayerRef.video)return;const e=this.videoPlayerRef.video.currentTime*c,{levelWatchDurationsMs:t}=this.playbackPerformance;if(t.length){if(this.hls.currentLevel!==t[t.length-1].level){const i=t.length-1;t[i].duration+=this.currentVideoTime-t[i].lastStartSegmentTime,t.push({level:this.hls.currentLevel,lastStartSegmentTime:e,duration:0})}else if(e<this.currentVideoTime||e-this.currentVideoTime>300){const i=t.length-1;t[i].duration+=this.currentVideoTime-t[i].lastStartSegmentTime,t[i].lastStartSegmentTime=e}}else t.push({level:this.hls.currentLevel,lastStartSegmentTime:e,duration:0});this.currentVideoTime=e},250)})}componentDidMount(){this.playbackPerformance.videoCreatedTime=u(),this.initializeHls()}componentDidUpdate(e){const{src:t}=this.props;var i,n;(typeof(i=e.src)!=typeof(n=t)||(Array.isArray(n)?i.length!==n.length||n.some((e,t)=>!Array.isArray(i)||e.type!==i[t].type||e.src!==i[t].src):n!==i))&&this.initializeHls()}componentWillUnmount(){const{contextLogData:e,src:t}=this.props,{firstLevelFetchTime:i,firstFragmentParsedTime:n,hasFatalError:a,levelWatchDurationsMs:r,numStalls:s,rebufferingDurationMs:l,videoCreatedTime:d}=this.playbackPerformance,u=this.videoPlayerRef&&this.videoPlayerRef.video;if(this.hls&&u&&r.length>0){const h="string"==typeof t?t:t[0].src,p=this.hls.levels,y=p[r[0].level]||{},m=u.currentTime*c;r[r.length-1].duration+=m-r[r.length-1].lastStartSegmentTime;const b=r.reduce((e,t)=>e+t.level*(p[t.level]||{}).bitrate*(t.duration||0)/c,0),f=r.reduce((e,t)=>e+(t.duration||0),0);Object(o.b)(3606,{...e,eventData:{videoPerformanceData:{startupTimeMs:n-i,startupLatencyMs:n-d,nativeVideoDurationMs:u.duration*c,startupVariantKbps:y.bitrate/1e3,startupPlayerWidth:u.clientWidth,startupPlayerHeight:u.clientHeight,startupVariantWatchedDurationMs:r[0].duration,startupVariantWidth:y.width,isCellular:!1,fatalError:a,averageVideoKbps:b/(f/c),overallWatchedDurationMs:f,numberOfStalls:s,rebufferRate:l/f,videoUrl:h}}})}this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:o,captions:d,controls:c,loop:u,onDurationChange:h,onEnded:p,onFullscreenChange:y,onLoadedChange:m,onPause:b,onPlay:f,onPlayheadDown:v,onPlayheadUp:g,onReady:T,onSeek:P,onTimeChange:_,onVolumeChange:E,playbackRate:I,playing:R,playsInline:D,poster:S,preload:O,src:w,volume:C}=this.props,{canPlayVideo:A,isManifestParsed:L}=this.state;return Object(n.jsx)(l.ab,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:i,accessibilityPauseLabel:a,accessibilityPlayLabel:r,accessibilityUnmuteLabel:s,aspectRatio:o,captions:d,controls:c,loop:u,onDurationChange:h,onEnded:p,onFullscreenChange:y,onLoadedChange:m,onPause:b,onPlay:f,onPlayheadDown:v,onPlayheadUp:g,onReady:T,onSeek:P,onTimeChange:_,onVolumeChange:E,playbackRate:I,playing:L&&A&&R,playsInline:D,poster:S,preload:O,ref:this.setVideoPlayerRef,src:w,volume:C})}}},pOug:function(e,t,i){t.a=function(e){return function(t){return null!=t?e(t):null}}},qtKf:function(e,t,i){i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));const n=(e,t)=>`${e}:${t||""}`,a=(e,t)=>e.feeds.profileBoards[n(t.username,t.boardOrder)],r=(e,t)=>t.isOverview||t.inActivityView?"xxWide":t.isOwnProfile&&e.ui.views&&e.ui.views.profileBoardView||"wide"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/12-c674ce875bf14ed01151.mjs.map