import{a as f,b as S}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S2UTM4FX.js";import{V as z,Y as V}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IWCOVASN.js";import{c as g,d as G}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-WEREZOGV.js";import{a as Y}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CXA7FWYL.js";import{a as B}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-H3ZPPNIG.js";import{b as E}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import{a as m,d as v}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var M,N=m(()=>{"use strict";S();M={"template-common-button-widget":f`

    <div class="common-button" data-id="<%-data._id%>">

        <div class="icon"></div>

    </div>

`}});var P,U=m(()=>{"use strict";S();P={"template-constructor-block-button":f`

    <input class="text"
           value="<%-data.text%>"
           type="text"
           autocapitalize="off"
           autocorrect="off"
           autocomplete="off"
           spellcheck="false"/>

`}});var H,L=m(()=>{"use strict";S();H={"template-viewer-widget-button":f`
    <div class="text"><%-data.text%></div>
`}});var $,h,W,b,R=m(()=>{"use strict";$=v(B()),h=v(E());V();G();W={STYLE_PREFIXES:{viewer:[".rmwidget.widget-button .common-button"],viewerCurrentLink:[".maglink.current .widget-button .common-button"],constructor:[".block.button .common-button"]},generateIndividualStyleCSS:function(t){let i=this.STYLE_PREFIXES[t.env],e=t.model,s=e.tp,r=this,o,n=function(d){d=d||"default";let y={default:"",hover:"hovered",current:"current"},w={default:"",hover:"hover-",current:"current-"},x=h.default.isUndefined(y[d])?y.default:y[d],u=h.default.isUndefined(w[d])?w.default:w[d],_=h.default.map(i,p=>p+'[data-id="'+e._id+'"]'+(x?"."+x:"")).join(`,
`);o=_+` {
`,o+=r.generateStylesStr({model:e,attrPrefix:u,indentation:!0,lineBreaks:!0,env:t.env,state:d,withoutHoverCursor:t.withoutHoverCursor}),o+=`}

`;let I=d==="default"?e.baselineShift:d==="current"?e["current-baselineShift"]:null;if(typeof I=="number"){let p={transform:`translateY(${I}px)`},A=`${_} .text, ${_} .icon { ${z(p)} }`;o+=`

${A}

`}return t.env==="viewer"&&(d==="current"&&r.isNeedCurrentStyle(e)&&(o+=r.STYLE_PREFIXES.viewerCurrentLink+'[data-id="'+e._id+`"] {
`,o+=r.generateStylesStr({model:e,attrPrefix:u,indentation:!0,lineBreaks:!0}),o+=`}

`),(s==="icon"||s==="text_and_icon")&&(o+=h.default.map(i,function(p){return p+'[data-id="'+e._id+'"]'+(x?"."+x:"")+" .icon"}).join(`,
`)+` {
`,o+='	 background-image: url("'+(Modernizr.retina?e[u+"icon_raster2xUrl"]||e[u+"icon_b64url"]:e[u+"icon_rasterUrl"]||e[u+"icon_b64url"])+`");
`,o+=`}

`,d==="current"&&r.isNeedCurrentStyle(e)&&(o+=r.STYLE_PREFIXES.viewerCurrentLink+'[data-id="'+e._id+`"] .icon {
`,o+='	 background-image: url("'+(Modernizr.retina?e[u+"icon_raster2xUrl"]||e[u+"icon_b64url"]:e[u+"icon_rasterUrl"]||e[u+"icon_b64url"])+`");
`,o+=`}

`))),o};o=n("default"),h.default.find(h.default.keys(e),function(d){return/^current/.test(d)})&&(o+=n("current")),o+=n("hover");let l="individual_button_style_"+e._id+"_"+t.env+"_"+t.viewport;(0,$.default)("#"+l).remove();let c=document.createElement("style");c.type="text/css",c.id=l,c.className="button_styles",c.appendChild(document.createTextNode(o)),document.getElementsByTagName("head")[0].appendChild(c)},generateStylesStr:function(t){let i="",e=t.model,s=t.indentation?"	":"",r=";"+(t.lineBreaks?`
`:""),o=t.attrPrefix||"";return i+=s+"background-color: "+g.getRGBA(n("background-color"),n("background-color-opacity")/100)+r,i+=s+"border-radius: "+a(n("border-radius"))+r,i+=s+"border-width: "+a(n("border-width"))+r,i+=s+"border-color: "+g.getRGBA(n("border-color"),n("border-color-opacity")/100)+r,i+=s+"font-family: "+n("font-family")+r,i+=s+"font-weight: "+n("font-weight")+r,i+=s+"font-style: "+n("font-style")+r,i+=s+"color: "+g.getRGBA(n("color"),n("color-opacity")/100)+r,i+=s+"font-size: "+a(n("font-size"))+r,i+=s+"letter-spacing: "+a(n("letter-spacing"))+r,e["hover-tansition-duration"]&&(i+=s+`transition: ${e["hover-tansition-duration"]}s`+r),!t.withoutHoverCursor&&t.env&&t.state&&t.env==="viewer"&&t.state==="hover"&&e["hover-cursor"]&&(i+=s+`cursor: ${e["hover-cursor"]}`+r),i;function n(l){let c=e[o+l];return(c==="inherit"&&o||c===void 0)&&(c=e[l]),l==="border-color"&&o==="hover-"?e["hover-border-width"]==0&&(c=e["border-color"]):l==="border-color"&&o!=="current-"&&e["border-width"]==0&&(c=e["hover-border-color"]),l==="border-color-opacity"&&o==="hover-"?e["hover-border-width"]==0&&(c=e["border-color-opacity"]):l==="border-color-opacity"&&e["border-width"]==0&&(c=e["hover-border-color-opacity"]),c}function a(l){return l+(/px/i.test(l)?"":"px")}},destroyIndividualStyleCSS:function(t){let i=t.model,e="individual_button_style_"+i._id+"_"+t.env;(0,$.default)("#"+e).remove()},isNeedCurrentStyle:function(t){let i=t.clickLink;return!i||!t.is_global||/^http(s?)\:\/\//i.test(i)||/^mailto\:/i.test(i)||/^tel\:/i.test(i)?!1:!!t.mag.getPageUri(i)}},b=W});var T,F,k,C,X,st,j=m(()=>{"use strict";T=v(B()),F=v(Y()),k=v(E());N();U();L();R();C={...M,...P,...H},X=F.default.View.extend({MIN_ICON_MARGIN:8,initialize:function(t){t&&(k.default.bindAll(this),this.block=t.block,this.model=t.block&&t.block.model,this.model=t.model,this.$container=t.$container,this.environment=t.environment,this.mag=t.mag,this.withoutHoverCursor=t.withoutHoverCursor,k.default.extend(this.model,{env:this.environment}),this.generateIndividualStyleCSS({env:this.environment,model:this.model,withoutHoverCursor:this.withoutHoverCursor,viewport:t.viewport}),this.template=C["template-common-button-widget"],this.environment==="constructor"?this.text_template=C["template-constructor-block-button"]:this.text_template=C["template-viewer-widget-button"],this.render())},render:function(){let t=b.generateStylesStr({model:this.model});this.setElement((0,T.default)(this.template({data:this.model}))),(0,T.default)(this.text_template({data:this.model})).appendTo(this.$el),this.$text=this.$(".text"),this.$icon=this.$(".icon"),this.$button=this.$text.closest(".common-button"),this.$button.attr("style",t),this.applyButtonType(this.model.tp),this.model.form==="circle"&&this.applyCircleRadius(this.model.w),this.applyTextContainerSize(this.model),this.applyIconContainerSize(this.model),this.applyIconPosition(this.model),this.environment==="viewer"&&this.$container.css("border-radius",this.$button.css("border-radius")),this.$el.appendTo(this.$container),this.renderFinishTimeout=setTimeout(function(){let i=["background-color","background-color-opacity","border-width","border-color","border-color-opacity","font-family","font-style","font-weight","color","color-opacity","font-size","letter-spacing"];this.model.form!=="circle"&&i.push("border-radius"),i.forEach(function(e){this.$button.css(e,"")}.bind(this)),this.applyTransition()}.bind(this),500)},renderButtonText:function(t){this.$el.find(".text").text(t)},renderButtonTextWithSizes:function(t,i){i&&this.applyTextContainerSize(i),this.$el.find(".text").text(t).css({display:t?"block":"none"})},applyTransition:function(){this.environment==="viewer"&&!Modernizr.touch&&(this.model.transition||this.model.transitionTime)&&this.$button.addClass("transition").css("transition",`all ${this.model.transitionTime}s ease 0s`)},applyButtonType:function(t){let i="inline-block";t==="text"?(this.$text.css("display",i),this.$icon.css("display","none")):t==="icon"?(this.$icon.css("display",i),this.$text.css("display","none")):t==="text_and_icon"&&this.$icon.add(this.$text).css("display",i)},applyCircleRadius:function(){this.$button.css("border-radius","100%")},applyTextContainerSize:function(t,i=!1){let e=this.environment==="viewer",s=e?b.isNeedCurrentStyle(this.model):!1,r=i||s?t["current-text_w"]:t.text_w,o=i||s?t["current-text_h"]:t.text_h,n=i||s?t["current-letter-spacing"]:t["letter-spacing"],a=0,l=0;n>0?a=n:n<0&&(l=n),this.$text.css({width:e?"auto":`${r}px`,"padding-left":`${a}px`,"text-indent":`${l}px`,height:this.environment==="viewer"?`${t.h}px`:`${o}px`,"line-height":this.environment==="viewer"?`${t.h}px`:`${t.text_h}px`})},applyIconContainerSize:function(t){let i=t.tp,e=t.icon_w,s=t.icon_h,r=t.icon_pos,o=0,n=0;i==="text_and_icon"&&(r==="left"?n=8:r==="right"&&(o=8)),this.$icon.css({width:e+"px",height:s+"px","margin-right":n+"px","margin-left":o+"px"})},calcIconMarginFromText:function(t){return Math.ceil(t/4)},calcIconTopBottomMargin:function(t){return Math.ceil(t/3)},calcTextTopBottomMargin:function(t){return Math.ceil(t/6)},applyIconPosition:function(t){let i=t.icon_pos;i==="left"?this.$button.css({"flex-direction":"row","-webkit-flex-direction":"row"}):i==="right"&&this.$button.css({"flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse"})},generateIndividualStyleCSS:function(t){b.generateIndividualStyleCSS({env:t.env,model:t.model,viewport:t.viewport,withoutHoverCursor:t.withoutHoverCursor})},destroy:function(){clearTimeout(this.renderFinishTimeout),b.destroyIndividualStyleCSS({env:this.environment,model:this.model}),this.$el&&this.$el.remove()}}),st=X});export{st as a,j as b};