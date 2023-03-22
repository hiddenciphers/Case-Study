
var InfiniteCarousel=function(a,b){this.root=a;this.container=null;this.root_width=null;this.items=null;this.item_width=null;this.nbr_items_visible=null;this.nbr_items=null;this.current_item=null;this.translate_initial=null;
this.is_animate=false;this.mobile_limit=b?b.mobileLimit||430:430;this.is_mobile=window.screen.width<=this.mobile_limit;this.arrow_right=null;this.arrow_left=null;this.duration=b?b.duration||300:300;this.behavior=b?b.behavior||"manual":"manual";
this.step_duration=b?b.stepDuration||5000:5000;this.max_items_visible=b?b.maxItemsVisible||null:null;this.interval_function=null;this.auto_function=null;this.init()};InfiniteCarousel.prototype.init=function(){var a=this;
if(a.root=="undefined"||a.root==null){return}a.items=a.root.children;a.nbr_items=a.items.length;a.createInfiniteCarousel();a.changeWidth();a.createArrow();a.refresh();window.addEventListener("resize",a.refresh.bind(a));
a.container.addEventListener("scroll",a.onScroll.bind(a),{passive:true});if(a.behavior==="auto"&&!a.is_mobile){a.interval_function=function(){configuration.findUnique("#rl_aR").click()};a.auto_function=window.setInterval(a.interval_function,a.step_duration)
}};InfiniteCarousel.prototype.changeWidth=function(){var a=this;var b=a.getMaxWidth();configuration.arrayFrom(a.items).forEach(function(c){c.style.width=b+"px"})};InfiniteCarousel.prototype.getMaxWidth=function(){var a=this;
var b=0;configuration.arrayFrom(a.items).forEach(function(d){var c=d.offsetWidth;b=c>b?c:b});return b};InfiniteCarousel.prototype.refresh=function(){var a=this;a.root_width=a.root.offsetWidth;if(a.is_mobile){a.item_width=a.calculWidth(a.items[0]);
return}var b=a.items[0].offsetWidth;a.nbr_items_visible=Math.floor(a.root_width/b);var e=a.root_width%b;if(a.max_items_visible&&a.nbr_items_visible>a.max_items_visible){var c=a.nbr_items_visible-a.max_items_visible;
e+=c*b;a.nbr_items_visible=a.max_items_visible}var d=e/(a.nbr_items_visible*2);configuration.arrayFrom(a.items).forEach(function(f){f.style.margin="0 "+d+"px 0 "+d+"px"});a.item_width=a.calculWidth(a.items[0]);
a.current_item=a.current_item||a.nbr_items;a.translate_initial=-(a.item_width*a.current_item);a.container.style.transform="translateX("+a.translate_initial+"px)"};InfiniteCarousel.prototype.onScroll=function(){var a=this;
var b=a.container.scrollLeft;this.changeArrowDisplay(this.arrow_right,(b+a.root_width!=a.item_width*a.nbr_items)?"block":"none");this.changeArrowDisplay(this.arrow_left,(b!=0)?"block":"none")};InfiniteCarousel.prototype.createInfiniteCarousel=function(){var b=this;
b.container=document.createElement("div");var a=[];b.root.classList.add("rootStyle");b.container.classList.add("hooks");b.container.classList.add("containerStyle");if(b.is_mobile){a=configuration.arrayFrom(b.items);
a.forEach(function(h){h.addEventListener("click",function(){sendGaEvent("RingLinks",h.getAttribute("data-vars-event-action"),h.getAttribute("data-vars-event-label"))})})}else{for(var d=0;d<3;d++){for(var g=0,e=b.items.length;
g<e;g++){if(b.max_items_visible&&d==2&&g==b.max_items_visible){break}var f=b.items[g].cloneNode(true);f.addEventListener("click",function(){sendGaEvent("RingLinks",f.getAttribute("data-vars-event-action"),f.getAttribute("data-vars-event-label"))
});a.push(f)}}}b.root.innerHTML="";var c=document.createDocumentFragment();a.forEach(function(h){h.classList.add("itemStyle");c.appendChild(h)});b.container.appendChild(c);b.root.appendChild(b.container);
b.items=b.container.children};InfiniteCarousel.prototype.calculWidth=function(b){var d=window.getComputedStyle(b);var c=b.offsetWidth;var e=parseFloat(d.marginLeft)+parseFloat(d.marginRight);var f=parseFloat(d.paddingLeft)+parseFloat(d.paddingRight);
var a=parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth);return c+e-f+a};InfiniteCarousel.prototype.animate=function(h){var c=this;h.stopPropagation();var d=h.target.id=="rl_aR"||h.target.id=="rl_iaR";
if(c.is_mobile){var b=c.container.scrollLeft;var a=d?b+150:b-150;c.container.scrollTo({top:0,left:a,behavior:"smooth"});return}if(c.is_animate){return}c.is_animate=true;if(c.behavior==="auto"&&h.clientX!=0&&h.clientY!=0&&c.interval_function!=null){window.clearInterval(c.auto_function);
c.auto_function=window.setInterval(c.interval_function,c.step_duration)}var g=c.getTranslatePosition(c.container);var i=d?g-c.item_width:g+c.item_width;var f=c.container.style;f.transitionProperty="transform";
f.transitionDuration=c.duration+"ms";f.transform="translateX("+i+"px)";window.setTimeout(function(){f.transitionProperty="";f.transitionDuration="";c.current_item+=d?1:-1;if(c.current_item==c.nbr_items*2||c.current_item==0){f.transform="translateX("+c.translate_initial+"px)";
c.current_item=c.nbr_items}c.is_animate=false},c.duration)};InfiniteCarousel.prototype.getTranslatePosition=function(b){var c=window.getComputedStyle(b);var a;if(window.WebKitCSSMatrix){a=new WebKitCSSMatrix(c.webkitTransform)
}else{if(window.MSCSSMatrix){a=new MSCSSMatrix(c.transform)}}return a.m41};InfiniteCarousel.prototype.createArrow=function(){var a=this;var c=[];var e=a.setArrows(false);var d=a.setArrows(true);c.push(e[0],e[1],d[0],d[1]);
c.forEach(function(f){f.addEventListener("click",a.animate.bind(a))});a.arrow_right=d[0];a.arrow_left=e[0];var b=document.createDocumentFragment();b.appendChild(d[0]);b.appendChild(e[0]);a.root.appendChild(b)
};InfiniteCarousel.prototype.setArrows=function(h){var e=this;var g=document.createElement("div");var f=document.createElement("i");var a=g.style;var b=h?"rl_aR":"rl_aL";var d=h?"rl_iaR":"rl_iaL";var c=h?"icon-caret-right":"icon-caret-left";
var i=[];g.classList.add("carousel-arrow");g.setAttribute("id",b);if(h){a.right="15px"}else{a.left="15px";if(e.is_mobile){a.display="none"}}g.classList.add("arrowStyle");f.classList.add(c);f.setAttribute("id",d);
g.appendChild(f);i.push(g,f);return i};InfiniteCarousel.prototype.changeArrowDisplay=function(c,b){var a=this;c.style.display=b};function initHooks(){var e=configuration.findUnique("#h-btn"),d=configuration.findUnique("#ring-links-carousel"),c=configuration.findUnique(".search-input");
var g=new InfiniteCarousel(d,{mobileLimit:761,maxItemsVisible:3});var a=function(){if(e.length<=0){return}var h=configuration.getCookie("ringLinksOpen");e.checked=window.screen.height>700&&((h)!=null?JSON.parse(h):true)
};var f=function(){if(e.length<=0){return}e.addEventListener("change",function(){var j=new Date();var i=7;j.setTime(j.getTime()+(i*24*60*60*1000));configuration.setCookie("ringLinksOpen",e.checked,{expires:j})
});if(window.screen.height<=700){a()}else{var h=configuration.getCookie("ringLinksOpen");e.checked=(h)!=null?JSON.parse(h):true}};f();window.addEventListener("resize",a);if(c!=null&&configuration.isMobileDevice()){var b=false;
c.addEventListener("focus",function(){if(e.checked){configuration.triggerEvent(e,"click","MouseEvents");b=true}});c.addEventListener("blur",function(){if(b){configuration.triggerEvent(e,"click","MouseEvents");
b=false}})}}document.addEventListener("readystatechange",function(){if(document.readyState=="complete"){initHooks();lazyLoadingLogic()}});