const htmlLang=document.getElementsByTagName('html')[0].getAttribute('lang');if(htmlLang==='ru'||htmlLang==='ru-RU'){WebFontConfig={google:{families:['Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp','Roboto:400,500,700&display=swap']}}}else{WebFontConfig={google:{families:['Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp','Muli:400,600,700,800,900&display=swap']}}}
document.addEventListener('DOMContentLoaded',function(){var wf=document.createElement('script');wf.src=('https:'===document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';wf.type='text/javascript';wf.async=!0;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf,s)})