//tealium universal tag - utag.202 ut4.0.202303082209, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"//cdn.id5-sync.com/api/1.0/id5-api.js"
};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){(function(){let ids=[];let dl=_dl?.ddo?.page?.category?.ibm
if(!!dl){utDefinitions={ut10:{value:dl?.ut10,desc:dl?.ut10Name},ut15:{value:dl?.ut15,desc:dl?.ut15Name},ut17:{value:dl?.ut17,desc:dl?.ut17Name},ut20:{value:dl?.ut20,desc:dl?.ut20Name},ut30:{value:dl?.ut30,desc:dl?.ut30Name}}
const addID5segmentID=((utDefinitions)=>{for(let key in utDefinitions){let utValue=utDefinitions[key].value;let utDesc=utDefinitions[key].desc;if(utValue&&utDesc){utValue=utValue.toLowerCase().replace(/ /g,'_').replace(/[^_\w ]/g,'');utDesc=utDesc.toLowerCase().replace(/ /g,'_').replace(/[^_\w ]/g,'');ids.push(`id5-974-ut-${utValue}-${utDesc}`)}}})
const addID5nluKeywords=((keywords)=>{if(keywords&&keywords.length>0){keywords.forEach((item,index)=>{let keyword=item.name;let relevance=item.relevance;let updatedKeyword='';updatedKeyword=keyword.toLowerCase().replace(/ /g,'_').replace(/[^_\w ]/g,'');if(relevance&&relevance>0.5){ids.push(`id5-974-nlu-${updatedKeyword}`);}})}})
addID5segmentID(utDefinitions)
addID5nluKeywords(dl?.nluKeywords)}
var id5Status=ID5.init({partnerId:974,cmpApi:'static',consentData:{allowedVendors:['131','79']},segments:[{destination:'79',ids:ids}],storageExpirationDays:30});})();};u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_202'});}};utag.o[loader].loader.LOAD(id);})("202","ibm.web");}catch(error){utag.DB(error);}