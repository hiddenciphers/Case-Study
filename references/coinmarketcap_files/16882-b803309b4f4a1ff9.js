"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16882],{64722:function(n,t,i){i.d(t,{$A:function(){return k},AS:function(){return w},FH:function(){return C},UN:function(){return I},WW:function(){return y},Yt:function(){return v},am:function(){return j},bM:function(){return z},oY:function(){return m},sE:function(){return Z},y6:function(){return g}});var e=i(92228),r=i(48723),o=i(82740);function d(){var n=(0,e.Z)(["\n  body {\n    --table-background-color: #fff;\n    --table-divider-color: #eff2f5;\n    --table-row-hover-background-color: rgb(248, 250, 253);\n  }\n  body.NIGHT {\n    --table-row-hover-background-color: rgb(23, 25, 36);\n    --table-background-color: rgb(23, 23, 26);\n    --table-divider-color: rgb(34, 37, 49);\n  }\n  .table-wrap tbody td {\n    white-space: normal;\n  }\n"]);return d=function(){return n},n}function a(){var n=(0,e.Z)(["\n  width: 164px;\n  height: 48px;\n  text-align: center;\n  box-sizing: content-box;\n  padding-top: 2px;\n  padding-bottom: 3px;\n  filter: hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%);\n  &.isUp {\n    filter: hue-rotate(85deg) saturate(80%) brightness(0.85);\n  }\n\n  /* filter: ","; */\n\n  @media (max-width: 576px) {\n    width: 19.4vw;\n    height: 7.8vw;\n  }\n"]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  vertical-align: bottom;\n"]);return c=function(){return n},n}function l(){var n=(0,e.Z)(["\n  @media (max-width: 576px) {\n    overflow-x: scroll;\n  }\n\n  && {\n    ","\n  }\n"]);return l=function(){return n},n}function h(){var n=(0,e.Z)(["\n  margin: auto;\n  font-size: 14px;\n  width: 100%;\n  transform: translateZ(0px);\n\n  thead {\n    position: sticky;\n    z-index: 120;\n    /* @media (max-width: ","px) {\n      transform: none !important;\n    } */\n    th {\n      background-color: var(--table-background-color);\n    }\n  }\n  tr:not(:only-child):hover > td {\n    background-color: var(--table-row-hover-background-color);\n  }\n\n  td {\n    text-align: right;\n    font-weight: 500;\n    white-space: nowrap;\n  }\n  td[colspan] {\n    text-align: center !important;\n    padding: 8px !important;\n  }\n  th,\n  td {\n    border-bottom: 1px solid var(--table-divider-color);\n    padding: 10px;\n    background-color: var(--table-background-color);\n  }\n  th {\n    border-top: 1px solid var(--table-divider-color);\n    padding: 11px 10px;\n    text-align: right;\n    z-index: 99;\n    font-size: 12px;\n\n    &:hover {\n      z-index: 100;\n    }\n  }\n  > tbody > tr:only-child > td:only-child {\n    padding: 0;\n  }\n  th:nth-child(1),\n  th:nth-child(2),\n  th:nth-child(3),\n  td:nth-child(1),\n  td:nth-child(2),\n  td:nth-child(3) {\n    text-align: left;\n  }\n\n  tbody tr {\n    content-visibility: auto;\n    contain-intrinsic-size: 60px;\n  }\n\n  && {\n    ","\n  }\n"]);return h=function(){return n},n}function u(){var n=(0,e.Z)(["\n  @media (max-width: 1200px) {\n    overflow-x: scroll;\n  }\n"]);return u=function(){return n},n}function s(){var n=(0,e.Z)(["\n  th {\n    position: sticky;\n    top: 0;\n    white-space: nowrap;\n  }\n\n  th:nth-child(3),\n  td:nth-child(3) {\n    white-space: initial;\n  }\n  td:nth-child(4) {\n    min-width: 8em;\n  }\n\n  th:nth-child(1),\n  td:nth-child(1) {\n    position: sticky;\n    left: 0px;\n    z-index: 101;\n  }\n  th:nth-child(2),\n  td:nth-child(2) {\n    position: sticky;\n    left: 33px;\n    z-index: 101;\n  }\n\n  th:nth-child(3),\n  td:nth-child(3) {\n    position: sticky;\n    left: 76px;\n    z-index: 101;\n    /* &:hover {\n      z-index: 102;\n    }\n    &:focus-within {\n      z-index: 103;\n    } */\n  }\n\n  @media (min-width: 576px) and (max-width: 1200px) {\n    th {\n      top: 0;\n    }\n\n    th:nth-child(1),\n    td:nth-child(1) {\n      position: sticky;\n      left: -5px;\n      z-index: 100;\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      position: sticky;\n      left: 28px;\n      z-index: 100;\n    }\n    th:nth-child(3),\n    td:nth-child(3) {\n      position: sticky;\n      left: 63px;\n      z-index: 100;\n    }\n  }\n\n  @media (max-width: 780px) {\n    th,\n    td {\n      padding: 10px 4px;\n      img {\n        z-index: 30;\n      }\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      display: none;\n    }\n    th:nth-child(1),\n    td:nth-child(1) {\n      position: sticky;\n      left: 0px;\n      z-index: 100;\n      min-width: 24px;\n    }\n    th:nth-child(3),\n    td:nth-child(3) {\n      position: sticky;\n      left: 24px;\n      z-index: 100;\n    }\n    <Cards [class^='PercentageBar__PercentageOuter'] {\n      z-index: 30;\n    }\n  }\n"]);return s=function(){return n},n}function x(){var n=(0,e.Z)(["\n  th {\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1200px) {\n    //th:nth-child(1),\n    //td:nth-child(1) {\n    //  display: none;\n    //}\n    th:nth-child(2),\n    td:nth-child(2) {\n      position: sticky;\n      left: 0px;\n      z-index: 100;\n      white-space: initial;\n    }\n    td:nth-child(2):hover {\n      z-index: 101;\n    }\n  }\n}"]);return x=function(){return n},n}function p(){var n=(0,e.Z)(["\n  white-space: nowrap;\n  @media (max-width: 1200px) {\n    overflow-x: scroll;\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,e.Z)(["\n  @media (max-width: 1200px) {\n    overflow-x: scroll;\n  }\n"]);return f=function(){return n},n}function b(){var n=(0,e.Z)(["\n  th {\n    position: sticky;\n    top: 0;\n  }\n\n  td:nth-child(1) {\n    width: 33px;\n  }\n\n  @media (max-width: 1200px) {\n    th:nth-child(1),\n    td:nth-child(1) {\n      position: sticky;\n      left: 0px;\n      z-index: 100;\n      white-space: initial;\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      position: sticky;\n      left: 32px;\n      z-index: 100;\n      white-space: initial;\n    }\n\n    th:nth-child(3),\n    td:nth-child(3) {\n      position: sticky;\n      left: 70px;\n      z-index: 100;\n      white-space: initial;\n    }\n  }\n\n  @media (max-width: 780px) {\n    th:nth-child(1),\n    td:nth-child(1) {\n      display: none;\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      display: none;\n    }\n    th:nth-child(3),\n    td:nth-child(3) {\n      left: 0;\n    }\n  }\n"]);return b=function(){return n},n}var m=(0,o.vJ)(d()),v=o.ZP.img.withConfig({componentId:"sc-beb003d5-0"})(a(),(function(n){return n.isUp?"hue-rotate(85deg) saturate(80%) brightness(0.85)":"hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)"})),w=(0,o.ZP)(v).withConfig({componentId:"sc-beb003d5-1"})(c()),g=o.ZP.div.withConfig({componentId:"sc-beb003d5-2"})(l(),(function(n){return n.addCSS})),y=o.ZP.table.withConfig({componentId:"sc-beb003d5-3"})(h(),r.AV.LARGE_MIN,(function(n){return n.addCSS})),k=(0,o.iv)(u()),z=(0,o.iv)(s()),j=(0,o.iv)(x()),I=(0,o.iv)(p()),Z=(0,o.iv)(f()),C=(0,o.iv)(b())},16882:function(n,t,i){var e=i(70865),r=i(96670),o=i(87394),d=i(52322),a=i(2784),c=(i(22504),i(71610),i(82226)),l=i(31535),h=i(29731),u=i(64722),s=i(37814),x=a.memo((function(n){var t,i=n||{},o=i.data,c=void 0===o?[]:o,l=i.columns,s=void 0===l?[]:l,x=i.rowKey,f=i.fixedHeader,b=void 0===f||f,v=i.tableClassName,w=void 0===v?"":v,g=i.emptyText,y=i.lazy,k=i.useInViewPort,z=i.loading,j=i.onRowClick,I=i.isShowTitle,Z=void 0===I||I,C=i.tableHeaderRef,S=i.tableStyle,P=i.noDataFallback,W=s.filter((function(n){return!!n})),H=c&&c.length;t=H?(0,d.jsx)("tbody",{children:c.filter(Boolean).map((function(n,t){return(0,d.jsx)(m,{data:n,columns:W,rowIdx:t,lazy:y&&y(t),useInViewPort:k,onRowClick:j,noDataFallback:P},n[x]||t)}))}):(0,d.jsx)("tbody",{children:(0,d.jsx)("tr",{style:{padding:"0px 10px"},children:(0,d.jsx)("td",{colSpan:W.length||5,children:z?(0,d.jsx)(h.Xi,{loading:!0}):g||(0,d.jsx)(h.Xi,{})})})});var E=(0,a.useMemo)((function(){return W.some((function(n){return n.width}))&&0!==c.length?(0,d.jsx)("colgroup",{children:W.map((function(n,t){var i,o,d,c={};n.width&&(c.style={width:null!==(i=n.width)&&void 0!==i?i:"auto",minWidth:null!==(o=n.minWidth)&&void 0!==o?o:"auto",maxWidth:null!==(d=n.maxWidth)&&void 0!==d?d:"auto"});return(0,a.createElement)("col",(0,r.Z)((0,e.Z)({},c),{key:t}))}))}):null}),[W]);return(0,d.jsxs)(u.WW,{className:"cmc-table ".concat(w," ").concat(z&&H?"cmc-table-loading":""),addCSS:S,children:[E,Z?(0,d.jsx)(p,{columns:W,fixedHeader:b,tableHeaderRef:C}):null,t]})})),p=a.memo((function(n){var t=n.columns,i=n.fixedHeader,e=n.tableHeaderRef;return(0,d.jsx)("thead",{ref:e,children:(0,d.jsx)("tr",{children:t.map((function(n,t){return(0,d.jsx)("th",{className:i?"stickyTop":"",style:{textAlign:n.align,top:"number"===typeof i?i:void 0},children:n.title},t)}))})})})),f=["slug","star"],b=function(n){var t=n.c,i=n.data,e=n.rowIdx,r=n.inViewPort,o=n.noDataFallback;if(0===(null===i||void 0===i?void 0:i.isActive)&&f.indexOf(null===t||void 0===t?void 0:t.dataIndex)<0)return(0,d.jsx)(l.YM,{children:"--"});var a=void 0===i[t.dataIndex]?o||JSON.stringify(i):i[t.dataIndex];return t.render?t.render(a,i,e,r):a},m=a.memo((function(n){var t=n.columns,i=n.data,e=n.rowIdx,r=n.lazy,c=n.useInViewPort,l=n.onRowClick,h=n.noDataFallback,u=(0,a.useState)(!1),x=u[0],p=u[1],f=(0,a.useState)(!r),b=f[0],m=f[1],w=(0,a.useState)(!r),g=w[0],y=w[1];(0,a.useEffect)((function(){!r&&y(!0)}),[r]);var k=(0,a.useRef)();if((0,a.useEffect)((function(){window.IntersectionObserver||m(!0);var n=new IntersectionObserver((function(n){var t=(0,o.Z)(n,1)[0];m(t.isIntersecting)}),{rootMargin:(0,s.ZP)()?"200px":"500px",threshold:.1});return n.observe(k.current),function(){n&&n.disconnect()}}),[k.current]),(0,a.useEffect)((function(){!g&&b&&y(!0),!x&&b&&p(!0)}),[x,b,g]),!x)return(0,d.jsx)("tr",{ref:k,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}});if(!g){var z=r;return(0,d.jsx)(z,{ref:k,data:i})}return(0,d.jsx)("tr",{ref:k,style:{cursor:l?"pointer":void 0},onClick:function(){return l&&l(i)},children:t.map((function(n,t){return(0,d.jsx)(v,{c:n,data:i,rowIdx:e,inViewPort:c&&b,noDataFallback:h},t)}))},g?1:0)})),v=a.memo((function(n){var t=n.c,i=n.data,e=n.rowIdx,r=n.inViewPort,o=n.noDataFallback;return(0,d.jsx)("td",{style:{textAlign:t.align},children:b({c:t,data:i,rowIdx:e,inViewPort:r,noDataFallback:o})})}));t.Z=(0,c.$)(x,(function(){return(0,d.jsx)(u.WW,{children:(0,d.jsx)("tbody",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:"Table Render Error!"})})})})}))}}]);
//# sourceMappingURL=16882-b803309b4f4a1ff9.js.map