import{a as r}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";function e(){return!!!(typeof window<"u"&&window.document)}function g(){return e()?{pathname:"",search:""}:window.location}var t=r(()=>{"use strict"});function s(){return e()?!1:window.screen?window.matchMedia?window.matchMedia("(orientation: portrait)")?.matches:window.orientation===0?!0:window.orientation===90||window.orientation===-90?!1:window.innerWidth<window.innerHeight:window.innerWidth<window.innerHeight}function f(){return e()?!1:window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function i(){return e()?!1:!!window.navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|playbook|iemobile|windows phone|kindle|silk|opera mini|opera mobi/i)}function u(){return e()?!1:!!window.navigator.userAgent.toLowerCase().match(/ipad/i)}function n(){return e()?!1:window.matchMedia?window.matchMedia("(pointer: coarse)")?.matches:!1}function a(){return n()&&!i()}function l(){return!i()&&!a()}function w(){return e()?!1:window.navigator.userAgent.indexOf("Safari")>-1&&window.navigator.userAgent.indexOf("Chrome")<=-1}function c(){return e()?!1:!!window.navigator.userAgent.match(/chrome|chromium/i)}function d(){return e()?!1:!!(n()&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent))}function m(){return o.isChrome()?"chrome":o.isFirefox()?"firefox":o.isSafari()?"safari":"chrome"}function b(){return o.isMobile()?"phone":o.isTouch()?"tablet":"desktop"}var o,h=r(()=>{"use strict";t();o={isFirefox:f,isMobile:i,isIpad:u,isTablet:a,isDesktop:l,isTouch:n,isPortrait:s,isSafari:w,isChrome:c,isIOS:d,browserName:m,deviceTypeName:b}});export{e as a,g as b,t as c,o as d,h as e};
