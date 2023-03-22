"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6950],{13923:function(e,t){let n=[],r=!1,i=!1,o=()=>!!window.OneSignal,s=(e,t)=>{r=!0,window.OneSignal=window.OneSignal||[],window.OneSignal.push(()=>{window.OneSignal.init(t)}),window.OneSignal.push(()=>{u(),e()})},a=e=>{i=!0,u(),e()},u=()=>{n.forEach(e=>{let{name:t,args:n,promiseResolver:r}=e;r?c[t](...n).then(e=>{r(e)}):c[t](...n)})},l=e=>new Promise(t=>{if(r){t();return}if(!e||!e.appId)throw Error("You need to provide your OneSignal appId.");if(!document){t();return}let n=document.createElement("script");n.id="onesignal-sdk",n.src="https://cdn.onesignal.com/sdks/OneSignalSDK.js",n.async=!0,n.onload=()=>{s(t,e)},n.onerror=()=>{a(t)},document.head.appendChild(n)}),c={init:l,on:function(e,t){if(!o()){n.push({name:"on",args:arguments});return}window.OneSignal.push(()=>{window.OneSignal.on(e,t)})},off:function(e,t){if(!o()){n.push({name:"off",args:arguments});return}window.OneSignal.push(()=>{window.OneSignal.off(e,t)})},once:function(e,t){if(!o()){n.push({name:"once",args:arguments});return}window.OneSignal.push(()=>{window.OneSignal.once(e,t)})},isPushNotificationsEnabled:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"isPushNotificationsEnabled",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.isPushNotificationsEnabled(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showHttpPrompt:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showHttpPrompt",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showHttpPrompt(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},registerForPushNotifications:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"registerForPushNotifications",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.registerForPushNotifications(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},setDefaultNotificationUrl:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"setDefaultNotificationUrl",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.setDefaultNotificationUrl(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},setDefaultTitle:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"setDefaultTitle",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.setDefaultTitle(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getTags:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getTags",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getTags(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},sendTag:function(e,t,r){return new Promise((s,a)=>{if(i){s();return}if(!o()){n.push({name:"sendTag",args:arguments,promiseResolver:s});return}try{window.OneSignal.push(()=>{window.OneSignal.sendTag(e,t,r).then(e=>s(e)).catch(e=>a(e))})}catch(e){a(e)}})},sendTags:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"sendTags",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.sendTags(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})},deleteTag:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"deleteTag",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.deleteTag(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},deleteTags:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"deleteTags",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.deleteTags(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})},addListenerForNotificationOpened:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"addListenerForNotificationOpened",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.addListenerForNotificationOpened(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},setSubscription:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"setSubscription",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.setSubscription(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showHttpPermissionRequest:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showHttpPermissionRequest",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showHttpPermissionRequest(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showNativePrompt:function(){return new Promise((e,t)=>{if(i){e();return}if(!o()){n.push({name:"showNativePrompt",args:arguments,promiseResolver:e});return}try{window.OneSignal.push(()=>{window.OneSignal.showNativePrompt().then(t=>e(t)).catch(e=>t(e))})}catch(e){t(e)}})},showSlidedownPrompt:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showSlidedownPrompt",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showSlidedownPrompt(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showCategorySlidedown:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showCategorySlidedown",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showCategorySlidedown(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showSmsSlidedown:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showSmsSlidedown",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showSmsSlidedown(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showEmailSlidedown:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showEmailSlidedown",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showEmailSlidedown(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},showSmsAndEmailSlidedown:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"showSmsAndEmailSlidedown",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.showSmsAndEmailSlidedown(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getNotificationPermission:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getNotificationPermission",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getNotificationPermission(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getUserId:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getUserId",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getUserId(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getSubscription:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getSubscription",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getSubscription(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},setEmail:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"setEmail",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.setEmail(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})},setSMSNumber:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"setSMSNumber",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.setSMSNumber(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})},logoutEmail:function(){return new Promise((e,t)=>{if(i){e();return}if(!o()){n.push({name:"logoutEmail",args:arguments,promiseResolver:e});return}try{window.OneSignal.push(()=>{window.OneSignal.logoutEmail().then(t=>e(t)).catch(e=>t(e))})}catch(e){t(e)}})},logoutSMS:function(){return new Promise((e,t)=>{if(i){e();return}if(!o()){n.push({name:"logoutSMS",args:arguments,promiseResolver:e});return}try{window.OneSignal.push(()=>{window.OneSignal.logoutSMS().then(t=>e(t)).catch(e=>t(e))})}catch(e){t(e)}})},setExternalUserId:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"setExternalUserId",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.setExternalUserId(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})},removeExternalUserId:function(){return new Promise((e,t)=>{if(i){e();return}if(!o()){n.push({name:"removeExternalUserId",args:arguments,promiseResolver:e});return}try{window.OneSignal.push(()=>{window.OneSignal.removeExternalUserId().then(t=>e(t)).catch(e=>t(e))})}catch(e){t(e)}})},getExternalUserId:function(){return new Promise((e,t)=>{if(i){e();return}if(!o()){n.push({name:"getExternalUserId",args:arguments,promiseResolver:e});return}try{window.OneSignal.push(()=>{window.OneSignal.getExternalUserId().then(t=>e(t)).catch(e=>t(e))})}catch(e){t(e)}})},provideUserConsent:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"provideUserConsent",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.provideUserConsent(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getEmailId:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getEmailId",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getEmailId(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},getSMSId:function(e){return new Promise((t,r)=>{if(i){t();return}if(!o()){n.push({name:"getSMSId",args:arguments,promiseResolver:t});return}try{window.OneSignal.push(()=>{window.OneSignal.getSMSId(e).then(e=>t(e)).catch(e=>r(e))})}catch(e){r(e)}})},sendOutcome:function(e,t){return new Promise((r,s)=>{if(i){r();return}if(!o()){n.push({name:"sendOutcome",args:arguments,promiseResolver:r});return}try{window.OneSignal.push(()=>{window.OneSignal.sendOutcome(e,t).then(e=>r(e)).catch(e=>s(e))})}catch(e){s(e)}})}};t.Z=c},46319:function(e,t,n){n.d(t,{p:function(){return T}});var r,i,o,s=n(2784),a=n(3703),u=n(90544),l=n(33401),c=n(80586),d=n(99108),p=n(15426),f=n(47215),h=n(37352),m=n(29833),w=n(55559);let g=null!=(o=s.startTransition)?o:function(e){e()};var S=((r=S||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),v=((i=v||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let P={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},y=(0,s.createContext)(null);function R(e){let t=(0,s.useContext)(y);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}y.displayName="DisclosureContext";let O=(0,s.createContext)(null);O.displayName="DisclosureAPIContext";let I=(0,s.createContext)(null);function b(e,t){return(0,a.E)(t.type,P,e,t)}I.displayName="DisclosurePanelContext";let E=s.Fragment,x=u.AN.RenderStrategy|u.AN.Static,T=Object.assign((0,u.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,i=(0,s.useRef)(null),o=(0,l.T)(t,(0,l.h)(e=>{i.current=e},void 0===e.as||e.as===s.Fragment)),c=(0,s.useRef)(null),d=(0,s.useRef)(null),p=(0,s.useReducer)(b,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:g},S]=p,v=(0,w.z)(e=>{S({type:1});let t=(0,m.r)(i);if(!t||!g)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==n||n.focus()}),P=(0,s.useMemo)(()=>({close:v}),[v]),R=(0,s.useMemo)(()=>({open:0===h,close:v}),[h,v]);return s.createElement(y.Provider,{value:p},s.createElement(O.Provider,{value:P},s.createElement(f.up,{value:(0,a.E)(h,{0:f.ZM.Open,1:f.ZM.Closed})},(0,u.sY)({ourProps:{ref:o},theirProps:r,slot:R,defaultTag:E,name:"Disclosure"}))))}),{Button:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-button-${n}`,...i}=e,[o,a]=R("Disclosure.Button"),f=(0,s.useContext)(I),m=null!==f&&f===o.panelId,g=(0,s.useRef)(null),S=(0,l.T)(g,t,m?null:o.buttonRef);(0,s.useEffect)(()=>{if(!m)return a({type:2,buttonId:r}),()=>{a({type:2,buttonId:null})}},[r,a,m]);let v=(0,w.z)(e=>{var t;if(m){if(1===o.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),a({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),a({type:0})}}),P=(0,w.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),y=(0,w.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(m?(a({type:0}),null==(n=o.buttonRef.current)||n.focus()):a({type:0}))}),O=(0,s.useMemo)(()=>({open:0===o.disclosureState}),[o]),b=(0,h.f)(e,g),E=m?{ref:S,type:b,onKeyDown:v,onClick:y}:{ref:S,id:r,type:b,"aria-expanded":e.disabled?void 0:0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:v,onKeyUp:P,onClick:y};return(0,u.sY)({ourProps:E,theirProps:i,slot:O,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...i}=e,[o,a]=R("Disclosure.Panel"),{close:d}=function e(t){let n=(0,s.useContext)(O);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),p=(0,l.T)(t,o.panelRef,e=>{g(()=>a({type:e?4:5}))});(0,s.useEffect)(()=>(a({type:3,panelId:r}),()=>{a({type:3,panelId:null})}),[r,a]);let h=(0,f.oJ)(),m=null!==h?(h&f.ZM.Open)===f.ZM.Open:0===o.disclosureState,w=(0,s.useMemo)(()=>({open:0===o.disclosureState,close:d}),[o,d]);return s.createElement(I.Provider,{value:o.panelId},(0,u.sY)({ourProps:{ref:p,id:r},theirProps:i,slot:w,defaultTag:"div",features:x,visible:m,name:"Disclosure.Panel"}))})})},71931:function(e,t,n){n.d(t,{v:function(){return A}});var r,i,o,s,a=n(2784),u=n(3703),l=n(90544),c=n(6173),d=n(58314),p=n(88064),f=n(33401),h=n(80586),m=n(99108),w=((r=w||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r),g=n(15426),S=n(52929),v=n(32994),P=n(29833),y=n(47215),R=n(37352),O=n(70592),I=n(55559);function b(e){return[e.screenX,e.screenY]}var E=((i=E||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),x=((o=x||{})[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o),T=((s=T||{})[s.OpenMenu=0]="OpenMenu",s[s.CloseMenu=1]="CloseMenu",s[s.GoToItem=2]="GoToItem",s[s.Search=3]="Search",s[s.ClearSearch=4]="ClearSearch",s[s.RegisterItem=5]="RegisterItem",s[s.UnregisterItem=6]="UnregisterItem",s);function M(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=(0,S.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return-1===i&&(i=null),{items:r,activeItemIndex:i}}let N={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=M(e),i=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=null!=r?r:-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===i||!(r.length-n-1>=i))&&!t.resolveDisabled(e));return-1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=i)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return-1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return-1===o?r:o}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),o=i?e.items.indexOf(i):-1;return-1===o||o===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=M(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=M(e,e=>{let n=e.findIndex(e=>e.id===t.id);return-1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},C=(0,a.createContext)(null);function D(e){let t=(0,a.useContext)(C);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return t}function k(e,t){return(0,u.E)(t.type,N,e,t)}C.displayName="MenuContext";let F=a.Fragment,U=l.AN.RenderStrategy|l.AN.Static,L=a.Fragment,A=Object.assign((0,l.yV)(function(e,t){let n=(0,a.useReducer)(k,{menuState:1,buttonRef:(0,a.createRef)(),itemsRef:(0,a.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:o},s]=n,c=(0,f.T)(t);(0,v.O)([o,i],(e,t)=>{var n;s({type:1}),(0,S.sP)(t,S.tJ.Loose)||(e.preventDefault(),null==(n=o.current)||n.focus())},0===r);let d=(0,I.z)(()=>{s({type:1})}),p=(0,a.useMemo)(()=>({open:0===r,close:d}),[r,d]);return a.createElement(C.Provider,{value:n},a.createElement(y.up,{value:(0,u.E)(r,{0:y.ZM.Open,1:y.ZM.Closed})},(0,l.sY)({ourProps:{ref:c},theirProps:e,slot:p,defaultTag:F,name:"Menu"})))}),{Button:(0,l.yV)(function(e,t){var n;let r=(0,h.M)(),{id:i=`headlessui-menu-button-${r}`,...o}=e,[s,u]=D("Menu.Button"),c=(0,f.T)(s.buttonRef,t),p=(0,d.G)(),S=(0,I.z)(e=>{switch(e.key){case m.R.Space:case m.R.Enter:case m.R.ArrowDown:e.preventDefault(),e.stopPropagation(),u({type:0}),p.nextFrame(()=>u({type:2,focus:w.First}));break;case m.R.ArrowUp:e.preventDefault(),e.stopPropagation(),u({type:0}),p.nextFrame(()=>u({type:2,focus:w.Last}))}}),v=(0,I.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),P=(0,I.z)(t=>{if((0,g.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===s.menuState?(u({type:1}),p.nextFrame(()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),u({type:0})))}),y=(0,a.useMemo)(()=>({open:0===s.menuState}),[s]),O={ref:c,id:i,type:(0,R.f)(e,s.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=s.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===s.menuState,onKeyDown:S,onKeyUp:v,onClick:P};return(0,l.sY)({ourProps:O,theirProps:o,slot:y,defaultTag:"button",name:"Menu.Button"})}),Items:(0,l.yV)(function(e,t){var n,r;let i=(0,h.M)(),{id:o=`headlessui-menu-items-${i}`,...s}=e,[u,g]=D("Menu.Items"),v=(0,f.T)(u.itemsRef,t),R=(0,O.i)(u.itemsRef),b=(0,d.G)(),E=(0,y.oJ)(),x=null!==E?(E&y.ZM.Open)===y.ZM.Open:0===u.menuState;(0,a.useEffect)(()=>{let e=u.itemsRef.current;e&&0===u.menuState&&e!==(null==R?void 0:R.activeElement)&&e.focus({preventScroll:!0})},[u.menuState,u.itemsRef,R]),function({container:e,accept:t,walk:n,enabled:r=!0}){let i=(0,a.useRef)(t),o=(0,a.useRef)(n);(0,a.useEffect)(()=>{i.current=t,o.current=n},[t,n]),(0,p.e)(()=>{if(!e||!r)return;let t=(0,P.r)(e);if(!t)return;let n=i.current,s=o.current,a=Object.assign(e=>n(e),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;u.nextNode();)s(u.currentNode)},[e,r,i,o])}({container:u.itemsRef.current,enabled:0===u.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let T=(0,I.z)(e=>{var t,n;switch(b.dispose(),e.key){case m.R.Space:if(""!==u.searchQuery)return e.preventDefault(),e.stopPropagation(),g({type:3,value:e.key});case m.R.Enter:if(e.preventDefault(),e.stopPropagation(),g({type:1}),null!==u.activeItemIndex){let{dataRef:e}=u.items[u.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,S.wI)(u.buttonRef.current);break;case m.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:w.Next});case m.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:w.Previous});case m.R.Home:case m.R.PageUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:w.First});case m.R.End:case m.R.PageDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:w.Last});case m.R.Escape:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case m.R.Tab:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{(0,S.EO)(u.buttonRef.current,e.shiftKey?S.TO.Previous:S.TO.Next)});break;default:1===e.key.length&&(g({type:3,value:e.key}),b.setTimeout(()=>g({type:4}),350))}}),M=(0,I.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),N=(0,a.useMemo)(()=>({open:0===u.menuState}),[u]),C={"aria-activedescendant":null===u.activeItemIndex||null==(n=u.items[u.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=u.buttonRef.current)?void 0:r.id,id:o,onKeyDown:T,onKeyUp:M,role:"menu",tabIndex:0,ref:v};return(0,l.sY)({ourProps:C,theirProps:s,slot:N,defaultTag:"div",features:U,visible:x,name:"Menu.Items"})}),Item:(0,l.yV)(function(e,t){let n,r=(0,h.M)(),{id:i=`headlessui-menu-item-${r}`,disabled:o=!1,...s}=e,[u,d]=D("Menu.Item"),m=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===i,g=(0,a.useRef)(null),v=(0,f.T)(t,g);(0,p.e)(()=>{if(0!==u.menuState||!m||0===u.activationTrigger)return;let e=(0,c.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=g.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[g,m,u.menuState,u.activationTrigger,u.activeItemIndex]);let P=(0,a.useRef)({disabled:o,domRef:g});(0,p.e)(()=>{P.current.disabled=o},[P,o]),(0,p.e)(()=>{var e,t;P.current.textValue=null==(t=null==(e=g.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[P,g]),(0,p.e)(()=>(d({type:5,id:i,dataRef:P}),()=>d({type:6,id:i})),[P,i]);let y=(0,I.z)(()=>{d({type:1})}),R=(0,I.z)(e=>{if(o)return e.preventDefault();d({type:1}),(0,S.wI)(u.buttonRef.current)}),O=(0,I.z)(()=>{if(o)return d({type:2,focus:w.Nothing});d({type:2,focus:w.Specific,id:i})}),E=(n=(0,a.useRef)([-1,-1]),{wasMoved(e){let t=b(e);return(n.current[0]!==t[0]||n.current[1]!==t[1])&&(n.current=t,!0)},update(e){n.current=b(e)}}),x=(0,I.z)(e=>E.update(e)),T=(0,I.z)(e=>{E.wasMoved(e)&&(o||m||d({type:2,focus:w.Specific,id:i,trigger:0}))}),M=(0,I.z)(e=>{E.wasMoved(e)&&(o||m&&d({type:2,focus:w.Nothing}))}),N=(0,a.useMemo)(()=>({active:m,disabled:o,close:y}),[m,o,y]);return(0,l.sY)({ourProps:{id:i,ref:v,role:"menuitem",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,disabled:void 0,onClick:R,onFocus:O,onPointerEnter:x,onMouseEnter:x,onPointerMove:T,onMouseMove:T,onPointerLeave:M,onMouseLeave:M},theirProps:s,slot:N,defaultTag:L,name:"Menu.Item"})})})},37352:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(2784),i=n(88064);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function s(e,t){let[n,s]=(0,r.useState)(()=>o(e));return(0,i.e)(()=>{s(o(e))},[e.type,e.as]),(0,i.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")},[n,t]),n}},78526:function(e,t,n){n.d(t,{r:function(){return g}});var r=n(2784),i=n(29930),o=n(3709),s=n(92985),a=n(55830),u=n(62257),l=n(99189);let c=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},d=e=>{r.useEffect(()=>{e.clearReset()},[e])},p=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&(0,l.L)(n,[e.error,r]),f=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},h=(e,t)=>e.isLoading&&e.isFetching&&!t,m=(e,t,n)=>(null==e?void 0:e.suspense)&&h(t,n),w=(e,t,n)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{n.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function g(e,t){let n=(0,a.NL)({context:e.context}),l=(0,u.S)(),h=(0,s._)(),g=n.defaultQueryOptions(e);g._optimisticResults=l?"isRestoring":"optimistic",g.onError&&(g.onError=o.V.batchCalls(g.onError)),g.onSuccess&&(g.onSuccess=o.V.batchCalls(g.onSuccess)),g.onSettled&&(g.onSettled=o.V.batchCalls(g.onSettled)),f(g),c(g,h),d(h);let[S]=r.useState(()=>new t(n,g)),v=S.getOptimisticResult(g);if((0,i.$)(r.useCallback(e=>l?()=>void 0:S.subscribe(o.V.batchCalls(e)),[S,l]),()=>S.getCurrentResult(),()=>S.getCurrentResult()),r.useEffect(()=>{S.setOptions(g,{listeners:!1})},[g,S]),m(g,v,l))throw w(g,S,h);if(p({result:v,errorResetBoundary:h,useErrorBoundary:g.useErrorBoundary,query:S.getCurrentQuery()}))throw v.error;return g.notifyOnChangeProps?v:S.trackResult(v)}},58586:function(e,t,n){n.d(t,{N:function(){return u}});var r=n(36370),i=n(91578),o=n(54388);class s extends i.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,o.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,o.Gm)(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var n,r,i,s,a,u;let{state:l}=e,c=super.createResult(e,t),{isFetching:d,isRefetching:p}=c,f=d&&(null==(n=l.fetchMeta)?void 0:null==(r=n.fetchMore)?void 0:r.direction)==="forward",h=d&&(null==(i=l.fetchMeta)?void 0:null==(s=i.fetchMore)?void 0:s.direction)==="backward";return{...c,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,o.Qy)(t,null==(a=l.data)?void 0:a.pages),hasPreviousPage:(0,o.ZF)(t,null==(u=l.data)?void 0:u.pages),isFetchingNextPage:f,isFetchingPreviousPage:h,isRefetching:p&&!f&&!h}}}var a=n(78526);function u(e,t,n){let i=(0,r._v)(e,t,n);return(0,a.r)(i,s)}},58943:function(e,t,n){n.d(t,{a:function(){return s}});var r=n(36370),i=n(91578),o=n(78526);function s(e,t,n){let s=(0,r._v)(e,t,n);return(0,o.r)(s,i.z)}}}]);