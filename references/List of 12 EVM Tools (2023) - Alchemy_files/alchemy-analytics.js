// Load Heap Analytics
const loadHeapAnalytics = () => {
	window.heap=window.heap||[],heap.load=function(e,z,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");z=z||(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";a.type="text/javascript",a.async=!0,a.src=z;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
	let appId = "3664712754";
	if (window.origin && window.origin.includes('alchemy.com')) {
		appId = "4099325469";
	}
	heap.load(appId, "https://static.alchemyapi.io/scripts/anayltics/heap-analytics-script.js", {trackingServer: "https://heapdata.alchemy.com"}); 	
};

loadHeapAnalytics();