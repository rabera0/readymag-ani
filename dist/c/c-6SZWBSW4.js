import{b as ye}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-AIA7QCQW.js";import{d as ge,e as Ce,f as Ee,g as be,h as i,i as m,j as H,l as N,m as U,n as we}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DRQLMCLH.js";import{c as Le}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LO6O52EN.js";import{a as ae,d as fe}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-3GOT4LKE.js";import{a as ne,g as re,h as ve}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-UMLFVHKK.js";import{v as he}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6KVCTNLD.js";import{c as ee}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LA3FLWVR.js";import{C as z,E as te}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import{a as F}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7ZY2VSVL.js";import{b as W,c as pe}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DQFZXCVV.js";import{a as k,d as V,f as E}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var D=k(()=>{"use strict";we();Ce();be();Ee();ge();Le()});function xe(){var t=(0,p.useRef)(!0);return t.current?(t.current=!1,!0):t.current}var p,ke,u,Me,J,j,B=k(()=>{"use strict";p=V(F(),1);D();ke=function(t,o){var e=xe();(0,p.useEffect)(function(){if(!e)return t()},o)},u=ke,Me=(0,p.createContext)(null),J=Me.Provider,j=(t,o,e)=>{let[r,l]=(0,p.useState)(()=>e());return(0,p.useEffect)(()=>{let v=t(()=>{let f=o();l(f)});return()=>{v()}},[t]),r}});var M,ie=k(()=>{"use strict";B();D();M=V(F(),1)});function O(t,o){let e=(0,a.useCallback)(()=>o(t.getState()),[o,t]),r=(0,a.useCallback)(l=>t.state.subscribe(l),[t]);return j(r,e,()=>o(N))}var a,Se,De,oe,G,le=k(()=>{"use strict";B();D();a=V(F(),1),Se=typeof window>"u"?a.useEffect:a.useLayoutEffect,De=(t,o,e)=>{let[r]=(0,a.useState)(()=>new U(t,o.current,e)),l=(0,a.useRef)(!1);return Se(()=>{async function v(){!l.current&&o.current&&(l.current=!0,r.setContainer(o.current),await r.load())}return v(),()=>{l.current&&r.destroy()}},[r]),r};oe={animation:{position:"relative",width:"100%",height:"100%"},animationWithControls:{position:"relative"}},G=a.default.forwardRef(({onEvent:t,activeAnimationId:o,autoplay:e,background:r="transparent",direction:l,intermission:v,loop:f,playMode:c,hover:g,speed:P,renderer:Z="svg",rendererSettings:_={},src:x,className:R="",testId:C,children:L,defaultTheme:b,light:w=!1,worker:S=!1,activeStateId:s,lottieRef:T,...I},ce)=>{let Y=(0,a.useRef)(null),d=De(x,Y,{renderer:Z,activeAnimationId:o,rendererSettings:{clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0,..._},hover:g,loop:f,direction:l,speed:P,intermission:v,background:r,playMode:c,autoplay:g?!1:e,testId:C,defaultTheme:b,light:w,worker:S,activeStateId:s}),n=(0,a.useRef)(d);n.current=d,a.default.useImperativeHandle(ce,()=>d,[d]),a.default.useImperativeHandle(T,()=>d,[d]);let A=O(d,y=>y.currentState),q=O(d,y=>y.frame),me=O(d,y=>y.seeker),de=O(d,y=>y.currentAnimationId);return u(()=>{typeof f>"u"?n.current.revertToManifestValues(["loop"]):n.current.setLoop(f)},[f]),u(()=>{[m.Initial,m.Loading].includes(A)||(typeof e>"u"?n.current.revertToManifestValues(["autoplay"]):n.current.setAutoplay(e))},[e]),u(()=>{typeof l>"u"?n.current.revertToManifestValues(["direction"]):n.current.setDirection(l)},[l]),u(()=>{typeof P>"u"?n.current.revertToManifestValues(["speed"]):n.current.setSpeed(P)},[P]),u(()=>{typeof c>"u"?n.current.revertToManifestValues(["playMode"]):n.current.setMode(c)},[c]),u(()=>{typeof g>"u"?n.current.revertToManifestValues(["hover"]):n.current.setHover(g)},[g]),u(()=>{typeof r>"u"?n.current.setBackground("transparent"):n.current.setBackground(r)},[r]),u(()=>{typeof v>"u"?n.current.revertToManifestValues(["intermission"]):n.current.setIntermission(v)},[v]),u(()=>{typeof b>"u"||!b?n.current.revertToManifestValues(["defaultTheme"]):n.current.setDefaultTheme(b)},[b]),u(()=>{o&&n.current.play(o)},[o]),u(()=>(typeof s<"u"&&n.current.enterInteractiveMode(s),()=>{n.current.exitInteractiveMode()}),[s]),u(()=>{typeof x<"u"&&n.current.updateSrc(x)},[x]),(0,a.useEffect)(()=>{let y=()=>{t?.(i.Ready)},K=()=>{t?.(i.DataReady)},Q=()=>{t?.(i.DataFail)},X=()=>{n.current.currentState!==m.Playing&&t?.(i.Complete)},$=()=>{t?.(i.LoopComplete)};return n.current.addEventListener("DOMLoaded",y),n.current.addEventListener("data_ready",K),n.current.addEventListener("data_failed",Q),n.current.addEventListener("complete",X),n.current.addEventListener("loopComplete",$),()=>{n.current.removeEventListener("DOMLoaded",y),n.current.removeEventListener("data_ready",K),n.current.removeEventListener("data_failed",Q),n.current.removeEventListener("complete",X),n.current.removeEventListener("loopComplete",$)}},[]),(0,a.useEffect)(()=>{switch(A){case m.Stopped:t?.(i.Stop);break;case m.Paused:t?.(i.Pause);break;case m.Playing:t?.(i.Play);break;case m.Frozen:t?.(i.Freeze);break;case m.Error:t?.(i.Error);break}},[A]),(0,a.useEffect)(()=>{t?.(i.Frame,{frame:q,seeker:me})},[q]),a.default.createElement(J,{value:d},a.default.createElement("div",{className:`dotlottie-container main ${L?"controls":""} ${R}`,lang:"en",...C&&{"data-testid":C},...I},a.default.createElement("div",{ref:Y,"data-name":`${de}`,role:"figure",className:`animation ${L?"controls":""}`,style:L?oe.animationWithControls:oe.animation,...C&&{"data-testid":"animation"}},A===m.Error&&a.default.createElement("div",{...C&&{"data-testid":"error"},className:"error"},"\u26A0\uFE0F")),L))})});var se=k(()=>{"use strict";ie();le();B();D()});function Ie({uri:t,onReady:o,player:e,lottieSizes:r}){let[l,v]=(0,h.useState)(!1),f=(0,h.useRef)(null),c=re(e?.state||{}),g=(0,h.useRef)(null),[P,Z]=(0,h.useState)("100%"),[_,x]=(0,h.useState)("100%"),[R,C]=(0,h.useState)(!1),L=t?W.content_cdn_origin?`https://${W.content_cdn_origin}/${t}`:t:"";function b(w,S){w===i.Ready&&(f.current&&e?.setPlayer(f.current),v(!0),o?.()),e?.triggerInnerEvent(w,S)}return(0,h.useEffect)(()=>{let w=new ResizeObserver(S=>{let s=S[0].contentRect;if(!s||!s.width||!s.height||!c.animationWidth||!c.animationHeight)return;let T=c.animationWidth/c.animationHeight,I=s.width/s.height;s.height<=Te?C(!0):R&&C(!1),Z(T<I?"100%":`${s.width}px`),x(T<I?"100%":`${s.height}px`),r&&r({width:s.width,height:s.height})});return g.current&&w.observe(g.current),()=>{w.disconnect()}},[R,c.animationHeight,c.animationWidth,r]),(0,h.useEffect)(()=>()=>e?.destroy(),[e]),z(ae,{ref:g,width:"100%",height:"100%",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",css:R?ee`
              div {
                display: flex;
              }
            `:void 0,children:L&&c.isMounted?z(G,{ref:f,src:L,onEvent:b,style:{visibility:l?"inherit":"hidden",width:P,height:_,display:"flex"}}):null})}var h,Te,ue,Pt,Ae=k(()=>{"use strict";se();h=V(F());pe();ye();ve();fe();he();te();Te=14,ue=class extends EventTarget{constructor({lottiePlayer:e}={}){super();E(this,"innerPlayer");E(this,"loop",!1);E(this,"loopCount");E(this,"direction",1);E(this,"speed",1);E(this,"range");E(this,"state",ne({currentFrame:0,isPlaying:!1,totalFrames:0,frameRate:0,isPaused:!1,isComplete:!1,isMounted:!0}));e&&this.setPlayer(e)}play(e={}){if(this.innerPlayer){if(this.state.isPaused){this.resume();return}this.setPlaybackOptions(e),this.innerPlayer.play(),this.state.isComplete=!1,this.state.isPlaying=!0}}setPlaybackOptions(e={}){this.innerPlayer&&("loop"in e&&(this.loop=e.loop||!1),e.direction&&(this.direction=e.direction),e.speed&&(this.speed=e.speed),"loopCount"in e&&(this.loopCount=e.loopCount,this.direction===-1&&e.loopCount&&(this.loopCount=e.loopCount-1,e.loopCount===1&&(this.loop=!1))),this.innerPlayer.setLoop(this.loop&&this.loopCount?this.loopCount:!!this.loop),!this.loop||this.loop==="loop"?this.innerPlayer.setMode(H.Normal):this.loop==="swing"&&this.innerPlayer.setMode(H.Bounce),this.innerPlayer.setDirection(this.direction),this.innerPlayer.setSpeed(this.speed),e.range&&this.setRange(e.range))}setRange(e){this.range?.[0]===e?.[0]&&this.range?.[1]===e?.[1]||(this.range=e,this.range?(this.innerPlayer?.playSegments(this.range,!0),this.seek(0),this.state.isPlaying||this.stop()):this.innerPlayer?.resetSegments(!0))}stop(){this.innerPlayer?.stop(),this.state.isPaused=!1,this.state.isPlaying=!1}pause(){this.state.isPlaying&&(this.innerPlayer?.pause(),this.state.isPaused=!0,this.state.isPlaying=!1)}resume(){this.state.isPaused&&(this.innerPlayer?.play(),this.state.isComplete=!1,this.state.isPlaying=!0,this.state.isPaused=!1)}toggle(){this.state.isPlaying?this.pause():this.play()}seek(e){let r=Math.max(Math.min(e,this.state.totalFrames-1),0);this.innerPlayer?.seek(r)}setPlayer(e){this.innerPlayer=e,this.state.totalFrames=this.innerPlayer.totalFrames||0}triggerInnerEvent(e,r){this.handleInnerEvent(e,r)}handleInnerEvent(e,r){let l=this.innerPlayer?.getAnimationInstance();switch(e){case i.Complete:this.state.isComplete=!0,this.dispatchEvent(new Event("Complete"));break;case i.LoopComplete:this.dispatchEvent(new Event("LoopComplete"));break;case i.Stop:case i.Pause:this.state.isPlaying=!1;break;case i.Frame:this.state.currentFrame=Math.floor(r.frame);break;case i.Ready:this.state.totalFrames=this.innerPlayer?.totalFrames||0,this.state.frameRate=l?.frameRate||0,this.state.animationWidth=l?.animationData.w,this.state.animationHeight=l?.animationData.h,this.dispatchEvent(new Event("Ready"));break}}remount(){this.state.isMounted=!1,setTimeout(()=>{this.state.isMounted=!0},20)}destroy(){this.innerPlayer?.destroy()}};Pt=Ie});export{ue as a,Pt as b,Ae as c};
