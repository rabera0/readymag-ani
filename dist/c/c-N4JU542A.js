import{b,c as O}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-M3ZVRZTA.js";import{a as g}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7ZY2VSVL.js";import{b as m}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var K=m((N,P)=>{var D=Object.create,i=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,V=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,M=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},y=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of S(e))!L.call(t,a)&&a!==r&&i(t,a,{get:()=>e[a],enumerable:!(n=w(e,a))||n.enumerable});return t},j=(t,e,r)=>(r=t!=null?D(V(t)):{},y(e||!t||!t.__esModule?i(r,"default",{value:t,enumerable:!0}):r,t)),A=t=>y(i({},"__esModule",{value:!0}),t),s=(t,e,r)=>(M(t,typeof e!="symbol"?e+"":e,r),r),d={};R(d,{default:()=>o});P.exports=A(d);var c=j(g()),h=b(),_=O(),E="https://play.vidyard.com/embed/v4.js",C="VidyardV4",x="onVidyardAPI",o=class extends c.Component{constructor(){super(...arguments),s(this,"callPlayer",h.callPlayer),s(this,"mute",()=>{this.setVolume(0)}),s(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),s(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:r,config:n,onError:a,onDuration:v}=this.props,l=e&&e.match(_.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,h.getSDK)(E,C,x).then(p=>{this.container&&(p.api.addReadyListener((u,f)=>{this.player||(this.player=f,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),p.api.renderPlayer({uuid:l,container:this.container,autoplay:r?1:0,...n.options}),p.api.getPlayerMetadata(l).then(u=>{this.duration=u.length_in_seconds,v(u.length_in_seconds)}))},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props,r={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:r},c.default.createElement("div",{ref:this.ref}))}};s(o,"displayName","Vidyard");s(o,"canPlay",_.canPlay.vidyard)});export default K();
