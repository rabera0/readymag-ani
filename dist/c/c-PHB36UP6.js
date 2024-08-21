import{b as p,c as z,d as y,f as P,h as M}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-TXHCO4ES.js";import{a as r,b as $}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-XFMJR2GD.js";import{e as f,g as A}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PTOZSKV6.js";import{a as b}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CXA7FWYL.js";import{a as U}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VMLLFM4X.js";import{C as m,E as x}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import{a as L}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-H3ZPPNIG.js";import{b as k}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import{a as S,d,f as h}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var l,v,u,T,w,I=S(()=>{"use strict";l=d(L()),v=d(b()),u=d(k());$();T=v.default.View.extend({pictures:[],domPictures:[],preloadPictures:[],currentSlide:null,nextSlide:null,selectedSlide:null,defaultDelay:4,defaultCrossfade:.5,isAnimationRunning:!1,cursor:0,rendered:!1,lastSlideshowAnimationStart:null,initialize:function(i){this.initSlideshowData(i.data),this.$container=i.container,this.$preloadContainer=i.preloadContainer},initSlideshowData(i){this.pictures=i&&i.pictures?u.default.sortBy(i.pictures,"num"):[],this.delay=i&&typeof i.delay=="number"?i.delay:this.defaultDelay,this.crossfade=i&&typeof i.crossfade=="number"?i.crossfade:this.defaultCrossfade,this.name=i&&i.name?i.name:"slideshow"+new Date().getTime(),this.domPictures=[],this.preloadPictures=[],this.currentSlide=null,this.nextSlide=null,this.selectedSlide=null,this.isAnimationRunning=!1,this.cursor=0},render:function(i){RM.screenshot?this.pictures.length?this.addPicture(this.pictures[0]):this.trigger("loaded"):this.loadPictures(),!this.isAnimationRunning&&!i&&this.startAnimationLoop(),this.rendered=!0},rerender:function(i){this.stopAnimationLoop(),this.initSlideshowData(i),this.removePictures(),this.render(!0)},runAnimation:function(){this.isAnimationRunning||(this.rendered?this.startAnimationLoop():this.render())},setDelay:function(i){if(i<this.crossfade){console.error("delay mast be longer than crossfade");return}this.delay=i},setCrossfade:function(i){if(i>this.delay){console.error("delay mast be longer than crossfade");return}this.crossfade=i,this.updateCrossfade()},updateCrossfade:function(){this.domPictures.forEach(function(i){i.css({"transition-duration":this.crossfade+"s"})}.bind(this))},updatePicture:function(i){let t=u.default.findIndex(this.pictures,function(e){return e.uuid===i.uuid});this.pictures[t]=i,this.domPictures[t].css({"background-image":`url("${this.getPoorUrl(i)}")`}),r.useLqipUrl(i)&&this.domPictures[t].addClass("lqip"),this.loadFullSizePicture(i)},updatePicturePosition:function(i){this.destroy(),this.initSlideshowData({pictures:i,delay:this.delay,crossfade:this.crossfade}),this.render()},addPicture:function(i){let t=this.domPictures.length===this.cursor+1,e=this.domPictures.length===0?2:t?1:0,s=this.domPictures.length===0||t?"block":"none";this.pictures.push(i),this.domPictures.push((0,l.default)("<div>").addClass(`slideshow-image fade-in${r.useLqipUrl(i)?" lqip":""}`).css({"z-index":e,display:s,"background-image":`url("${this.getPoorUrl(i)}")`,"transition-property":"opacity","transition-duration":this.crossfade+"s","transition-timing-function":"linear"}).appendTo(this.$container)),this.loadFullSizePicture(i)},selectSlide:function(i){if(!i)return;let t=this.pictures.findIndex(function(s){return s.uuid===i});if(t===-1){console.warn("Did't find slide for uuid:",i);return}if(!this.currentSlide||this.selectedSlide===this.domPictures[t]||(this.isAnimationRunning&&this.stopAnimationLoop(),this.currentSlide===this.domPictures[t]))return;let e=this.cursor;this.nextSlide&&this.nextSlide.css({"z-index":0,display:"none"}),this.domPictures[t].css({"z-index":1,display:"block"}),this.currentSlide=this.domPictures[t],this.cursor=t,this.selectedSlide=this.domPictures[t],this.domPictures.length>1?this.domPictures[t+1]?this.nextSlide=this.domPictures[t+1]:this.nextSlide=this.domPictures[0]:this.nextSlide=null,this.domPictures[e].css({"transition-duration":"0.3s"}),this.domPictures[e].removeClass("fade-in").addClass("fade-out"),setTimeout(function(){this.domPictures[e].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.currentSlide.css({"z-index":2}),this.nextSlide&&this.nextSlide.css({"z-index":1,display:"block"})}.bind(this),310)},removePictures:function(){this.domPictures=[],this.preloadPictures=[],this.$container.empty(),this.$preloadContainer.empty()},removePicture:function(i){if(!i)return;let t=this.pictures.findIndex(function(e){return e.uuid===i});if(this.domPictures[t]===this.currentSlide&&this.domPictures.length!==1&&this.selectedSlide!==this.domPictures[t]){let e=this.crossfade*1e3+this.delay*1e3+50;e=this.lastSlideshowAnimationStart?Math.abs(e-(new Date().getTime()-this.lastSlideshowAnimationStart.getTime())):e,setTimeout(function(){this.cursor&&(this.cursor-=1);let o=this.pictures.findIndex(function(n){return n.uuid===i});this.domPictures[o].remove(),this.domPictures.splice(o,1),this.pictures.splice(o,1)}.bind(this),e)}else{if(this.domPictures[t]===this.nextSlide&&this.domPictures.length!==1&&(this.domPictures[t+1]?(this.domPictures[t+1].css({"z-index":1,display:"block"}),this.nextSlide=this.domPictures[t+1]):(this.domPictures[0].css({"z-index":1,display:"block"}),this.nextSlide=this.domPictures[0])),this.selectedSlide===this.domPictures[t]&&this.nextSlide){let e=this.domPictures.findIndex(function(s){return s===this.nextSlide}.bind(this));this.currentSlide=this.domPictures[e],this.cursor=e,this.selectedSlide=null,this.currentSlide.css({"z-index":2}),this.domPictures.length>2?this.domPictures[this.cursor+1]?this.nextSlide=this.domPictures[this.cursor+1]:this.nextSlide=this.domPictures[0]:this.nextSlide=null,this.nextSlide&&this.nextSlide.css({"z-index":1,display:"block"}),setTimeout(function(){this.startAnimationLoop()}.bind(this),0)}this.domPictures[t].remove(),this.domPictures.splice(t,1),this.pictures.splice(t,1)}},getThumbnailUrl:function(i){return i?r.useLambdaUrl(i)?r.getThumbnailUrl(i):i.thumbUrl:""},getPictureUrl:function(i){return r.useLambdaUrl(i)||r.useLambdaUrlOldProjects(i,"background")?r.getLambdaUrl(i):i.url},getPoorUrl:function(i){return r.useLqipUrl(i)?r.getLqipUrl(i):i.poorUrl},loadPictures:function(){this.pictures.forEach(function(i,t){this.domPictures[t]=(0,l.default)("<div>").addClass(`slideshow-image fade-in${r.useLqipUrl(i)?" lqip":""}`).css({"z-index":t===0?2:t===1?1:0,display:t===0||t===1?"block":"none","background-image":`url("${this.getPoorUrl(i)}")`,"transition-property":"opacity","transition-duration":this.crossfade+"s","transition-timing-function":"linear"}).appendTo(this.$container)}.bind(this)),this.loadFullSizePictures()},loadFullSizePictures:function(){this.preloadPictures=[],this.pictures.forEach(function(e,s){let o=this.getPictureUrl(e);this.preloadPictures[s]=(0,l.default)("<img>").addClass("preload-slideshow-image").appendTo(this.$preloadContainer).attr("src",o).on("load",i.bind(this,o,s)).on("error",t.bind(this,s))}.bind(this));function i(e,s){this.domPictures[s].css({"background-image":`url("${e}")`}),this.domPictures[s].removeClass("lqip"),this.preloadPictures[s].remove(),s===0&&this.trigger("loaded")}function t(e,s){this.domPictures[e].removeClass("lqip"),e===0&&this.trigger("loaded"),RM.screenshot||this.preloadPictures[e].remove()}},loadFullSizePicture:function(i){let t=(0,l.default)("<img>").addClass("preload-slideshow-image").appendTo(this.$preloadContainer).attr("src",this.getPictureUrl(i)).on("load",e.bind(this)).on("error",s.bind(this));function e(o){let n=u.default.findIndex(this.pictures,function(c){return i.uuid===c.uuid});this.domPictures[n].css({"background-image":`url("${this.getPictureUrl(i)}")`}),this.domPictures[n].removeClass("lqip"),t.remove(),this.trigger("loaded")}function s(o){let n=u.default.findIndex(this.pictures,function(c){return i.uuid===c.uuid});this.domPictures[n].removeClass("lqip"),t.remove(),this.trigger("loaded"),RM.screenshot||t.remove()}},initCursor:function(){this.cursor=0,this.currentSlide=this.domPictures[this.cursor],this.domPictures[this.cursor+1]&&(this.nextSlide=this.domPictures[this.cursor+1])},startAnimationLoop:function(){this.isAnimationRunning=!0,this.selectedSlide=null,this.currentSlide||this.initCursor(),this.slideshowLouncher=setTimeout(function i(){this.fadeAnimation(),this.slideshowLouncher=setTimeout(i.bind(this),this.delay*1e3)}.bind(this),this.delay*1e3)},fadeAnimation:function(){this.lastSlideshowAnimationStart=new Date;let i;this.domPictures.length<2||((!this.currentSlide||!this.nextSlide)&&this.initCursor(),this.cursor+1<this.domPictures.length?(this.currentSlide.removeClass("fade-in").addClass("fade-out"),i=this.cursor,setTimeout(function(){this.domPictures[i]&&this.domPictures[i].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.domPictures[i+1].css({"z-index":2}),this.domPictures[i+2]?this.domPictures[i+2].css({"z-index":1,display:"block"}):this.domPictures[0].css({"z-index":1,display:"block"})}.bind(this),this.crossfade*1e3),this.cursor+=1,this.currentSlide=this.domPictures[this.cursor],this.domPictures[this.cursor+1]?this.nextSlide=this.domPictures[this.cursor+1]:this.nextSlide=this.domPictures[0]):(this.currentSlide.removeClass("fade-in").addClass("fade-out"),i=this.cursor,setTimeout(function(){this.domPictures[i]&&this.domPictures[i].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.domPictures[0].css({"z-index":2}),this.domPictures[1].css({"z-index":1,display:"block"})}.bind(this),this.crossfade*1e3),this.cursor=0,this.currentSlide=this.domPictures[this.cursor],this.nextSlide=this.domPictures[this.cursor+1]))},stopAnimationLoop:function(i){this.isAnimationRunning=!1,clearTimeout(this.slideshowLouncher),i&&typeof i=="function"&&i()},destroy:function(){this.rendered=!1,this.stopAnimationLoop(this.removePictures.bind(this))}}),w=T});var g,a,C,R=S(()=>{"use strict";g=d(b()),a=d(U());z();A();M();x();C=class extends g.default.View{constructor(e){super(e);h(this,"rendered",!1);h(this,"thumbnailMode");h(this,"propsModel");this.thumbnailMode=e?.attributes?.thumbnailMode,this.propsModel=new g.default.Model({playing:!1}),this.model.on("change:video",this.updateVideoState.bind(this))}render(){if(this.rendered)return this;let e=this.getVideo();return this.updateVideoState(),P(e)?(f({component:()=>m(p,{thumbnailMode:this.thumbnailMode,onPlay:this.onPlay.bind(this),onLoaded:this.onLoaded.bind(this)}),domElement:this.$el.get(0),model:this.propsModel,onDestroy:()=>{let s=this.$el.get(0);a.default.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}}),this.$el.css("height","100%"),this.rendered=!0,this):(f({component:()=>m(p,{thumbnailMode:!0}),domElement:this.$el.get(0),model:this.propsModel,onDestroy:()=>{let s=this.$el.get(0);a.default.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}}),this.onLoaded(),this)}getVideo(e){let s=(e||this.model).get("video");if(!s)throw new Error("Video data is not exists");return s}updateVideoState(e){let s=this.getVideo(e);if(this.$el.css("opacity",(e||this.model).get("video").opacity/100),!P(s)){this.propsModel.set({thumbnailUrl:s.thumbnail_url,loop:s.loop});return}let o=y(s);o&&this.propsModel.set({thumbnailUrl:o.thumbnail,videoUrl:o.video,loop:s.loop})}onPlay(){this.trigger("playStarted")}onLoaded(){this.trigger("loaded")}start(){return this.propsModel.set({playing:!0}),this}stop(){return this.propsModel.set({playing:!1}),this}show(){this.rendered||this.render();let e=this.model.get("video").opacity/100;this.$el.stop().animate({opacity:e})}hide(){this.$el.stop().animate({opacity:0},{queue:!1})}destroy(){this.$el.get(0)&&a.default.unmountComponentAtNode(this.$el.get(0))}}});export{w as a,I as b,C as c,R as d};
