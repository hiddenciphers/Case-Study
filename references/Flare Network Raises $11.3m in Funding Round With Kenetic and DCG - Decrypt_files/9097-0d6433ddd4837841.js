(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9097],{18904:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,a){{let n=o(41860).normalizeLocalePath,r=o(3570).detectDomainLocale,u=t||n(e,l).detectedLocale,c=r(a,void 0,u);if(c){let t="http".concat(c.http?"":"s","://"),o=u===c.defaultLocale?"":"/".concat(u);return"".concat(t).concat(c.domain).concat("").concat(o).concat(e)}return!1}},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6850:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(23903).Z,a=o(15154).Z,n=l(o(2784)),r=o(96436),u=o(68944),c=o(42612),f=o(38119),i=o(92265),s=o(63981),d=o(29950),p=o(12544),h=o(18904),y=o(33890);let v=new Set;function b(e,t,o,l,a){if(a||u.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let a=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,n=t+"%"+o+"%"+a;if(v.has(n))return;v.add(n)}Promise.resolve(e.prefetch(t,o,l)).catch(e=>{})}}function _(e){return"string"==typeof e?e:c.formatUrl(e)}let m=n.default.forwardRef(function(e,t){let o,l;let{href:c,as:v,children:m,prefetch:L,passHref:P,replace:C,shallow:M,scroll:g,locale:j,onClick:E,onMouseEnter:k,onTouchStart:O,legacyBehavior:x=!1}=e,T=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,x&&("string"==typeof o||"number"==typeof o)&&(o=n.default.createElement("a",null,o));let R=!1!==L,S=n.default.useContext(s.RouterContext),w=n.default.useContext(d.AppRouterContext),D=null!=S?S:w,U=!S,{href:z,as:A}=n.default.useMemo(()=>{if(!S){let e=_(c);return{href:e,as:v?_(v):e}}let[e,t]=r.resolveHref(S,c,!0);return{href:e,as:v?r.resolveHref(S,v):t||e}},[S,c,v]),K=n.default.useRef(z),H=n.default.useRef(A);x&&(l=n.default.Children.only(o));let N=x?l&&"object"==typeof l&&l.ref:t,[B,Z,I]=p.useIntersection({rootMargin:"200px"}),q=n.default.useCallback(e=>{(H.current!==A||K.current!==z)&&(I(),H.current=A,K.current=z),B(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[A,N,z,I,B]);n.default.useEffect(()=>{D&&Z&&R&&b(D,z,A,{locale:j},U)},[A,z,Z,j,R,null==S?void 0:S.locale,D,U]);let F={ref:q,onClick(e){x||"function"!=typeof E||E(e),x&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,o,l,a,r,c,f,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](o,l,{shallow:r,locale:f,scroll:c}):t[a?"replace":"push"](l||o,{forceOptimisticNavigation:!s})};i?n.default.startTransition(h):h()}(e,D,z,A,C,M,g,j,U,R)},onMouseEnter(e){x||"function"!=typeof k||k(e),x&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),D&&(R||!U)&&b(D,z,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){x||"function"!=typeof O||O(e),x&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),D&&(R||!U)&&b(D,z,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},U)}};if(f.isAbsoluteUrl(A))F.href=A;else if(!x||P||"a"===l.type&&!("href"in l.props)){let e=void 0!==j?j:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&h.getDomainLocale(A,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);F.href=t||y.addBasePath(i.addLocale(A,e,null==S?void 0:S.defaultLocale))}return x?n.default.cloneElement(l,F):n.default.createElement("a",Object.assign({},T,F),o)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41860:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;let l=(e,t)=>o(10245).normalizeLocalePath(e,t);t.normalizeLocalePath=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39097:function(e,t,o){e.exports=o(6850)}}]);