!function(){"use strict";const e={bizName:"",reportOrigin:"",isInner:!1,userId:"",staticResourceWhiteList:[],sendPV:!1,enableSPA:!1,sendResourceError:!0,sendError:!1,sendPerf:!0,interfaceDurationLimit:2e3,sendBlankScreenError:!1,dirtyThreshold:6e4,lang:"",defaultReport:!0,debug:!1};var n,t,r=(e=>(e.stability="stability",e.performance="performance",e.behavior="behavior",e.customize="customize",e.customizePerSession="customizePerSession",e.customizeNode="customizeNode",e))(r||{}),i=(e=>(e.FirstPaint="FP",e.FirstMeaningfulPaint="FMP",e.TimeToTnteractive="TTI",e.Load="LOAD",e.DomContentLoaded="DCL",e.FirstContentfulPaint="FCP",e.TimeToFirstByte="TTFB",e.LargestContentfulPaint="LCP",e.FirstInputDelay="FID",e.CumulativeLayoutShift="CLS",e.APIDuration="APIDuration",e.ImgDuration="ImgDuration",e))(i||{}),o=(e=>(e.PV="PV",e.ButtonClick="ButtonClick",e))(o||{}),a=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d="undefined"!=typeof fetch&&void 0!==(null==navigator?void 0:navigator.sendBeacon),f="undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process),p=(null==(n=null==window?void 0:window.location)?void 0:n.host)||"",v=(null==(t=null==window?void 0:window.location)?void 0:t.port)||"",m=(null==p?void 0:p.includes("localhost"))||(null==p?void 0:p.includes("dev.local"))||(null==p?void 0:p.includes("local:8443"))||(null==p?void 0:p.includes("127.0.0.1"))&&!["16801","13861","15562"].includes(v);function g(e,n="POST",t){return new Promise(((r,i)=>{try{let o={};"GET"!==n&&(o={headers:{"Content-Type":"application/json"},body:t}),fetch(e,((e,n)=>{for(var t in n||(n={}))u.call(n,t)&&l(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&l(e,t,n[t]);return e})({mode:"cors",method:n},o)).then((e=>e.json())).then((e=>{r(e)})).catch((e=>{i(e)}))}catch(e){i(e)}}))}let y=[];function h(){return JSON.parse(JSON.stringify(y))}function b(){y.length=0,y=[]}var w=Object.defineProperty,P=Object.defineProperties,S=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,n,t)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))T.call(n,t)&&O(e,t,n[t]);if(L)for(var t of L(n))E.call(n,t)&&O(e,t,n[t]);return e};function C(){try{return"ontouchstart"in(null==document?void 0:document.documentElement)}catch(e){return!0}}function D(n){var t,i;try{let o="";e.reportOrigin?o=e.reportOrigin:e.isInner&&(o="https://apm.okg.com");const a=`${o}/umd/web/metric/v1`,c=n.map((n=>{if(n.kind===r.performance){const t=Number(n.value);return t>0&&t<=e.dirtyThreshold?n:""}return n})).filter(Boolean);if(!e.debug&&(m||!(null==c?void 0:c.length)))return;const u=JSON.stringify(c);if(((null==(i=null==(t=null==window?void 0:window.location)?void 0:t.search)?void 0:i.includes("debug"))||e.debug)&&(console.log("isMobile",C()),console.log("sendLogRequest",c,c.map((e=>e.type)))),void 0===navigator.sendBeacon||!e.isInner&&C())"undefined"!=typeof fetch&&g(a,"post",u);else try{const e=new Blob([u],{type:"application/json"});window.navigator.sendBeacon(a,e)}catch(e){console.error("perf sendBeacon  error",e)}}catch(e){console.error("perf sendLogRequest error",e)}}function I(n){var t;let r;const i=function(){var n,t;const{location:r,document:i}=window,{href:o,host:a}=r,{referrer:c}=i,u=window._okGlobal||window.okGlobal||{};return{biz:e.bizName,time:Date.now(),urlPath:o,host:a,referrer:c,sdkVersion:"0.1.4",lang:(null==u?void 0:u.locale)||(null==(n=e)?void 0:n.lang)||"default",station:(null==(t=null==u?void 0:u.site)?void 0:t.sign)||e.bizName}}();return r=Array.isArray(n)?n.map((e=>k(k({},i),e))):[k(k({},i),n)],(null==(t=e)?void 0:t.userId)&&(r=r.map((n=>{var t;const r=Object.assign((null==n?void 0:n.attributes)||{},{userKey:null==(t=e)?void 0:t.userId});return((e,n)=>P(e,S(n)))(k({},n),{attributes:r})}))),r}function j(e,n){try{let t={};t=n?e:I(e),D(t)}catch(e){console.error("perf sendLog error",e)}}let z=null;function B(e,n=3e3){!function(e){y=(h()||[]).concat(e)}(I(e)),clearTimeout(z);const t=h();(null==t?void 0:t.length)>=50?(j(t),b()):z=setTimeout((()=>{(null==t?void 0:t.length)&&(j(t),b())}),n)}var F,A,N,R,x=-1,M=function(e){addEventListener("pageshow",(function(n){n.persisted&&(x=n.timeStamp,e(n))}),!0)},$=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},K=function(){var e=$();return e&&e.activationStart||0},q=function(e,n){var t=$(),r="navigate";return x>=0?r="back-forward-cache":t&&(r=document.prerendering||K()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},G=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},V=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},_=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},H=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},J=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},U=-1,W=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},Q=function(e){"hidden"===document.visibilityState&&U>-1&&(U="visibilitychange"===e.type?e.timeStamp:0,Y())},X=function(){addEventListener("visibilitychange",Q,!0),addEventListener("prerenderingchange",Q,!0)},Y=function(){removeEventListener("visibilitychange",Q,!0),removeEventListener("prerenderingchange",Q,!0)},Z=function(){return U<0&&(U=W(),X(),M((function(){setTimeout((function(){U=W(),X()}),0)}))),{get firstHiddenTime(){return U}}},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},ne=function(e,n){n=n||{},ee((function(){var t,r=[1800,3e3],i=Z(),o=q("FCP"),a=G("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=Math.max(e.startTime-K(),0),o.entries.push(e),t(!0)))}))}));a&&(t=V(e,o,r,n.reportAllChanges),M((function(i){o=q("FCP"),t=V(e,o,r,n.reportAllChanges),_((function(){o.value=performance.now()-i.timeStamp,t(!0)}))})))}))},te={passive:!0,capture:!0},re=new Date,ie=function(e,n){F||(F=n,A=e,N=new Date,ce(removeEventListener),oe())},oe=function(){if(A>=0&&A<N-re){var e={entryType:"first-input",name:F.type,target:F.target,cancelable:F.cancelable,startTime:F.timeStamp,processingStart:F.timeStamp+A};R.forEach((function(n){n(e)})),R=[]}},ae=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){ie(e,n),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,te),removeEventListener("pointercancel",r,te)};addEventListener("pointerup",t,te),addEventListener("pointercancel",r,te)}(n,e):ie(n,e)}},ce=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,ae,te)}))},ue={},se=function e(n){document.prerendering?ee((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},le=function(e,n){n=n||{};var t=[800,1800],r=q("TTFB"),i=V(e,r,t,n.reportAllChanges);se((function(){var o=$();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-K(),0),r.entries=[o],i(!0),M((function(){r=q("TTFB",0),(i=V(e,r,t,n.reportAllChanges))(!0)}))}}))};function de(e){const{name:n,value:t}=e;B({kind:r.performance,type:n,value:t})}function fe(){!function(e,n){n=n||{},ne(J((function(){var t,r=[.1,.25],i=q("CLS",0),o=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=a[0],t=a[a.length-1];o&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(o+=e.value,a.push(e)):(o=e.value,a=[e])}})),o>i.value&&(i.value=o,i.entries=a,t())},u=G("layout-shift",c);u&&(t=V(e,i,r,n.reportAllChanges),H((function(){c(u.takeRecords()),t(!0)})),M((function(){o=0,i=q("CLS",0),t=V(e,i,r,n.reportAllChanges),_((function(){return t()}))})),setTimeout(t,0))})))}(de),function(e,n){n=n||{},ee((function(){var t,r=[100,300],i=Z(),o=q("FID"),a=function(e){e.startTime<i.firstHiddenTime&&(o.value=e.processingStart-e.startTime,o.entries.push(e),t(!0))},c=function(e){e.forEach(a)},u=G("first-input",c);t=V(e,o,r,n.reportAllChanges),u&&H(J((function(){c(u.takeRecords()),u.disconnect()}))),u&&M((function(){var i;o=q("FID"),t=V(e,o,r,n.reportAllChanges),R=[],A=-1,F=null,ce(addEventListener),i=a,R.push(i),oe()}))}))}(de),function(e,n){n=n||{},ee((function(){var t,r=[2500,4e3],i=Z(),o=q("LCP"),a=function(e){var n=e[e.length-1];if(n){var r=Math.max(n.startTime-K(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[n],t())}},c=G("largest-contentful-paint",a);if(c){t=V(e,o,r,n.reportAllChanges);var u=J((function(){ue[o.id]||(a(c.takeRecords()),c.disconnect(),ue[o.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,u,!0)})),H(u),M((function(i){o=q("LCP"),t=V(e,o,r,n.reportAllChanges),_((function(){o.value=performance.now()-i.timeStamp,ue[o.id]=!0,t(!0)}))}))}}))}(de),le(de),ne(de)}function pe(){window.PerformanceObserver&&new PerformanceObserver(((e,n)=>{let t;e.getEntries().forEach((e=>{"first-paint"===e.name&&(t={kind:r.performance,type:i.FirstPaint,value:e.startTime})})),B([t]),n.disconnect()})).observe({type:"paint",buffered:!0}),fe(),function(){var n;if(!(null==window?void 0:window.performance)&&!(null==(n=null==window?void 0:window.performance)?void 0:n.getEntries))return;let t=new PerformanceObserver(((n,t)=>{const o=n.getEntries();let a=[];o.forEach((n=>{var t,o,c,u;if((null==n?void 0:n.transferSize)&&(null==n?void 0:n.encodedBodySize)){if(("xmlhttprequest"===n.initiatorType||"fetch"===n.initiatorType)&&n.name&&!n.name.includes("/umd/web/metric/v1")&&n.duration>((null==(t=e)?void 0:t.interfaceDurationLimit)||0)){let e=n.name;try{e=null==(c=null==(o=new URL(n.name))?void 0:o.pathname)?void 0:c.replace(/\/\d+$/,"")}catch(e){console.error(e)}a.push({kind:r.performance,type:i.APIDuration,value:n.duration,attributes:{extranKey:e||n.name,extra1Key:n.encodedBodySize||0,extra2Key:n.decodedBodySize||0}})}("img"===n.initiatorType||"image"===n.initiatorType)&&n.duration>((null==(u=e)?void 0:u.interfaceDurationLimit)||0)&&n.name&&a.push({kind:r.performance,type:i.ImgDuration,value:n.duration,attributes:{extranKey:n.name,extra1Key:n.encodedBodySize||0,extra2Key:n.decodedBodySize||0}})}})),(null==a?void 0:a.length)&&B(a)}));t.observe({entryTypes:["resource"],buffered:!0})}()}function ve(){B({kind:r.behavior,type:o.PV,value:1}),e.isCallCustomLogPerSession=!1}function me(){"visible"===document.visibilityState&&ve()}function ge(){window.addEventListener("load",(()=>{"visible"===document.visibilityState?ve():document.addEventListener("visibilitychange",(()=>{me()}))})),window.addEventListener("popstate",me),window.addEventListener("pushState",me),window.addEventListener("replaceState",me),window.addEventListener("hashchange",me)}var ye=Object.defineProperty,he=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Pe=(e,n,t)=>n in e?ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Se=(e,n)=>{for(var t in n||(n={}))be.call(n,t)&&Pe(e,t,n[t]);if(he)for(var t of he(n))we.call(n,t)&&Pe(e,t,n[t]);return e};class Le{constructor(n){if(!n.bizName)throw new Error("perf sdk bizName is required");!function(n){for(const t in e)n[t]&&(e[t]=n[t])}(n),this.init()}init(){try{const n=!d||m||f||!e.defaultReport;if(e.debug&&console.log(`perf sdk isNotDefaultReport: ${n}, IsModern: ${d}, isLocal: ${m}, isNode: ${f}, config: ${JSON.stringify(e)}`),n&&!e.debug)return;ge(),pe(),e.debug&&console.log("init perf sdk success")}catch(e){console.error(`init perf sdk fail, error ${e}`)}}fmp(){const e=Date.now()-window.performance.timing.navigationStart;j({kind:r.performance,type:i.FirstMeaningfulPaint,value:e})}buttonClick(){j({kind:r.behavior,type:o.ButtonClick,value:1})}customLog(e){j(Se({kind:r.customize},e))}customLogPerSession(n){e.isCallCustomLogPerSession||(j(Se({kind:r.customizePerSession},n)),e.isCallCustomLogPerSession=!0)}}try{!function(){var e,n;if(f||m)return;const t=window._okGlobal||window.okGlobal||{},r=null==(e=null==window?void 0:window.location)?void 0:e.hostname,i=(null==(n=null==t?void 0:t.site)?void 0:n.sign)||r,o=r.includes("beta.okex.org")?"beta__":"";i&&(window.OkPerf=new Le({bizName:`${o}${i}`}))}()}catch(F){console.error("init perf sdk fail, error: ",F)}}();