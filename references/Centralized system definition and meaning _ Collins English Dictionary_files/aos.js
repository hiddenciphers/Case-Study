
var initialStickyRightcolPosition=null;var stickyNextSlotMargin=600;var leftslotId="ad_leftslot_a";var rightcolAboveStickySelector="#rightcol-above-sticky";var rightcolStickyId="rightcol-sticky";var secondRightcolStickyId="rightcol-sticky2";
var bodyPaddingBottom=0;var slotMarginTop=10;var slotMarginBottom=13;var stickyHeaderHeight=0;var topslotContainerHeight=0;window.addEventListener("load",load);function load(){var b=document.querySelector(".topslot_container");
topslotContainerHeight=b!=null?b.offsetHeight:0;var a=document.querySelector("header.sticky");stickyHeaderHeight=a!=null?a.offsetHeight:0;bodyPaddingBottom=document.querySelector("footer").offsetHeight;
adjustStickySkyscraper();window.addEventListener("scroll",function(){adjustAllStickySkyscrapers()},{passive:true})}addDOMObserver(rightcolAboveStickySelector,calculateInitialPositionForStickyRightcol);
function addDOMObserver(b,c){var a=document.querySelector(b);if(a!=null){window.MutationObserver&&(new MutationObserver(c)).observe(a,{attributes:true,childList:true,subtree:true,characterData:true})}}function calculateInitialPositionForStickyRightcol(){var a=document.querySelector(rightcolAboveStickySelector);
if(a==null){return}initialStickyRightcolPosition=a.offsetHeight+20}function adjustAllStickySkyscrapers(){adjustStickySkyscraper();if(initialStickyRightcolPosition!=null){var a=document.getElementById(rightcolStickyId);
var c=document.getElementById(secondRightcolStickyId);var b=c?c.getElementsByTagName("iframe")[0]:null;if(b){adjustStickySkyscraper(secondRightcolStickyId,initialStickyRightcolPosition+a.offsetHeight+stickyNextSlotMargin);
adjustStickySkyscraper(rightcolStickyId,initialStickyRightcolPosition,c)}else{adjustStickySkyscraper(rightcolStickyId,initialStickyRightcolPosition)}}}function adjustStickySkyscraper(c,a,n){if(iaw.isMobileMode()||iaw.hasSeltestCookie()){return
}if(c==null){c=leftslotId}var j=document.getElementById(c);if(j==null){return}var p=j.offsetHeight;var k=slotMarginTop;if(document.querySelector("body.headerMinimized")==null){k+=stickyHeaderHeight}var f=document.querySelector(".menuDd");
var e=f!=null?f.offsetHeight:0;k+=e;var m=document.body.offsetHeight;var i=window.pageYOffset;var d=30;var b=stickyHeaderHeight+e+topslotContainerHeight+d;if(a!=null){b+=a}if(k<b-i+slotMarginTop){k=b-i+slotMarginTop
}if(k>m-i-p-slotMarginBottom-bodyPaddingBottom){k=m-i-p-slotMarginBottom-bodyPaddingBottom}if(n){const o=j.getBoundingClientRect();const h=n.getBoundingClientRect();const l=o.bottom>=h.top;const g=f&&o.top<f.offsetTop;
if(l||g){k=h.top-p}}j.style.position="fixed";j.style.top=k+"px";j.style.bottom="auto"};