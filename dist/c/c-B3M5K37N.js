import{a as i,b as u}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PSGGD2IQ.js";import{a as h}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";function p(r,t){let e=r.split(".");return e.length>1?(e[e.length-2]+="_"+t,e.join(".")):r+"_"+t}function g(r){let t=r.split(".");if(t.length>1){let e=t[t.length-2].split("_");if(e.length>1&&!isNaN(Number(e[e.length-1]))){e.pop();let n=e.join("_");return t[t.length-2]=n,t.join(".")}}return r}function m(r){let t=r.split("."),e;return t.length>1&&(e=t[t.length-2].split("_")),e&&Array.isArray(e)&&e.length>1?e=e[e.length-1]:e=void 0,e}function S(r,t="default"){let e=r*(window.devicePixelRatio>1?2:1),n=Object.values(l[t])||[];return n.indexOf(e)===-1&&(e=n.filter(s=>s>e)[0]),n.indexOf(e)===-1?(console.error("Unknown screenshot size",r,"for viewport",t),o):e}function d(r,t="default"){return l[t]?.[r]||o}var o,l,f,w,a=h(()=>{"use strict";u();o=512,l={default:{quarter:256,halfCover:608,half:512,cover:608,full:1024},phone_portrait:{half:160,full:320},tablet_portrait:{quarter:192,half:384,full:768}};f={default:{width:1024,height:672},phone_portrait:{width:320,height:568},tablet_portrait:{width:768,height:926}},w=(r,t)=>{let e=f[r||"default"],n=t?i.getScaleToFit(e,t):1;return{width:e.width*n,height:e.height*n}}});export{p as a,g as b,m as c,S as d,d as e,f,w as g,a as h};
