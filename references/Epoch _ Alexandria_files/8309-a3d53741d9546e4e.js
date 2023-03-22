"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8309],{28309:function(e,t,r){var n=r(59499),i=r(4730),c=r(41664),o=r.n(c),a=r(39138),s=r.n(a),l=r(5826),u=r(53575),g=(r(94606),r(98782)),p=r(87379),d=r(78537),f=r(6998),b=r(96183),h=r(12078),O=r(73415),j=r(85893),y=["article","imagePlacement"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,p.ZP)(u.xu).withConfig({displayName:"ArticleCard__ArticleBox",componentId:"sc-4ctgqh-0"})(["position:relative;height:100%;"]),P=p.ZP.div.withConfig({displayName:"ArticleCard__Category",componentId:"sc-4ctgqh-1"})(["color:",";line-height:1.5;padding-bottom:4px;"],(function(e){return e.theme.colors.textPrimary})),w=p.ZP.div.withConfig({displayName:"ArticleCard__HorizontalPlacement",componentId:"sc-4ctgqh-2"})(["display:flex;flex-direction:row;width:100%;> *:first-child{flex:1;display:block;}> *:last-child{flex:0 0 33%;}"]);function Z(e){var t=e.article,r=(0,l.QT)(),n=(r.locale,r.t),i=t.title,c=t.author,o=t.categories,a=t.created_at,g=t.meta,p=t.reading_time;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(u.xu,{mb:4,flex:1,children:[Boolean(null===o||void 0===o?void 0:o.length)&&(0,j.jsx)(P,{children:o[0].title}),(0,j.jsx)(d.Z,{scale:"sm",title:i,mb:2,children:s()(i,{length:100})}),(0,j.jsx)(u.xv,{color:"textTertiary",fontSize:1,children:s()(g,{length:200})})]}),Boolean(null===c||void 0===c?void 0:c.name)&&(0,j.jsx)(u.kC,{pb:2,fontSize:0,children:(0,j.jsx)(u.xv,{color:"textTertiary",fontSize:0,children:n("By {{author}}",{author:null===c||void 0===c?void 0:c.name})})}),(0,j.jsxs)(u.kC,{pb:4,children:[(0,j.jsx)(f.Z,{fontSize:0,createdAt:a}),(0,j.jsx)(b.Z,{iconSize:12,timeMs:p,ml:3,fontSize:0})]})]})}t.Z=function(e){var t,r=e.article,n=e.imagePlacement,c=void 0===n?"top":n,a=(0,i.Z)(e,y),s=r.slug,l=r.difficulty,p=r.image,d="".concat("https://academy-public.coinmarketcap.com","/").concat(p.thumbnail),f=null!==l&&void 0!==l&&l.label?l.label:l&&(null===(t=O.find((function(e){return e.slug===l.slug})))||void 0===t?void 0:t.title);return(0,j.jsx)(o(),{href:"/article/[slug]/",as:"/article/".concat(s,"/"),passHref:!0,children:(0,j.jsxs)(x,v(v({as:"a",display:"block"},a),{},{children:[Boolean(f)&&(0,j.jsx)(h.Z,{tags:[v(v({},l),{},{title:f})],sx:{position:"absolute",right:"16px",top:"16px",zIndex:5}}),(0,j.jsxs)(u.kC,{flexDirection:"column",alignItems:"start",height:"100%",children:["top"!==c&&(0,j.jsxs)(w,{children:[(0,j.jsx)("div",{children:(0,j.jsx)(Z,{article:r})}),(0,j.jsx)("div",{children:(0,j.jsx)(g.Z,{src:d,mb:4})})]}),"top"===c&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g.Z,{src:d,mb:4}),(0,j.jsx)(Z,{article:r})]})]})]}))})}},6998:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(59499),i=r(4730),c=r(52165),o=r(46621),a=r(98592);(0,c.z2)("en-short",o.Z),(0,c.z2)("ru-short",a.Z);var s=c.WU,l=r(53575),u=r(5826),g=r(85893),p=["createdAt","updatedAt"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.createdAt,r=e.updatedAt,n=void 0===r?null:r,c=(0,i.Z)(e,p),o=(0,u.QT)().locale;return"en"===o&&n?(0,g.jsxs)(l.xv,f(f({as:"span",color:"textTertiary"},c),{},{children:["Created ",s(t,"".concat(o,"-short")),", last updated ",s(n,"".concat(o,"-short"))]})):(0,g.jsx)(l.xv,f(f({as:"span",color:"textTertiary"},c),{},{children:s(t,"".concat(o,"-short"))}))}},12078:function(e,t,r){var n=r(59499),i=r(4730),c=r(41664),o=r.n(c),a=r(53575),s=r(5826),l=(r(94606),r(85893)),u=["tags","maxTags","isTagsClickable"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.tags,r=e.maxTags,n=e.isTagsClickable,c=(0,i.Z)(e,u);(0,s.QT)().locale;if(!t)return null;var g=t.slice(0,r),d=t.length-r;return(0,l.jsxs)(a.xu,p(p({},c),{},{children:[g.map((function(e){return n?(0,l.jsx)(o(),{href:"/article?tags=".concat(e.slug),as:"/article?tags=".concat(e.slug),passHref:!0,children:(0,l.jsx)(a.Ct,{as:"a",mr:2,mb:3,children:e.title})},e.slug):(0,l.jsx)(a.Ct,{mr:2,mb:3,children:e.title},e.slug)})),d>0&&(0,l.jsx)(a.Ct,{children:"+".concat(d)})]}))};d.defaultProps={tags:null,maxTags:2,isTagsClickable:!1},t.Z=d},96183:function(e,t,r){var n=r(59499),i=r(4730),c=r(53575),o=r(5826),a=r(85893),s=["timeMs","iconSize","fontSize","full"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.timeMs,r=e.iconSize,n=e.fontSize,l=void 0===n?2:n,g=e.full,p=(0,i.Z)(e,s),d=(0,o.QT)().t;return t?(0,a.jsxs)(c.kC,u(u({display:"inline-flex"},p),{},{children:[!g&&(0,a.jsx)(c.T3,{size:r,color:"textTertiary"}),(0,a.jsx)(c.xv,{as:"span",color:"textTertiary",ml:g?0:1,fontSize:l,children:g?"".concat(Math.ceil(t/6e4)," min read"):d("{{time}}m",{time:Math.ceil(t/6e4)})})]})):null};g.defaultProps={timeMs:null,iconSize:"16px"},t.Z=g},78537:function(e,t,r){var n=r(59499),i=r(4730),c=r(67294),o=r(87379),a=r(53575),s=r(85893),l=["hasDivider","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,o.ZP)(a.X6).withConfig({displayName:"Title__StyledTitle",componentId:"sc-6yi3ll-0"})(["&:hover{text-decoration:none;}"]),d=o.ZP.div.withConfig({displayName:"Title__Divider",componentId:"sc-6yi3ll-1"})(["background-color:",";border-radius:4px;height:4px;margin-top:16px;width:32px;"],(function(e){return e.theme.colors.primary})),f=(0,c.forwardRef)((function(e,t){var r=e.hasDivider,n=void 0!==r&&r,c=e.children,o=(0,i.Z)(e,l);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,g(g({color:"text",ref:t},o),{},{children:c})),n&&(0,s.jsx)(d,{})]})}));t.Z=f},98782:function(e,t,r){var n=r(59499),i=r(4730),c=r(67294),o=r(87379),a=r(53575),s=r(85893),l=["src"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,o.ZP)(a.xu).withConfig({displayName:"LazyBackground__Background",componentId:"sc-16pnu62-0"})(["background-position:center center;background-repeat:no-repeat;background-size:cover;background-color:#d3d3d3;border-radius:16px;display:block;height:0;max-width:100%;position:relative;width:100%;"]);p.defaultProps={pt:"56.25%"};var d={root:null,rootMargin:"200px",threshold:0};t.Z=function(e){var t=e.src,r=(0,i.Z)(e,l),n=(0,c.useRef)(null),o=(0,c.useRef)(null);return(0,c.useEffect)((function(){return o.current=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(n.current.style.backgroundImage='url("'.concat(t,'")'),o.current.disconnect(),o.current=null)}))}),d),o.current.observe(n.current),function(){o.current&&o.current.disconnect()}}),[t]),(0,s.jsx)(p,g({ref:n},r))}},94606:function(e,t,r){var n=r(45697),i=r.n(n),c={title:i().string,language:i().string,slug:i().string,created_at:i().string},o={original:i().string,optimized:i().string,thumbnail:i().string,fallback:i().string},a={id:i().number,title:i().string,slug:i().string,image:i().shape(o),language:i().string,created_at:i().string,updated_at:i().string,reading_time:i().number,category:i().shape(c)},s={level:i().number,title:i().string},l=(i().string,i().string,i().string,i().string,i().number,i().shape(s),{username:i().string}),u={id:i().number,content:i().string,flagged:i().bool,parentId:i().number,title:i().string,user:i().shape(l),created_at:i().string,updated_at:i().string},g=(i().string,i().string,i().string,i().number,i().arrayOf(i().shape(u)),i().shape(l),i().string,{title:i().string,language:i().string,created_at:i().string}),p=(i().string,i().string,i().string,i().string,i().arrayOf(i().shape(g)),{title:i().string,slug:i().string,meta:i().string,image:i().shape(o),language:i().string});i().number,i().string,i().string,i().string,i().string,i().string,i().shape(o),i().string,i().number,i().arrayOf(i().shape(p)),i().arrayOf(i().shape(a))},73415:function(e){e.exports=JSON.parse('[{"level":1,"title":"Easy","slug":"beginner"},{"level":2,"title":"Moderate","slug":"intermediate"},{"level":3,"title":"Hard","slug":"advanced"}]')}}]);