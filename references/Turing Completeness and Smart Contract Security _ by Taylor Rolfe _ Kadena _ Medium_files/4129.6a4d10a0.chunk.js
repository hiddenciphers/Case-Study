(self.webpackChunklite=self.webpackChunklite||[]).push([[4129],{99171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z",fill:"#757575"});const o=function(e){return a.createElement("svg",r({width:8,height:11,viewBox:"0 0 8 11",fill:"none"},e),i)}},44642:(e,t,n)=>{"use strict";n.d(t,{VK:()=>E,zn:()=>b,kw:()=>h});var a,r=n(59713),i=n.n(r),o=n(63038),l=n.n(o),c=n(67294),s=n(92661),u=n(77280),d=n(92305),m=n(71341);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.Delete="delete",e.Reorder="reorder"}(a||(a={}));var v={showReorderView:!1,setShowReorderView:function(){},showBulkDeleteView:!1,setShowBulkDeleteView:function(){},moveOperations:[],deleteOperations:[],addMoveOperation:function(){},addDeleteOperation:function(){},removeDeleteOperation:function(){},resetOperations:function(){},isLoading:!1,setIsLoading:function(){},isBulkActionView:!1},g=(0,c.createContext)(v),E=function(){return(0,c.useContext)(g)},b=function(e){var t=e.children,n=(0,u.Wd)("action"),r=(0,c.useState)(n===a.Reorder),i=l()(r,2),o=i[0],s=i[1],d=(0,c.useState)(n===a.Delete),m=l()(d,2),p=m[0],f=m[1],v=(0,c.useState)([]),E=l()(v,2),b=E[0],h=E[1],C=(0,c.useState)([]),w=l()(C,2),x=w[0],k=w[1],y=(0,c.useState)(!1),I=l()(y,2),S=I[0],O=I[1],R=(0,c.useCallback)((function(e){h(b.concat({move:e}))}),[b]),D=(0,c.useCallback)((function(e){k(x.concat(e))}),[x]),P=(0,c.useCallback)((function(e){var t=x.filter((function(t){return t.entityId!==e.entityId}));k(t)}),[x]),L=(0,c.useCallback)((function(){o?h([]):k([])}),[o]);return c.createElement(g.Provider,{value:{showReorderView:o,setShowReorderView:s,showBulkDeleteView:p,setShowBulkDeleteView:f,moveOperations:b,deleteOperations:x,resetOperations:L,addMoveOperation:R,addDeleteOperation:D,removeDeleteOperation:P,isLoading:S,setIsLoading:O,isBulkActionView:o||p}},t)},h=function(e){var t=e.children,n=e.catalog,r=(0,s.di)("ShowUserList",{username:n.creator.username||"",catalogSlugId:(0,d.EJ)(n)}),i=(0,m.h)({queryParams:{action:a.Reorder}}),o=(0,m.h)({queryParams:{action:a.Delete}}),l=(0,c.useCallback)((function(){i(r)}),[i,r]),u=(0,c.useCallback)((function(){o(r)}),[o,r]);return c.createElement(g.Provider,{value:f(f({},v),{},{setShowReorderView:l,setShowBulkDeleteView:u})},t)}},97996:(e,t,n)=>{"use strict";n.d(t,{G:()=>N});var a=n(67154),r=n.n(a),i=n(63038),o=n.n(i),l=n(67294),c=n(25267),s=n(38352),u=n(73917),d=n(38356),m=n(42130),p=n(68894),f=n(59713),v=n.n(f),g=n(5977),E=n(44642),b=n(19416),h=n(13791),C=n(77355),w=n(20113),x=n(87691),k=function(e){var t=e.isVisible,n=e.hide,a=e.onConfirm,r=e.loading,i=e.confirmText,o=e.title,c=e.text,s=e.isDestructiveAction;return l.createElement(h.v,{isVisible:t,hide:n,confirmText:l.createElement(b.I,{loading:r,text:i}),isDestructiveAction:s,onConfirm:a,disableConfirm:r,hideOnConfirm:!1},l.createElement(C.x,{paddingBottom:"6px"},l.createElement(w.X6,{scale:"L"},o)),l.createElement(C.x,{paddingBottom:"32px"},l.createElement(x.F,{scale:"L"},c)))};function y(e){var t=e.isVisible,n=e.hide,a=e.deleteCatalog,r=e.loading;return l.createElement(k,{isVisible:t,hide:n,confirmText:"Delete",isDestructiveAction:!0,onConfirm:a,loading:r,title:"Delete list",text:"Deleting this list will remove it from Your library. If others have saved this list, it will also be deleted and removed from their library. Deleting this list will not delete any stories in it."})}var I=n(85208),S=function(e){var t=e.isVisible,n=e.hide,a=e.onConfirm;return l.createElement(k,{isVisible:t,hide:n,loading:!1,text:"If others have saved this list, it will be removed from their library.",confirmText:"Make private",title:"Make list private",onConfirm:a})},O=n(1109),R=n(77593),D=n(93310),P=n(61609),L=n(52069),V=n(97217);function B(e){var t=e.isVisible,n=e.hide,a=e.catalog,r=e.updateCatalog,i=e.loading,c=a.name,s=a.description,u=a.visibility,d=a.id,m=a.type,f=(0,p.O)(!1),v=o()(f,3),g=v[0],E=v[1],w=v[2],k=(0,l.useState)(c),y=o()(k,2),I=y[0],B=y[1],T=(0,l.useState)(!!s),j=o()(T,2),A=j[0],M=j[1],H=(0,l.useState)(s),F=o()(H,2),U=F[0],z=F[1],_=(0,l.useState)(u),G=o()(_,2),$=G[0],Q=G[1],q=a.type===V.HQ.PREDEFINED_LIST,K=(0,l.useCallback)((function(e){B(e.target.value)}),[]),Y=(0,l.useCallback)((function(e){z(e.target.value)}),[]),N=(0,l.useCallback)((function(){Q((function(e){return e===V.n2.PRIVATE?V.n2.PUBLIC:V.n2.PRIVATE}))}),[]),X=(0,l.useCallback)((function(){var e=I.trim(),t=null==U?void 0:U.trim();r({variables:{catalogId:d,attributes:{type:m,title:e!==c?e:null,description:t!==s?t:null,visibility:$!==u?$:null}}})}),[I,U,$,r,d,m,c,s,u]),Z=(0,l.useCallback)((function(){$===V.n2.PRIVATE&&u===V.n2.PUBLIC?E():X()}),[X,E,$,u]),J=(0,l.useCallback)((function(){w(),X()}),[w,X]),W=I.trim(),ee=(null!==U?U.trim():null)===s&&W===c&&$===u;return g?l.createElement(S,{hide:w,onConfirm:J,isVisible:!0}):l.createElement(h.v,{isVisible:t,hide:n,confirmText:l.createElement(b.I,{loading:i}),isDestructiveAction:!1,onConfirm:Z,disableConfirm:!q&&!W||i||ee||(0,O.G6)(I)||(0,O.z6)(U),hideOnConfirm:!1},l.createElement(C.x,{height:"400px"},l.createElement(C.x,{paddingBottom:"60px"},l.createElement(L.Dx,{scale:"L"},"Edit list")),l.createElement(C.x,{textAlign:"left",width:"400px",sm:{width:"100%"}},!q&&l.createElement(C.x,{paddingBottom:"20px"},l.createElement(R.n,{value:I,onChange:K,placeholder:"Give it a name",characterCountLimit:O.lp})),l.createElement(C.x,{paddingBottom:"20px"},A?l.createElement(C.x,{maxHeight:"170px",overflow:"auto"},l.createElement(R.n,{value:null!=U?U:void 0,onChange:Y,placeholder:"Description",isMultiline:!0,autoFocus:!0,characterCountLimit:O.B0})):l.createElement(D.r,{onClick:function(){return M(!0)}},l.createElement(x.F,{scale:"L",color:"ACCENT"},"Add a description"))),l.createElement(C.x,null,l.createElement(P.X,{checked:$===V.n2.PRIVATE,onChange:N,textScale:"L"},"Make it private")))))}var T=n(75675),j=n(77545),A=n(92661),M=n(78285),H=n(43487),F=n(71341),U=n(50458);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=(0,p.O)(!1),n=o()(t,3),a=n[0],r=n[1],i=n[2];return[a,r,(0,l.useCallback)((function(){i(),e()}),[i,e])]}var $=function(e){var t=e.catalog,n=e.viewer,a=e.ariaExpanded,r=e.ariaId,i=e.hidePopover,c=t.visibility,u=t.id,d=t.name,m=t.description,p=t.type,f=t.postItemsCount,v=t.disallowResponses,b=(0,E.VK)(),h=b.setShowReorderView,C=b.setShowBulkDeleteView,w=(0,H.v9)((function(e){return e.config.authDomain})),k=(0,M.w)(),O=(0,g.TH)(),R=(0,A.$B)(O.pathname),P="user-catalog"===(null==R?void 0:R.route.mediumAppPage),L=(0,F.h)(),z=(0,A.uk)(),$=(0,A.qt)("ShowYourLists",{}),Q=(0,j.sK)(u),q=o()(Q,2),K=q[0],Y=q[1],N=Y.loading,X=Y.error,Z=(0,j.qz)(u),J=o()(Z,2),W=J[0],ee=J[1],te=ee.loading,ne=ee.error,ae=G(i),re=o()(ae,3),ie=re[0],oe=re[1],le=re[2],ce=G(i),se=o()(ce,3),ue=se[0],de=se[1],me=se[2],pe=G(i),fe=o()(pe,3),ve=fe[0],ge=fe[1],Ee=fe[2],be=G(i),he=o()(be,3),Ce=he[0],we=he[1],xe=he[2],ke=(0,I.O2)(t,le,(function(e){window.history.replaceState(null,window.document.title,(0,U.yk)(_(_({},t),{},{name:e}),w))})),ye=o()(ke,2),Ie=ye[0],Se=ye[1],Oe=Se.loading,Re=Se.error,De=(0,l.useCallback)((function(){P&&(t.creator.username?L(z("ShowUserLists",{username:t.creator.username})):window.location.assign($))}),[$,P,t.creator.username]),Pe=(0,I.h6)({catalog:t,userId:n.id,onCompleted:De}),Le=Pe.deleteCatalog,Ve=Pe.loading,Be=Pe.error,Te=(0,l.useCallback)((function(){xe(),Oe||Ie({variables:{catalogId:u,attributes:{title:d,type:p,visibility:c===V.n2.PRIVATE?V.n2.PUBLIC:V.n2.PRIVATE,description:m}}})}),[u,d,c,Ie,Oe,m,p,xe]),je=(0,l.useCallback)((function(){c===V.n2.PUBLIC?we():Te()}),[Te,c,we]),Ae=(0,l.useCallback)((function(){i(),h(!0)}),[i]),Me=(0,l.useCallback)((function(){i(),C(!0)}),[i]);(0,l.useEffect)((function(){(Re||Be||X||ne)&&k({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[Re,Be,X,ne,k]);var He=(0,l.useCallback)((function(){N||(K(),i())}),[N,i]),Fe=(0,l.useCallback)((function(){te||(W(),i())}),[te,i]);return l.createElement(l.Fragment,null,l.createElement(s.Sl,null,l.createElement(B,{isVisible:ie,hide:le,catalog:t,updateCatalog:Ie,loading:Oe}),l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:oe},"Edit list info")),f>1&&l.createElement(s.Sl,null,l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:Me},"Remove items")),l.createElement(s.Sl,null,l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:je},"Make list ",c===V.n2.PUBLIC?"private":"public")),f>1&&l.createElement(s.Sl,null,l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:Ae},"Reorder items")),l.createElement(s.Sl,null,l.createElement(T.w,{isVisible:ve,hide:Ee,onConfirm:He,entityTypename:"Catalog"}),l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:v?Fe:ge},v?"Show responses":"Hide responses")),t.type!==V.HQ.PREDEFINED_LIST&&l.createElement(s.Sl,null,l.createElement(y,{isVisible:ue,hide:me,deleteCatalog:Le,loading:Ve}),l.createElement(D.r,{"aria-controls":r,"aria-expanded":a,onClick:de},l.createElement(x.F,{scale:"M",color:"ERROR"},"Delete list"))),l.createElement(S,{isVisible:Ce,hide:xe,onConfirm:Te}))},Q=n(18627),q=n(66411),K=function(e){var t=e.catalog,n=e.ariaExpanded,a=e.hidePopover,r=t.id,i=t.viewerEdge.clapCount,o=(0,I.ok)().clapCatalog,c=(0,I.es)().flagCatalog,u=(0,Q.Av)(),d=(0,q.pK)(),m=l.useCallback((function(){i&&(o({catalogId:r,numClaps:-i}),u.event("list.clientUnvote",{listId:r,unvoteCount:i,source:d}),a())}),[r,i,d,o,a]),p=l.useCallback((function(){c({catalogId:r}),a()}),[r,c,a]);return l.createElement(l.Fragment,null,l.createElement(s.mX,null,0!==i&&l.createElement(s.Sl,null,l.createElement(D.r,{onClick:m,"aria-expanded":n},"Undo applause for this list")),l.createElement(s.Sl,null,l.createElement(D.r,{onClick:p,"aria-expanded":n},"Report this list"))))},Y=function(e){var t=e.catalog,n=e.viewer,a=e.isResponsive,r=(0,p.O)(!1),i=o()(r,4),c=i[0],f=i[2],v=i[3],g="catalogContentMenu",E=c?"true":"false",b=n.id===t.creator.id,h=l.useCallback((function(){return l.createElement(s.mX,null,b?l.createElement($,{catalog:t,ariaExpanded:E,ariaId:g,hidePopover:f,viewer:n}):l.createElement(K,{catalog:t,ariaExpanded:E,hidePopover:f}))}),[b,t,E,f,n]);return l.createElement(u.J,{ariaId:g,isVisible:c,hide:f,popoverRenderFn:h},l.createElement(d.u,{onClick:v,"aria-label":"More options",icon:l.createElement(m.Z,null),text:a?"More":void 0,tooltipText:"More"}))},N=function(e){return l.createElement(c.I,null,(function(t){return t?l.createElement(Y,r()({viewer:t},e)):null}))}},24129:(e,t,n)=>{"use strict";n.d(t,{l:()=>V});var a=n(67294),r=n(44642),i=n(97996),o=n(83263),l=n(84739),c=n(1109),s=n(10648),u=n(14818),d=n(77355),m=n(93310),p=n(27323),f=n(30020),v=n(87691),g=n(52069),E=n(18627),b=n(66411),h=n(14646),C=n(18122),w=n(92661),x=n(97217),k=n(99171),y=n(92305),I=n(87498),S=function(e){var t=e.catalog.listItemsConnection.items,n=(0,o.Q)(),r={xs:140,sm:166,md:90,lg:166},i={xs:105,sm:105,md:144,lg:144};return a.useMemo((function(){return a.createElement(o.f,{coverHeight:i[n],coverWidth:r[n],catalogItems:t,isEmbeded:!0})}),[n,t])},O=n(65968),R=n(64238),D=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.text.lighter}}},P={position:"absolute",inset:"0",border:"none"},L={pointerEvents:"none"},V=function(e){var t=e.catalog,n=t.name,V=t.visibility,B=t.id,T=t.predefined,j=t.creator,A=(0,c.SZ)(t),M=V!==x.n2.PUBLIC,H=T?(0,y.S6)(T):n,F=(0,E.Av)(),U=(0,b.pK)(),z=(0,o.Q)(),_=(0,C.g)({onPresentedFn:function(){F.event("list.presented",{listId:t.id,source:U})}}),G=(0,h.I)(),$="sm"===z||"xs"===z,Q=(0,w.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,y.EJ)(t)}),q=(0,l.B)(j),K=(0,R.o)(j);return a.createElement(d.x,{ref:_,border:"BASE_LIGHTER",borderRadius:"4px",marginBottom:"40px",maxWidth:$?"100%":"740px",width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"BASE_LIGHT",flexDirection:$?"column":"row",position:"relative"},a.createElement(m.r,{href:Q,rules:P}),a.createElement(d.x,{key:B,display:"flex",flexDirection:"column",padding:"24px 24px 10px",flexGrow:"1",flexShrink:"0",flexBasis:"0",justifyContent:"space-between",wordBreak:"break-word"},a.createElement(p.P,{href:q},a.createElement(d.x,{display:"flex"},a.createElement(u.z,{miroId:j.imageId||I.gG,alt:j.name||"",diameter:20,freezeGifs:!0}),a.createElement(d.x,{paddingLeft:"8px",zIndex:"1",display:"flex",alignItems:"center"},a.createElement(v.F,{scale:"M",color:"DARKER",clamp:1},j.name),K&&j.id&&a.createElement(O.G,{marginLeft:"2px",marginTop:"2px",size:"S",userId:j.id})))),a.createElement(d.x,{marginTop:"12px"},a.createElement(g.Dx,{clamp:2,scale:$?"XS":"S"},H)),a.createElement(d.x,{display:"flex",alignItems:"center",justifyContent:"space-between"},a.createElement(d.x,{display:"flex",margin:"6px 0"},a.createElement(v.F,{scale:"S",color:"LIGHTER"},A||"No stories"),M&&a.createElement(d.x,{paddingLeft:"8px"},a.createElement(k.Z,{className:G(D)}))),a.createElement(d.x,{display:"flex",position:"relative"},a.createElement(s.b,{catalog:t}),a.createElement(r.kw,{catalog:t},a.createElement(f._,{tooltipText:"More",targetDistance:10},a.createElement(i.G,{catalog:t})))))),a.createElement("div",{className:G(L)},a.createElement(S,{catalog:t})))}},77545:(e,t,n)=>{"use strict";n.d(t,{sK:()=>f,qz:()=>v,SM:()=>E,VC:()=>b});var a=n(63038),r=n.n(a),i=n(28655),o=n.n(i),l=n(92471),c=n(21919),s=n(97217),u=n(78285);function d(){var e=o()(["\n  mutation UpdateCatalogLockResponsesMutation(\n    $catalogId: String!\n    $attributes: UpdateCatalogInput!\n  ) {\n    updateCatalog(catalogId: $catalogId, attributes: $attributes) {\n      __typename\n      ... on Catalog {\n        id\n        responsesLocked\n      }\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=o()(["\n  mutation UpdateCatalogDisallowResponsesMutation(\n    $catalogId: String!\n    $attributes: UpdateCatalogInput!\n  ) {\n    updateCatalog(catalogId: $catalogId, attributes: $attributes) {\n      __typename\n      ... on Catalog {\n        id\n        disallowResponses\n      }\n    }\n  }\n"]);return m=function(){return e},e}var p=(0,l.Ps)(m()),f=function(e){var t=(0,u.w)();return(0,c.D)(p,{variables:{catalogId:e,attributes:{type:s.HQ.LISTS,disallowResponses:!0}},onCompleted:function(){t({message:"Responses are now hidden for this list."})}})},v=function(e){var t=(0,u.w)();return(0,c.D)(p,{variables:{catalogId:e,attributes:{type:s.HQ.LISTS,disallowResponses:!1}},onCompleted:function(){t({message:"Responses are now shown for this list."})}})},g=(0,l.Ps)(d()),E=function(e,t,n,a){var i=(0,c.D)(g,{variables:{catalogId:a,attributes:{type:s.HQ.LISTS,responsesLocked:!0}},onCompleted:function(){e.event("responses.locked",{catalogId:a,source:t}),n()}});return r()(i,1)[0]},b=function(e,t){var n=(0,c.D)(g,{variables:{catalogId:t,attributes:{type:s.HQ.LISTS,responsesLocked:!1}},onCompleted:function(){e()}});return r()(n,1)[0]}},10648:(e,t,n)=>{"use strict";n.d(t,{b:()=>w});var a=n(67294),r=n(85208),i=n(6443),o=n(26350),l=n(77355),c=n(30020),s=n(38356),u=n(92661),d=n(45550);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=a.createElement("path",{d:"M17.5 3.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7.75z",fill:"currentColor"}),f=a.createElement("path",{d:"M10.5 2.75h-6a2 2 0 0 0-2 2v11.5",stroke:"currentColor",strokeLinecap:"round"});const v=function(e){return a.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),p,f)};var g=n(92305),E=n(78870),b=function(e){var t,n=e.isFollowing,r=e.isResponsive,i=e.onClick,o=e.disabled;return r&&(t=n?"Remove from Your library":"Save list"),a.createElement(s.u,{onClick:i,text:t,icon:n?a.createElement(d.Z,null):a.createElement(v,null),disabled:o,tooltipText:n?"Remove from Your library":"Save list"})},h=function(e){var t=e.catalog,n=e.viewerId,i=e.isResponsive,o=(0,r.Yz)(n,t.id),l=o.followCatalog,c=o.loading,s=(0,r.mC)(n,t.id),u=s.unfollowCatalog,d=s.loading,m=t.viewerEdge.isFollowing,p=m?u:l;return a.createElement(b,{onClick:p,disabled:c||d,isResponsive:i,isFollowing:m})},C=function(e){var t=e.catalog,n=e.isResponsive,r=(0,u.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,g.EJ)(t)}),i=(0,E.Rk)(r,{save_list:"true"});return a.createElement(o.R,{operation:"register",susiEntry:"follow_list",redirectTo:i},a.createElement(b,{isResponsive:n}))},w=function(e){var t=e.catalog,n=e.marginLeft,r=e.marginRight,o=void 0===r?"8px":r,s=e.isResponsive,u=(0,i.H)(),d=u.value;return u.loading||t.creator.id===(null==d?void 0:d.id)?null:a.createElement(l.x,{marginLeft:n,marginRight:o,flexShrink:"0"},a.createElement(c._,{tooltipText:t.viewerEdge.isFollowing?"Remove from Your library":"Save list",targetDistance:10},d?a.createElement(h,{catalog:t,viewerId:d.id,isResponsive:s}):a.createElement(C,{catalog:t,isResponsive:s})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4129.6a4d10a0.chunk.js.map