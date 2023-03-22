(()=>{"use strict";var e={2150:(e,t,n)=>{n.d(t,{i:()=>r});var o=n(1232),r=function(){var e=o.Z.langPath,t=void 0===e?"":e,n="".concat(t,"/account/users"),r="".concat(t,"/balance");return{home:""===t?"/":"".concat(t),buyCrypto:"".concat(t,"/buy-bitcoin"),shortcutTrade:"".concat(t,"/buy-bitcoin/cny"),asset:"".concat(r,"/overview"),recharge:"".concat(r,"/recharge"),coinInfo:"".concat(t,"/markets/prices"),markets_spot:"".concat(t,"/markets/spot-info"),spot:"".concat(t,"/spot/trade"),newSpot:"".concat(t,"/trade-spot"),register:"".concat(t,"/account/register"),login:"".concat(t,"/account/login"),createSubAccount:"".concat(t,"/account/sub-account/batch-add"),subAccount:"".concat(t,"/account/sub-account"),otc:"".concat(t,"/otc/trade"),otcOrder:"".concat(t,"/otc/order"),trade:"".concat(t,"/trade-crypto/list"),newTrade:"".concat(t,"/buy-"),otcIdentification:"".concat(t,"/fiatIdentification"),verification:"".concat(n,"/verification"),future:"".concat(t,"/derivatives/futures"),swap:"".concat(t,"/derivatives/swap"),futureIndex:"".concat(t,"/futureTrade/futureIndex"),futureMarket:"".concat(t,"/futureTrade/futureMarket"),futureMarkPrice:"".concat(t,"/futureTrade/markPrice"),futureTop:"".concat(t,"/futureTrade/futureTop"),fullSpot:"".concat(t,"/spot/full"),fullMargin:"".concat(t,"/spot/full-margin"),fullFuture:"".concat(t,"/derivatives/futures/full"),fullSwap:"".concat(t,"/derivatives/swap/full"),jumpstartProject:"".concat(t,"/jumpstart/project"),jumpstart:"".concat(t,"/jumpstart"),starproject:"".concat(t,"/starproject"),defectSubmit:"".concat(n,"/defect/defectSubmit"),defectRecords:"".concat(n,"/defect/defectRecords"),kyc:"".concat(n,"/verification"),kycOverview:"".concat(t,"/account/kyc/personal/overview"),courseVideo:"".concat(n,"/course/video"),boundPhone:"".concat(n,"/phone/10"),defi:"".concat(t,"/web3"),download:"".concat(t,"/download"),supportChat:"".concat(t,"/support-center/chat"),landingPage:n}}},2565:(e,t,n)=>{n.d(t,{Z:()=>o});const o={CHECK_COUNTRY_LIMIT:"/v3/users/support/common/check-country-limit",GET_AGREEMENT:"/v3/users/local-config/get-agreement",UPDATE_AGREEMENT:"/v3/users/local-config/update-agreement",SWITCH_ACCOUNT:"/v3/users/subaccount/switchAccount",GET_SWITCHING_ACCOUNT_LIST:"/v3/users/subaccount/accountListForSwitching",CAN_SWITCH_ACCOUNT:"/v3/users/subaccount/canSwitchAccount",REPORT_USER_LANGUAGE:"/v3/users/support/current/lang",POST_SIMULATED_BALANCE_RESET:"/priapi/v5/balance/reset",GET_ANNOUNCEMENT:"/v2/support/home/web",HEADER_NAV_TAG:"/v2/support/home/navigation/info",GET_PREFERENCE:"/v3/users/local-config/settings",GET_MARKET_STATUS:"/priapi/v5/ecotrade/user/copy-auth-status"}},1149:(e,t,n)=>{n.d(t,{Z:()=>u});n(4886),n(2972),n(6953);var o=n(8361),r=n(5833),i=n.n(r);function a(e){var t=(e||{}).data;return t&&0===Number(t.code)?Promise.resolve(t):Promise.reject(t||{})}var c={};if(!(0,o.y)()){var s=function(e){return Promise.reject({status:e.statusCode,data:JSON.parse(e.body),headers:e.headers})};c.get=function(e,t,n){var o={params:t};return n&&(o.customToLogin=s),i().get(e,o).then(a)},c.getWithCache=function(e,t){return i().getWithCache(e,t).then(a)},c.post=function(e,t,n){var o=n?{customToLogin:s}:{};return i().post(e,t,o).then(a)},c.delete=function(e,t){return i().delete(e,t).then(a)}}const u=(0,o.y)()?{}:c},9384:(e,t,n)=>{n.d(t,{b:()=>d});var o=n(3144),r=n(5671),i=n(8361),a=n(1232),c=n(7092),s={};(0,i.y)()||(s=a.Z.isRenderByNode?window.__INIT_STATE__.headerContext.i18nData:window.okx_web_seo_tdk);var u={isDev:!0,needFetch:!1,site:"okx",project:"okx_web_seo_tdk",localeData:s,locale:a.Z.locale};(0,c.X6)(u);var d=(new((0,o.Z)((function e(){(0,r.Z)(this,e),this.t=function(e,t){return(0,c.Qj)(e,t)}})))).t},9867:(e,t,n)=>{n.d(t,{Dv:()=>g,Iu:()=>l,Wb:()=>f,bg:()=>v,lC:()=>m,lE:()=>h,tq:()=>p});n(5836),n(8924),n(5413),n(6603),n(965),n(3727),n(7120),n(6863),n(8218),n(4125),n(2972),n(4329),n(4557),n(4438),n(6190),n(79),n(472),n(4886);var o=n(7e3),r=n(1232),i=n(8361),a=n(6724),c=n(5833),s=n.n(c),u=n(8562),d="undefined"!==typeof u?u:{},l=function(e,t){var n=d.javaUse;return void 0!==n&&n?"##".concat(e,"##"):(0,o.O4)(e,t)};function p(){return/android|webos|iphone|ipod|blackberry/i.test(navigator.userAgent.toLowerCase())}var f=function(){var e=("undefined"!==typeof window?window.location:{}).pathname,t=(r.Z||{}).langPath;return"/"===e||e===t},v=function(){return!(0,i.y)()&&!!s().isLogin()},g=function(e){for(var t=window.location.search.substring(1).split("&"),n={},o=0;o<t.length;o++){var r=t[o].split("=");n[r[0]]=r[1]}if("string"===typeof e)return n[e]||"";if("object"===typeof e){var i={};return e.forEach((function(e){i[e]=n[e]||""})),i}return""},h=function(e,t,n){var o=t.toLocaleLowerCase();o.includes("script")||o.includes("javascript")||a.Z.set(e,t,n)},m=function(){if((0,i.y)())return!1;var e=window.location,t=void 0===e?{}:e,n=r.Z.langPath;return t.pathname.toLowerCase().startsWith("".concat(n,"/learn"))}},6458:(e,t,n)=>{var o=n(5671),r=n(3144),i=n(8361),a=n(6724),c=(n(4925),n(1832),n(2972),n(6953),n(8924),n(472),n(6863),n(5413),n(1232)),s=n(4834),u=n(1149),d=n(2565),l=n(9867),p={whiteListReg:/^\/(trade|markets|balance|account|login|register|academy|learn|support-center|status|fees|about|join-us|community|pisces|demo-trading-explorer|download|feedback|broker|cloud|liquid-marketplace|trading-bot)/i,blackListReg:/^\/trade-convert/i,newTradeUrl:"".concat(c.Z.langPath,"/trade"),checkSimulatedTrading:function(){"1"===localStorage.getItem("simulatedTrading")!==c.Z.simulatedTrading&&window.location.reload()},simulatedStatusListen:function(){var e="hidden",t="visibilitychange";"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),"undefined"!==typeof document.addEventListener&&"undefined"!==typeof document[e]&&document.addEventListener(t,(function(){document[e]||p.checkSimulatedTrading()}),!1),window.addEventListener("storage",(function(e){"simulatedTradingNotice"===e.key&&p.checkSimulatedTrading()}))},getReceiveCoin:function(){var e=s.Z.g.get("profile")||{};!e.simulatedReceive&&new Promise((function(e){u.Z.post(d.Z.POST_SIMULATED_BALANCE_RESET).then((function(){e()})).catch((function(t){"18002"===t.code&&e()}))})).then((function(){(e=s.Z.g.get("profile")||{}).simulatedReceive=1,s.Z.g.set("profile",e)}))},getReceiveHandle:function(){(0,l.bg)()&&c.Z.simulatedTrading&&p.getReceiveCoin()},checkWhiteUrl:function(){var e=c.Z.envSign,t=c.Z.simulatedTrading,n=c.Z.langPath,o=p.whiteListReg,r=p.newTradeUrl,i=p.blackListReg,a=window.location.pathname.replace(n,"");"prod"===e&&t&&(!i.test(a)&&o.test(a)||(window.location.href=r))},init:function(){var e=c.Z.isApp;(0,i.y)()||(window.location.search.indexOf("logout")>-1||!(0,l.bg)())&&(localStorage.removeItem("simulatedTrading"),a.Z.set("simulatedTrading","1",{expires:-1})),(0,i.y)()||e||(p.simulatedStatusListen(),p.getReceiveHandle(),p.checkWhiteUrl())}};p.init();var f=n(4165),v=n(5861),g=function(){var e=(0,v.Z)((0,f.Z)().mark((function e(){var t,n,o,r,i,a,s;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.Z.cdnBaseUrl,"swCache=enable",n=document.cookie.indexOf("swCache=enable")>-1,o=window.navigator.userAgent,r="serviceWorker"in navigator,i=o.indexOf("Mobile")>-1,a=o.indexOf("Electron")>-1,!(r&&!i&&a||n)){e.next=13;break}return e.next=10,navigator.serviceWorker.register("/sw.js",{scope:"/"});case 10:(s=e.sent).installing&&s.installing.addEventListener("statechange",(function(e){"activated"===e.target.state&&s.active.postMessage({cdnBaseUrl:t})})),s&&s.active&&s.active.postMessage({cdnBaseUrl:t});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(3848),n(2596),n(965),n(5836);window.setTimeout((function(){!function(){var e=a.Z.get("with-okfe-extension");if("prod"!==(c.Z||{}).envSign||e){var t=/^okfe.*Url$/m,n=a.Z.get(),o=Object.keys(n).filter((function(e){return t.test(e)})),r=a.Z.get("okfe_pisces")||{};if(0!==o.length||0!==Object.keys(r).length){var i=document.createElement("div");i.id="okfePiscesDebugCon",i.innerHTML='<div id="pisces-tip-con" class="pisces-container">\n      \u53cc\u9c7c\u5ea7-pisces\n      <span id="resetGhostBtn" class="pisces-close-tips ghost-btn">\n        reset\n      </span>\n      <span id="closePisecesBtn" class="pisces-index ghost-btn">\n        home\n      </span>\n    </div>',document.body.appendChild(i);var s=document.querySelector(".ghost-debug-con .pisces-container"),u=document.querySelector("#pisces-tips");s&&(s.style.display="none"),u&&(u.style.display="none"),document.querySelector("#resetGhostBtn").addEventListener("click",(function(){o.forEach((function(e){a.Z.remove(e)})),a.Z.remove("okfe_pisces"),window.location.reload()})),document.querySelector("#closePisecesBtn").addEventListener("click",(function(){var e=localStorage.getItem("piscesPath")||"/pisces",t="".concat(window.location.protocol,"//").concat(window.location.host);window.open("".concat(t).concat(e),"_blank")}))}}}()}),3e3);var h=n(1413),m=(n(3727),n(7120),n(4125),n(4329),n(4557),n(4886),n(2150)),w=(s.Z.g.get("profile")||{}).uuid,b="limit_country_expire_time_".concat(void 0===w?" ":w),y="limit_country_expire_time",k={kycRequired:!1,limit:!1,displayCountryName:"",country:"",euroList:["MT","IT"],got:!1,needShowCheckIpDialog:!1,expireTimeKey:y},T={dialog:null,isLogin:(0,l.bg)(),init:function(){var e=this;u.Z.get(d.Z.CHECK_COUNTRY_LIMIT).then((function(t){var o=t.data,r=o.cefi,i=void 0===r?{}:r,a=o.web3,u=void 0===a?{}:a,d=i.limit,p=void 0!==d&&d,f=i.displayCountryName,v=void 0===f?"":f,g=i.country,m=void 0===g?"":g,w=i.province,b=void 0===w?"":w,y=i.provinceCode,_=void 0===y?"":y,C=i.kycLevel,S=i.removeUserFlag,Z=void 0!==S&&S;if(p||Z){var E=!!T.isLogin&&C<2,x=p&&u.limit,L=(0,h.Z)((0,h.Z)({},k),{},{kycRequired:E,limit:p,displayCountryName:v,country:m,province:b,provinceCode:_,specialForbidProvince:"CA"===m&&!!b,isLogin:!!T.isLogin,allLimit:x,removeUserFlag:Z});(0,l.bg)()?(L.kycRequired?L.medium="okex_login_banner":L.medium="okex_login_banner_kyc_us",Z||L.specialForbidProvince?e.showFooterLayer(L):("US"===L.country&&e.showFooterLayer(L),"US"!==L.country&&L.kycRequired&&e.showFooterLayer(L))):(L.medium="okex_homepage_banner",e.showFooterLayer(L));var A=c.Z.enableOnetrustScripts;if(!(void 0!==A&&A)&&p){if(!s.Z.g.get("EuroIpLimit")&&L.euroList.includes(m))return void Promise.all([n.e(736),n.e(781),n.e(92)]).then(n.bind(n,2092)).then((function(e){(0,e.default)()})).catch((function(){}));T.getAgreement()}}})).catch((function(){}))},showFooterLayer:function(e){var t=window.location.pathname,o=(0,m.i)().download===t,r="true"===(0,l.Dv)("isReferral");if((0,l.Wb)()||o&&r){var i=localStorage.getItem(b),a=localStorage.getItem(y);i&&!a?(localStorage.setItem(y,i),a=i,localStorage.removeItem(b)):localStorage.removeItem(b);var c=!0;if(a){var s=Number(a)+6048e5;c=(new Date).getTime()-s>0}c&&(localStorage.setItem(y,""),localStorage.removeItem(b)),(e.removeUserFlag||c)&&Promise.all([n.e(736),n.e(781),n.e(587)]).then(n.bind(n,587)).then((function(t){(0,t.default)(e)})).catch((function(){}))}},getAgreement:function(){s.Z.g.get("EuropeAgreement")||T.isLogin&&u.Z.get(d.Z.GET_AGREEMENT,{},!0).then((function(e){var t=e.data;0===t?Promise.all([n.e(736),n.e(781),n.e(992),n.e(494)]).then(n.bind(n,3012)).then((function(e){(0,e.default)()})).catch((function(){})):1===t&&s.Z.g.set("EuropeAgreement","0",604800)})).catch((function(){}))}};!function(){var e=window.navigator.userAgent.toLowerCase().includes("electron");(0,l.lC)()||c.Z.isApp||c.Z.isOnChainMode||e||T.init()}();var _=n(2163);var C=function(){var e=window.location.pathname,t=c.Z.locale,o=c.Z.langPath,r=void 0===o?"":o,i=c.Z.ipRegion,a=c.Z.isInnerDomain,u=localStorage.getItem("dnsSwitchTest"),d=(0,_.Z)("isNewRegister");if(!/android|webos|iphone|ipod|blackberry|ipad|okex|electron/i.test(navigator.userAgent.toLowerCase())&&!d&&("/"===e||e===r)){var l=s.Z.g.get("dnsSwitch");(u||a&&"CN"===i&&("zh_CN"===t||"zh_HK"===t||"zh_TW"===t)&&!l)&&Promise.all([n.e(736),n.e(781),n.e(428)]).then(n.bind(n,4428)).then((function(e){(0,e.default)()})).catch((function(e){}))}},S=(n(3409),function(){(function(){var e,t,n=null===(e=navigator)||void 0===e||null===(t=e.userAgent)||void 0===t?void 0:t.toLowerCase();return!(null==n.match(/msie/)&&null==n.match(/trident/))})()||window.addEventListener("storage",(function(e){var t=e.key,n=e.oldValue,o=e.newValue;"_tk"===t&&n!==o&&window.location.reload()}))});S();n(8922);var Z=n(9408),E=n(9966);const x=function(){var e=(s.Z.g.get("preference")||{}).upDownColor,t=void 0===e?0:e;if((0,E.w)(!!t),(0,l.bg)()){var n,o=(null===(n=s.Z.g.get("profile"))||void 0===n?void 0:n.uuid)||"",r="".concat(d.Z.GET_PREFERENCE,"?uuid=").concat(o);u.Z.get(r,{},!0).then((function(e){var t=e.data,n=void 0===t?{}:t,o=!!n.upDownColor;s.Z.g.set("chgSetIsRedUp",o),s.Z.g.set("preference",n)})).catch((function(){}))}};n(6603),n(7052);var L=n(9384),A=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.createDom=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=c.Z.cdnBaseUrl;t.container=document.createElement("div"),t.container.id="pc-upgrade",t.container.innerHTML='\n    <div class="pc-upgrade-tip">\n      <div class="upgrade-main-box">\n        <div class="pc-logo-box"><img class="pc-logo-box-img" src="'.concat(n,'/cdn/assets/imgs/226/EB771F0EE8994DD5.png" /></div>\n        <div class="pc-tip-box">\n          <p class="pc-tip-title">').concat((0,L.b)("pc_client_upgrade_title"),'</p>\n          <p class="pc-tip-desc">').concat(e?(0,L.b)("pc_client_download_tips"):(0,L.b)("pc_client_upgrade_tips"),'</p>\n        </div>\n      </div>\n      <i id="pc-upgrade-close" class="okx-header-footer-close"></i>\n      ').concat(e?'<div id="upgrade-download" class="pc-download-button"><span class="pc-download-link">'.concat((0,L.b)("pc_client_upgrade_download_btn"),"</span></div>"):"","\n    </div>\n    "),document.body.appendChild(t.container),document.querySelector("#pc-upgrade-close").addEventListener("click",t.removeDom),document.querySelector(".pc-download-button").addEventListener("click",t.toDownLoad)},this.toDownLoad=function(){localStorage.removeItem(t.storageTipKey);var e=(0,m.i)();window.location.assign(e.download)},this.removeDom=function(){localStorage.removeItem(t.storageTipKey),document.body.removeChild(t.container)},this.compareVersion=function(e,t){for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length);n.length<r;)n.push("0");for(;o.length<r;)o.push("0");for(var i=0;i<r;i++){var a=parseInt(n[i],10),c=parseInt(o[i],10);if(a>c)return 1;if(a<c)return-1}return 0},this.checkVersion=function(){var e=localStorage.getItem("okx_pc_update_debug"),n=window.navigator.userAgent.toLowerCase();if(n.includes("electron")&&window.fetch||e){var o="2.0.1",r=n.match(/mac os x/i)?"darwin":"win",i=n.split("okx/")[1],a=i?null===i||void 0===i?void 0:i.split(" ")[0]:"0.0.0",c=localStorage.getItem("okx_pc_update_url")||"https://okg-pub-hk.oss-accelerate.aliyuncs.com/upgradeapp/pcclient/latest.json",s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if(t.compareVersion(a,n)<0||e){var r=(new Date).getTime(),i=e?1e4:3e5;localStorage.getItem(t.storageTipKey)||localStorage.setItem(t.storageTipKey,r);var c=localStorage.getItem(t.storageTipKey),s=i-(r-Number(c));setTimeout((function(){localStorage.removeItem(t.storageTipKey),t.createDom(!0)}),s)}};fetch(c).then(function(){var e=(0,v.Z)((0,f.Z)().mark((function e(t){var n,o;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,o=n[r].version,s(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){s(o,!0)}))}},this.checkIsInWhiteList=function(){var e=window.location.pathname,n=!1;return t.pageWhiteList.forEach((function(t){e.includes(t)&&(n=!0)})),n},this.init=function(){t.checkIsInWhiteList()||t.checkVersion()},this.storageTipKey="PCUpgradeTip",this.pageWhiteList=["/download"]})),I=(n(7239),n(4914),n(9062)),N=n(7762),P=(n(5494),n(9190),n(309),n(703),n(841),n(6123),n(2651),n(6435),n(6892),n(6130),n(388),n(9333),n(4097),n(8174),n(8606),n(7816),n(3757),n(7900),n(2477),n(9921),n(8235),n(6146),n(2093),n(4289),n(9971),n(9707),[111,107,120,95,106,115,95,103,97,116,101,119,97,121,49,50]);var R=function(e){var t,n=[],o=(0,N.Z)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value.charCodeAt(0);r<128?n.push(r):r<2048?(n.push(192+(r>>6)),n.push(128+(63&r))):r<65536&&(n.push(224+(r>>12)),n.push(128+(r>>6&63)),n.push(128+(63&r)))}}catch(i){o.e(i)}finally{o.f()}return Uint8Array.from(n)}(P=P.map((function(e){return String.fromCharCode(e)})).join("")),O=R,j=function(){var e=!1;return"undefined"!==typeof window&&window.Uint8Array&&window.crypto&&window.crypto.subtle&&window.btoa&&(e=!0),e};function U(e){return D.apply(this,arguments)}function D(){return(D=(0,v.Z)((0,f.Z)().mark((function e(t){var n,o,r,i,a;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder,o=n.encode(t),e.next=4,c=O,window.crypto.subtle.importKey("raw",c,"AES-CBC",!0,["encrypt","decrypt"]);case 4:return r=e.sent,e.next=7,window.crypto.subtle.encrypt({name:"AES-CBC",length:128,iv:R},r,o);case 7:return i=e.sent,a=window.btoa(String.fromCharCode.apply(String,(0,I.Z)(new Uint8Array(i)))),e.abrupt("return",a);case 10:case"end":return e.stop()}var c}),e)})))).apply(this,arguments)}function M(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),o=0;o<n.length;o++){var r=n[o].replace(/(^\s*)|(\s*$)/g,"");if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function F(e,t,n){var o=new Date;o.setTime(o.getTime()+n);var r="expires=".concat(o.toUTCString());document.cookie="".concat(e,"=").concat(t,";path=/;").concat(r)}var H=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),r=e.getHours(),i=e.getMinutes();return new Date(t,n,o,r,i).toUTCString().split(", ")[1].replace(" GMT","")},B=function(){var e=(0,v.Z)((0,f.Z)().mark((function e(){var t,n,o,r,i,a,c;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j()){e.next=2;break}return e.abrupt("return");case 2:if(t=M("devId")){e.next=5;break}return e.abrupt("return");case 5:return n=window.location.host,o=(o=[111,107,120,95,106,115,95,103,97,116,101,119,97,121]).map((function(e){return String.fromCharCode(e)})).join(""),r=H(),i="".concat(r).concat(n).concat(o).concat(t),e.next=12,U(i);case 12:a=(a=e.sent).replace(/=/g,""),c=(c=a.slice(0,7)+["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"][Math.floor(26*Math.random())]+a.slice(7)).slice(0,128),F([111,107,45,115,101,115,45,105,100].map((function(e){return String.fromCharCode(e)})).join(""),c,12e4);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();j()&&(setTimeout((0,v.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])}))),1e3),setInterval((0,v.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])}))),6e4),document.addEventListener("visibilitychange",(0,v.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("visible"!==document.visibilityState){e.next=8;break}return e.prev=1,e.next=4,B();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])}))))),(new(function(){function e(){(0,o.Z)(this,e)}return(0,r.Z)(e,[{key:"init",value:function(){(0,i.y)()||(window.okui||(window.okui={}),window.addEventListener("load",g),x(),function(){var e=s.Z.g.get("langAndCurrencyTip"),t=window.location.pathname===(0,m.i)().defi;(0,_.Z)("isNewRegister")&&(0,l.tq)()||c.Z.isApp||!(0,l.Wb)()&&!t||e||Promise.all([n.e(736),n.e(754)]).then(n.bind(n,5754)).then((function(e){(0,e.default)()})).catch((function(e){}))}(),C(),function(){var e=(0,l.Dv)(["irclickid","af_sub1"]),t=e.irclickid,n=e.af_sub1;t&&(0,l.lE)("ir_click_id",t),n&&(0,l.lE)("af_sub1",n)}(),S(),function(){var e,t=function(e){return(null===e||void 0===e?void 0:e.offsetHeight)||0},n=(0,m.i)(),o=window.innerHeight,r=document.querySelector("#headerContainer"),i=document.querySelector("#footerContainer"),a=document.querySelector("body > .home-container"),s=a&&((null===(e=window.getComputedStyle(a))||void 0===e?void 0:e.minHeight)||""),u=900;s&&s.includes("px")&&(u=Number(s.slice(0,-2))||900);var d=t(r)+t(i),l=(0,Z.Z)().media;o-d>u&&"sm"!==l&&a&&(window.location.pathname!==n.supportChat||!c.Z.isApp)&&(a.style.cssText+="min-height: calc(100vh - ".concat(d,"px);"))}(),(new A).init(),window.utils.monitor.newInstance({site:"okex",product:"seo",withPV:!0}),a.Z.remove("defaultLocale"))}}]),e}())).init()},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM},4627:e=>{e.exports=okxGlobal},5833:e=>{e.exports=utils.ont}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,r,i]=e[d],c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>"common/"+e+"."+{92:"b0a8da21",428:"93fbbd42",494:"913dbcab",587:"a4baa73d",754:"a54e7601",781:"24c59cb7",992:"0bcd19d0"}[e]+".js",n.miniCssF=e=>"common/"+e+"."+{92:"3babb121",428:"0d82676a",494:"f9fcd702",587:"06c4c3ff",754:"c466bdd3",781:"64c39815"}[e]+".css",n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="okx-nav:";n.l=(o,r,i,a)=>{if(e[o])e[o].push(r);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var p=(t,n)=>{c.onerror=c.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=172,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,o)=>{var r=n.miniCssF(e),i=n.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(a=n[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((r=(a=i[o]).getAttribute("data-href"))===e||r===t)return a}})(r,i))return t();((e,t,n,o,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=n=>{if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode.removeChild(i),r(s)}},i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)})(e,i,null,t,o)})),t={172:0};n.f.miniCss=(n,o)=>{t[n]?o.push(t[n]):0!==t[n]&&{92:1,428:1,494:1,587:1,754:1,781:1}[n]&&o.push(t[n]=e(n).then((()=>{t[n]=0}),(e=>{throw delete t[n],e})))}}})(),(()=>{var e={172:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error;n.l(a,(o=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,c,s]=o,u=0;if(a.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var d=s(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self.webpackChunkokx_nav=self.webpackChunkokx_nav||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(6458)));o=n.O(o)})();
//# sourceMappingURL=index.js.map