(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return __webpack_require__(926)}])},2296:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return BlogHorizontal}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8533),react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8182),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),src_shared_functions_dateFormat__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9847),next_image__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5675),next_image__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__),_atk_components_loaders_ListLoader_ListLoader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1608),_atk_hooks_framerMotion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(658),_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2628),_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6__);function BlogHorizontal(param){var _webpThumbnailUrl,_categoryName,_preview;let{list,isLoading,hasNextPage,fetchNextPage,customClass,desc,date,footer,withoutFeatured}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"BlogHorizontal ".concat(null!=customClass?customClass:""),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__.Z,{className:_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().overflow,dataLength:list?list.length:0,next:()=>fetchNextPage(),hasMore:hasNextPage||isLoading,loader:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atk_components_loaders_ListLoader_ListLoader__WEBPACK_IMPORTED_MODULE_4__.Z,{}),scrollThreshold:.5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().masonryWrapper,children:list&&list.map((p,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:0!==index||withoutFeatured?"":"d-none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atk_hooks_framerMotion__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{className:"text-decoration-none",href:"/blog/".concat(p.meta.slug),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.Z,{className:_BlogHorizontal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().blogItem,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3___default(),{src:null!==(_webpThumbnailUrl=p.webpThumbnailUrl)&&void 0!==_webpThumbnailUrl?_webpThumbnailUrl:"",alt:"Casper Labs",fill:!0,className:"card-img-top position-relative"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.Z.Body,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"half-title categoryName",children:null!==(_categoryName=p.categoryName)&&void 0!==_categoryName?_categoryName:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.Z.Title,{children:p.title}),desc&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.Z.Text,{dangerouslySetInnerHTML:{__html:null!==(_preview=p.preview)&&void 0!==_preview?_preview:""}}),date&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"date",children:(0,src_shared_functions_dateFormat__WEBPACK_IMPORTED_MODULE_8__.Z)(p.timePublished)})]}),footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.Z.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{className:"text-muted",children:p.state})})]})})})},p._id))})})})}},9691:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ContentRight}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(682),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4051),react_bootstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1555),react_bootstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5005),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_atk_hooks_framerMotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(658),_ContentRight_module_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4334),_ContentRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_ContentRight_module_scss__WEBPACK_IMPORTED_MODULE_3__);function ContentRight(param){let{halfTitle,title,desc,linkButton,linkButton2,customClass,col1,col2,colLg1,colLg2,colXl1,colXl2,ContentRightContent}=param,componentClass="ContentRight ".concat(_ContentRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContentRight," ").concat(null!=customClass?customClass:"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:componentClass,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atk_hooks_framerMotion__WEBPACK_IMPORTED_MODULE_2__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"align-items-center g-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Z,{md:col1,lg:colLg1,xl:colXl1,children:[halfTitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"half-title",children:"A blockchain for the “other” 25M developers"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"section-title-h2 mb-4",children:title}),desc&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:desc}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{className:"w-100 my-4"}),"string"==typeof linkButton.link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:linkButton.link,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Z,{className:linkButton2&&"me-3 mb-3 mb-lg-0",variant:linkButton.variant,children:linkButton.label})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Z,{onClick(){linkButton.link()},className:linkButton2&&"me-3 mb-3 mb-lg-0",variant:linkButton.variant,children:linkButton.label}),linkButton2&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:linkButton2.link,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Z,{variant:linkButton2.variant,children:linkButton2.label})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Z,{md:col2,lg:colLg2,xl:colXl2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"position-relative contentRightContent",children:ContentRightContent})})]})})})})})}},1608:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ListLoader}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4051),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1555),react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6968),_ListLoader_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5973),_ListLoader_module_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_ListLoader_module_scss__WEBPACK_IMPORTED_MODULE_1__);function ListLoader(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_ListLoader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loaderContainer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"mt-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Z,{md:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"text-green",animation:"border",role:"status",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})})}},7553:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return BadgeList}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7977);function BadgeList(param){let{list,onClick,customClass,activeItem,hideAll}=param,handleCategoryClick=id=>{onClick(id)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"BadgeList ".concat(null!=customClass?customClass:""),children:[!hideAll,list&&list.map(p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"cursor-pointer ".concat(activeItem===p.slug?"active":""),bg:"secondary",onClick:()=>handleCategoryClick(p._id),children:p.value},p._id))]})}},926:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSP:function(){return __N_SSP},default:function(){return Blog}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),Container=__webpack_require__(682),es=__webpack_require__(8767),cms_api=__webpack_require__(6149);let initialCatArgs={sort:"timeCreated",limit:0,parent:"Blog"},reducer=(currentState,newState)=>({...currentState,...newState});var blog_hero={src:"/_next/static/media/blog-hero.aba3f824.webp",height:1112,width:2880,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAMAAkA4JZgCdAEO/gOOAAD++5S+NwNMP7zF3L/s7x9jLW9u5+ylEykOLB/d+VJf57hzjLoAAA==",blurWidth:8,blurHeight:3},Col=__webpack_require__(1555),Row=__webpack_require__(4051),Image=__webpack_require__(1330),motion=__webpack_require__(3838),first_blockchain={src:"/_next/static/media/first-blockchain.be391261.webp",height:599,width:590,blurDataURL:"data:image/webp;base64,UklGRt4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAABYBPZtpo7z8VvU5EHFpeJiUw6BhHsh/naiIgQaPOkQQQN2UJgbPwPC4j5vkxgL/x/bkFKfh9ZqPAlv0gBejeYAABWUDggdgAAAJACAJ0BKggACAACQDglsAJ0ugCGVfYdBaN7he0AAP5m3t0j679Cx55aC05eLOnQCoTPLS/PpvH1F6Pfc7CBttleJK1Tk8NOD/FxWz9VG++x/wcmbN/4DrfiT/Hl/Z6P/lfe8Rw3yxj/0KJr/xhxfT8a/yqAAAA=",blurWidth:8,blurHeight:8},next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),Button=__webpack_require__(5005),next_image=__webpack_require__(5675),image_default=__webpack_require__.n(next_image),business_speed={src:"/_next/static/media/business-speed.48bb1900.webp",height:1434,width:1470,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoIAAgAAkA4JbACdLoAArr/fqvgAP77few1QO+1KCyMeMMhqNkta2CTJ/8c5SzISTWBPCP/JlFdB/8FmOON+wd7rLqAAAAA",blurWidth:8,blurHeight:8},BusinessSpeed_module=__webpack_require__(7725),BusinessSpeed_module_default=__webpack_require__.n(BusinessSpeed_module);function BusinessSpeed(param){let{customClass}=param,componentClass="BusinessSpeed ".concat(BusinessSpeed_module_default().BusinessSpeed," ").concat(null!=customClass?customClass:"");return(0,jsx_runtime.jsx)("div",{className:componentClass,children:(0,jsx_runtime.jsxs)(Row.Z,{children:[(0,jsx_runtime.jsx)(Col.Z,{className:"featuredImage",lg:6,children:(0,jsx_runtime.jsx)(image_default(),{className:"w-100 h-auto",src:business_speed.src,alt:"Casper Labs",width:800,height:800})}),(0,jsx_runtime.jsxs)(Col.Z,{className:"featuredContent position-relative overflow-hidden d-flex flex-column justify-content-center",lg:6,children:[(0,jsx_runtime.jsxs)("h2",{className:"mb-4",children:["Business at the ",(0,jsx_runtime.jsx)("span",{className:"text-purple",children:"speed"})," of market"]}),(0,jsx_runtime.jsx)("p",{className:"mb-5",children:"Casper Labs is the team behind the development of the Casper Network. It provides services and support for organizations of all sizes, from enterprise to startup. Guided by open source principles, Casper Labs is committed to supporting the next wave of blockchain adoption among businesses and providing developers with a reliable and secure solution."}),(0,jsx_runtime.jsx)(link_default(),{"aria-label":"Read more",href:"/professional-services",children:(0,jsx_runtime.jsx)(Button.Z,{variant:"secondary",children:"Read more"})})]})]})})}var BadgeList=__webpack_require__(7553),customHead=__webpack_require__(3065),ContentFullScreen2=__webpack_require__(9394),Newsletter2=__webpack_require__(1476),BlogVertical=__webpack_require__(2926),BlogHorizontal=__webpack_require__(2296),ContentRight=__webpack_require__(9691),framerMotion=__webpack_require__(658);let blog_initialCatArgs={sort:"timeCreated",limit:0,parent:"Blog"};var __N_SSP=!0;function Blog(){var _webpThumbnailUrl;let{catList,category,featured,blogList,isLoading,hasNextPage,fetchNextPage,handleBadgeListClick}=function(initialCatArgs1){let{data:categories}=(0,es.useQuery)(["categories"],()=>(0,cms_api.Um)(initialCatArgs1)),catList=categories.map(category=>{var ref;return{value:category.name,_id:category._id,slug:null===(ref=category.meta)||void 0===ref?void 0:ref.slug}}),[{search,category},setState]=(0,react.useReducer)(reducer,{search:"",category:""}),{list,isLoading,hasNextPage,fetchNextPage}=function(search,slug){var ref,ref1;let result=(0,es.useInfiniteQuery)(["posts",search,slug],param=>{let{pageParam=1}=param;return(0,cms_api.Jq)({sort:"position",limit:16,page:pageParam,search,slug},initialCatArgs)},{getNextPageParam:lastPage=>!!lastPage.pages.hasNext&&lastPage.pages.next}),list=null!==(ref1=null===(ref=result.data)||void 0===ref?void 0:ref.pages.reduce((prev,page)=>prev.concat(page.data),[]))&&void 0!==ref1?ref1:[];return{...result,list}}(search,category),featured=list[0],handleBadgeListClick=item=>{var ref,ref1,ref2;setState({category:null!==(ref2=null===(ref=categories.find(x=>x._id===item))||void 0===ref?void 0:null===(ref1=ref.meta)||void 0===ref1?void 0:ref1.slug)&&void 0!==ref2?ref2:""})},handleSearchChange=search=>{setState({search})};return{search,catList,category,featured,blogList:list,isLoading,hasNextPage,fetchNextPage,handleBadgeListClick,handleSearchChange}}(blog_initialCatArgs);return(0,jsx_runtime.jsxs)("div",{className:"blogPage overflow-hidden ",children:[(0,jsx_runtime.jsx)(customHead.Z,{title:"Casper Labs | Blog",description:"Blog Description"}),(0,jsx_runtime.jsx)(motion.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,jsx_runtime.jsxs)("main",{children:[(0,jsx_runtime.jsx)(framerMotion.Z,{children:(0,jsx_runtime.jsx)(ContentFullScreen2.Z,{customClass:"blogHero",bgImage:blog_hero.src,children:(0,jsx_runtime.jsxs)("div",{className:"header-position",children:[(0,jsx_runtime.jsxs)("h1",{className:"mb-4 header-section-title",children:["The Friendly ",(0,jsx_runtime.jsx)("span",{className:"text-green",children:"Blog"})]}),(0,jsx_runtime.jsx)(Col.Z,{md:8,lg:10,children:(0,jsx_runtime.jsx)("p",{children:"Stay up to date on the latest announcements and news from Casper Labs, along with the broader Casper ecosystem."})})]})})}),(0,jsx_runtime.jsxs)(Container.Z,{children:[(0,jsx_runtime.jsx)(framerMotion.Z,{y:400,children:blogList&&blogList.length>0&&(0,jsx_runtime.jsx)("section",{className:"pt-lg-7 pb-0",children:(0,jsx_runtime.jsx)(BlogVertical.Z,{customClass:"featuredBlog",imageUrl:null!==(_webpThumbnailUrl=featured.webpThumbnailUrl)&&void 0!==_webpThumbnailUrl?_webpThumbnailUrl:featured.thumbnailUrl,halfTitle:"Featured Post",title:featured.title,datePublished:featured.timePublished,subtitle:featured.preview,linkButton:[{label:"Read more",link:"/blog/".concat(featured.meta.slug),variant:"outline"}]})})}),(0,jsx_runtime.jsx)(framerMotion.Z,{y:450,children:(0,jsx_runtime.jsx)("section",{className:"pt-6 pb-0",children:(0,jsx_runtime.jsx)(Newsletter2.Z,{col1:6,col2:6,title:"Sign up for our newsletter!",desc:"Be the first to hear about major upcoming announcements and partnerships",submitButton:{label:"Sign Up",variant:"primary"},input:{placeHolder:"Your email here"}})})}),(0,jsx_runtime.jsx)(framerMotion.Z,{y:400,children:(0,jsx_runtime.jsxs)("section",{className:"recentPosts pt-7",children:[(0,jsx_runtime.jsx)("p",{className:"h5",children:"Recent posts"}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(Row.Z,{className:"my-5 align-items-center",children:(0,jsx_runtime.jsx)(Col.Z,{md:12,className:"mb-4 mb-lg-0",children:catList&&catList.length>0&&(0,jsx_runtime.jsx)(BadgeList.Z,{list:catList,activeItem:category,onClick:item=>handleBadgeListClick(item)})})}),(0,jsx_runtime.jsx)(BlogHorizontal.Z,{list:blogList,isLoading:isLoading,hasNextPage:hasNextPage,fetchNextPage:fetchNextPage,date:!0})]})})]}),(0,jsx_runtime.jsx)(framerMotion.Z,{y:400,children:(0,jsx_runtime.jsx)(BusinessSpeed,{})}),(0,jsx_runtime.jsx)(ContentRight.Z,{customClass:"py-5 py-lg-5 firstBlockhain",colXl1:5,colXl2:7,title:"The First Blockchain Built for Enterprise Adoption",linkButton:{label:"Contact Us",link:"/contact?section=contactForm",variant:"primary"},ContentRightContent:(0,jsx_runtime.jsx)(Image.Z,{alt:"Casper",src:first_blockchain.src})})]})})]})}},2628:function(module){module.exports={overflow:"BlogHorizontal_overflow___97le",masonryWrapper:"BlogHorizontal_masonryWrapper__Qpbw4",blogItem:"BlogHorizontal_blogItem__pYuP_"}},4334:function(module){module.exports={ContentFullScreen2:"ContentRight_ContentFullScreen2__RaASE",bgImage:"ContentRight_bgImage__IMY_O"}},5973:function(module){module.exports={loaderContainer:"ListLoader_loaderContainer__hS6rF"}},7725:function(){},1330:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4184),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5697),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6792),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5893);prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool;let Image=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({bsPrefix,className,fluid,rounded,roundedCircle,thumbnail,...props},ref)=>(bsPrefix=(0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.vE)(bsPrefix,"img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{ref:ref,...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,fluid&&`${bsPrefix}-fluid`,rounded&&"rounded",roundedCircle&&"rounded-circle",thumbnail&&`${bsPrefix}-thumbnail`)})));Image.displayName="Image",Image.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},__webpack_exports__.Z=Image}},function(__webpack_require__){__webpack_require__.O(0,[568,601,675,182,280,774,888,179],function(){return __webpack_require__(__webpack_require__.s=7801)}),_N_E=__webpack_require__.O()}]);
//# sourceMappingURL=blog-68416cfed1de513c.js.map