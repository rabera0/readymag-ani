import{a as L,b as k}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S2UTM4FX.js";import{a as R,b as W}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6L6VUWAD.js";import{c as H,d as V}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-WEREZOGV.js";import{a as B}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CXA7FWYL.js";import{b as T,c as N}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DQFZXCVV.js";import{a as P}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-H3ZPPNIG.js";import{b as F}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import{d as I,e as z}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-SLUQJE2K.js";import{a as S,d as _}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var A,E=S(()=>{"use strict";k();A={"template-common-form-button":L`
	<div class="button">
		<div class="caption"></div>
		<svg class="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M17 19.8c-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6S18.4 19.8 17 19.8zM19 0.4h-4L15 17.4h4L19 0.4z"/></svg>
		<div class="pending"></div>
		<svg class="show-if-empty-submitted-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M31.4 3C30.6 2.3 29.4 2.3 28.6 3l0 0L13.1 18.6l-7.8-7.8 0 0c-0.8-0.7-2-0.7-2.7 0 -0.8 0.8-0.8 2 0 2.7l0 0L13.1 24.1l0.4-0.4h0L31.4 5.8l0 0C32.1 5 32.1 3.8 31.4 3z"/></svg>
	</div>
`}});var d,D,v,G,Q,j=S(()=>{"use strict";d=_(P()),D=_(B()),v=_(F());V();E();z();N();W();G=D.default.View.extend({MIN_FIELD_WIDTH:9,MIN_FIELD_HEIGHT:5,CAPTCHA_WIDTH:304,CAPTCHA_HEIGHT:78,CAPTCHA_INVISIBLE:!0,LINE_HEIGHT_FACTOR:1.2,INVALID_COLOR:"ff4828",INVALID_BORDER_WIDTH:2,DROPDOWN_TRIANGLE:{SVG:'<svg class="form-dropdown-triangle" width="9" height="6" preserveAspectRatio="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"><path d="M3.763 5.196L.536 1.676A1 1 0 0 1 1.273 0h6.454a1 1 0 0 1 .737 1.676l-3.227 3.52a1 1 0 0 1-1.474 0z" fill-rule="evenodd"/></svg>',OPACITY_MULTIPLIER:.4,W:9,H:6,FONT_SIZE:18},CHECKBOX_TICK:{SVG:'<svg width="19" height="14" preserveAspectRatio="none" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M6.657 10.9L17.263.292a1 1 0 1 1 1.415 1.414L7.364 13.021a.997.997 0 0 1-1.414 0L.293 7.364A1 1 0 1 1 1.707 5.95l4.95 4.95z" fill-rule="evenodd"/></svg>',W:19,H:14,FONT_SIZE:18},initialize:function(t){v.default.bindAll(this),this.data=t.data,this.$container=t.$container,this.environment=t.environment,this.buttonTemplate=A["template-common-form-button"]},render:function(t={}){this.rendered?t.force&&this.$el&&this.$el.empty():(this.setElement((0,d.default)("<div>")),this.$el.addClass("form-wrapper").appendTo(this.$container),this.environment!=="constructor"&&this.$el.on(I.isDesktop()?"mouseenter":"touchstart",".button",this.onButtonHover).on(I.isDesktop()?"mouseleave":"touchend",".button",this.onButtonHoverOut),this.$el.on("change","select",this.onDropdownChange).on("mouseenter",".input-wrapper",this.onInputHover).on("mouseleave",".input-wrapper",this.onInputHoverOut),this.rendered=!0);let n=this.data,i=n.fields,e=(0,d.default)('<div><form enctype="multipart/form-data" method="post" target="form_submit_iframe"></form></div>'),o=e.find("form"),s,a,f=RM.constructorRouter&&RM.constructorRouter.previewMode,c=!!RM.constructorRouter,p=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_forms_file_upload&&(p=!0);else{let r=R.getPermissions();r&&r.can_use_forms_file_upload&&(p=!0)}for(let r=0;r<i.length;r++){let l=i[r];if(l.tp==="file"&&!p&&!c||l.tp==="captcha")continue;s=n.layout==="vertical"&&l.tp==="text",a=(0,d.default)(s?"<textarea>":"<input>"),a.addClass("js-input"),a.attr("type","text").attr("autocapitalize",l.tp==="name"?"on":"off").attr("autocomplete","off").attr("autocorrect","off").attr("name",l.caption).attr("placeholder",l.caption+(l.optional&&this.environment!=="viewer"?" (optional)":"")).attr("spellcheck",!1).attr("data-sort",l.sort),l.tp==="email"&&a.attr("inputmode","email"),l.tp==="phone"&&a.attr("inputmode","tel"),l.tp==="number"&&a.attr("inputmode","numeric"),l.tp==="checkbox"&&a.attr("type","checkbox"),l.tp==="dropdown"&&(a.attr({tabindex:-1}),a.prop({readonly:!0}),a.addClass("fake-dropdown"));let h=(0,d.default)('<div class="input-wrapper js-input-wrapper"/>');if(h.append(a),h.append('<div class="overlay"></div>'),this.environment!=="viewer"&&s){let u=(0,d.default)('<span class="input-line-control input-line-control-add js-add-line"></span>'),m=(0,d.default)('<span class="input-line-control input-line-control-remove js-remove-line"></span>');h.append(u).append(m)}if(l.tp==="file"){this.environment==="viewer"&&a.attr("type","file");let u=`formfiles-${this.data._id}${this.environment!=="viewer"?"-constructor":""}`;a.attr("name","formfiles"),a.attr("id",u),a.attr("multiple",""),a.attr("accept",(window.ServerData.config.FORMS_ACCEPTED_MIMES||[]).join(",")),a.addClass("input-file");let m=l.caption+(l.optional&&this.environment!=="viewer"?" (optional)":"")||"Add files";h.append((0,d.default)(`<label ${p?`for="${u}"`:""} class="input-file-label${this.environment!=="viewer"?" no-hover":""}" data-empty-text="${m}${f&&!p?" (Business plan only)":""}"><span class="files-name">${m}${f&&!p?" (Business plan only)":""}</span><span class="files-count"></span></label>`)),this.environment==="viewer"&&h.append((0,d.default)('<span class="input-file-control input-file-control-add">&nbsp;</span><span class="input-file-control input-file-control-remove">&nbsp;</span>'))}if(h.appendTo(o),l.tp==="dropdown"&&l.items){let u=(0,d.default)("<select>"),m=(0,d.default)(this.DROPDOWN_TRIANGLE.SVG);u.attr("name",l.caption),(0,d.default)('<option value="" selected></option>').prop("disabled",!l.optional).appendTo(u);for(let g=0;g<l.items.length;g++)(0,d.default)("<option>").attr("value",l.items[g]).text(l.items[g]).appendTo(u);a.parent().append(m).append(u)}if(l.tp==="checkbox"){let u=I.isDesktop()?"":"input-checkbox-wrapper-mobile";a.wrap('<label class="input-checkbox-wrapper '+u+'"></label>'),a.after('						<div class="input-checkbox-inner"> 							<span class="label">'+a.attr("placeholder")+'</span> 							<span class="tick">'+this.CHECKBOX_TICK.SVG+"</span> 						</div>")}}if((0,d.default)(this.buttonTemplate()).appendTo(o),this.$el.html(e.html()).addClass("common-form"),this.data.captcha&&!RM.common.isDownloadedSource){let r=H.generateUUID(),l=(0,d.default)(`<div id="${r}" class="captcha-holder captcha-invisible"></div>`);this.$el.find("form").append(l),window.recaptchaReadyPromise&&window.recaptchaReadyPromise.then(()=>{this.captcha=window.grecaptcha.render(r,{sitekey:window.ServerData.config.RECAPTCHA_SITEKEY,callback:this.captchaCallback.bind(this),theme:l.data("type")||"light",size:"invisible",isolated:!0})})}this.$button=this.$(".button"),this.$buttonIcons=this.$(".button svg"),this.data.cursorStyle&&this.$button.css("cursor",this.data.cursorStyle),this.$inputs=this.$(".input-wrapper"),this.$triangles=this.$(".form-dropdown-triangle"),this.$fileInputLabel=this.$inputs.find(".input-file-label"),this.$fileInputLabelText=this.$inputs.find(".input-file-label > .files-name"),this.$fileInputLabelCount=this.$inputs.find(".input-file-label > .files-count"),this.environment==="viewer"&&(this.$fileInput=this.$inputs.find(".input-file"),this.$fileInput&&this.$fileInput.on("change",this.onFileChange),this.$fileAddCtrl=this.$(".input-file-control-add"),this.$fileRemoveCtrl=this.$(".input-file-control-remove"),this.$fileRemoveCtrl&&this.$fileRemoveCtrl.on("click",this.onFileRemove)),this.recalcStyles()},executeCaptcha:function(t){if(!this.hasOwnProperty("captcha")){t();return}this.captchaExecuteCallback=t,window.grecaptcha.reset(this.captcha),window.grecaptcha.execute(this.captcha)},captchaCallback:function(t){this.captchaResponse=t,setTimeout(()=>this.captchaExecuteCallback(t),0)},validateFiles:function(t){if(!t||!t.length)return!0;let n=R.getPermissions();if(t.length>n.forms_file_upload_count)return alert(T.MSG_UPLOAD_FORMS_FILES_ERROR),!1;for(let i of t)if(i.size>n.forms_file_upload_limit)return alert(T.MSG_UPLOAD_FORMS_SIZE_ERROR),!1;return!0},onFileChange:function(){let t=this.$fileInput.get(0).files;if(!t||!t.length){this.$fileRemoveCtrl&&this.$fileRemoveCtrl.hide(),this.$fileAddCtrl&&this.$fileAddCtrl.show(),this.$fileInputLabelText.text(this.$fileInputLabel.data("emptyText")),this.$fileInputLabelCount.text(""),this.$fileInputLabel.removeClass("has-files");return}else{if(!this.validateFiles(t))return this.onFileRemove();this.$fileInputLabel.addClass("has-files"),this.$fileRemoveCtrl&&this.$fileRemoveCtrl.show(),this.$fileAddCtrl&&this.$fileAddCtrl.hide()}let n=(t[0].name||"Filename").split("\\").join("/").split("/").pop();this.$fileInputLabelText.text(n),this.$fileInputLabelCount.text(t.length>1?` +${t.length-1}`:"")},onFileRemove:function(){this.$fileInput.val(""),this.onFileChange()},onDropdownChange:function(t){(0,d.default)(t.currentTarget).parent().find(".js-input").val((0,d.default)(t.currentTarget).val())},setButtonHoverState:function(){this.forcePseudoState="hover",this.applyButtonStyle()},unsetButtonHoverState:function(){this.forcePseudoState=!1,this.applyButtonStyle()},recalcStyles:function(t){this.$el.attr("data-layout",this.data.layout).attr("data-style",this.data.style),this.$button.find(".caption").text(this.data["button-caption"]),this.resizeElements(t),this.applyInputsStyle(this.$inputs),this.applyButtonStyle(t)},getMinimalDimensions:function(){let t=this.data,n=t.fields,i=t["style-"+t.style+"-fields"],e=t["style-"+t.style+"-button-default"],o=this.getButtonValue.bind(this,e,i),s=n.find(h=>h.tp==="captcha"),a=e.gutter+(n.length-(s&&this.CAPTCHA_INVISIBLE?1:0))*i.gutter,f=i["underline-width"]||0,c=Math.max(Math.ceil(o("font-size")*this.LINE_HEIGHT_FACTOR),this.MIN_FIELD_HEIGHT)+f,p=Math.max(Math.ceil(i["font-size"]*this.LINE_HEIGHT_FACTOR),this.MIN_FIELD_HEIGHT)+f,r=Math.max(c,p),l;return t.layout==="vertical"&&(l={width:Math.max(s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_WIDTH:0,this.MIN_FIELD_WIDTH),height:a+this.getTotalInputsHeight(n,r)+r}),t.layout==="horizontal"&&(l={width:a+n.length*this.MIN_FIELD_WIDTH+(e.width||0)+(s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_WIDTH:this.MIN_FIELD_WIDTH),height:Math.max(r,s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_HEIGHT:0)}),l},getTotalInputsHeight:function(t,n){return v.default.reduce(t,function(i,e){if(e.tp==="text"){let o=this.getExtraTextareaDimensions(e.rows,n);return i+o.height}return e.tp==="captcha"?i+this.CAPTCHA_INVISIBLE?0:this.CAPTCHA_HEIGHT:i+n}.bind(this),0)},getRowsCount:function(t){return v.default.reduce(t,function(n,i){let e=i.tp==="captcha"?0:i.tp==="text"&&i.rows||1;return n+e},0)},getInputDimensionsWithFixedButton:function(t){let n=this.data,i=n.fields,e=n["style-"+n.style+"-button-default"],o=n["style-"+n.style+"-fields"],s=n.layout==="vertical",a=e.width||0,f=e.width&&!s?i.length:i.length+1,c=i.find(w=>w.tp==="captcha"),p=e.gutter+(i.length+(c?-1:0))*o.gutter,r=t&&t.w!==void 0?t.w:n.w,l=t&&t.h!==void 0?t.h:n.h,h=Math.floor(s?l:r),u=s?this.CAPTCHA_HEIGHT:this.CAPTCHA_WIDTH,m=h-p-(c&&!this.CAPTCHA_INVISIBLE?u+o.gutter:0),g,b;if(s){let w=this.getLineHeight(),C=this.getRowsCount(i),y=m-C*w.input-w.input,x=Math.ceil(y/(f-(c?1:0)));g=w.input+x,b=this.getTotalInputsHeight(i,g)+g+p-h}else g=Math.ceil((m-a)/(f-(c?1:0))),b=g*(i.length+1)+p+a-h;return{overflow:b,itemSize:g,buttonSize:e.width&&!s?e.width:g,itemOtherSize:s?r:l,gutter:o.gutter,lastGutter:e.gutter+o.gutter}},getLineHeight:function(){let t=this.data||{},n=this.LINE_HEIGHT_FACTOR,i=this.getButtonValue(t["style-"+t.style+"-button-default"],t["style-"+t.style+"-fields"],"font-size"),e=t["style-"+t.style+"-fields"]["font-size"];return{input:Math.floor(n<10?n*e:n),button:Math.floor(n<10?n*i:n)}},getExtraTextareaDimensions:function(t=1,n){let i=this.getLineHeight(),e=Math.round(n-i.input),o=this.data&&this.data.style==="underlined",s=o?e:Math.ceil(e/2),a=o?0:Math.floor(e/2);return{height:t*i.input+s+a,top:s,bottom:a}},resizeElements:function(t){let n=this.data,i=n.layout==="vertical",e=n.fields,o=e.length,s=this.getInputDimensionsWithFixedButton(t),a=s.overflow,f=n.style,c=n["style-"+f+"-fields"],p=(c&&c["underline-width"]||0)+2;this.$inputs.add(this.$button).each(function(r,l){let h={},u=r>=o?s.buttonSize:s.itemSize,m=r===o-1,g=r<o,b=e[r],w=(0,d.default)(l),C=r>=o+1-a;if(C&&u--,h[i?"height":"width"]=u+"px",h[i?"width":"height"]=s.itemOtherSize+"px",g&&(h[i?"margin-bottom":"margin-right"]=m?s.lastGutter:s.gutter),h[i?"margin-right":"margin-bottom"]="",i&&b&&b.tp==="captcha"&&delete h.height,!i&&b&&b.tp==="captcha"&&delete h.width,i&&b&&b.tp==="text"){let y=b.rows||1,x=w.find(".js-input"),M=w.find(".js-add-line"),O=w.find(".js-remove-line"),$=this.getExtraTextareaDimensions(y,s.itemSize);h.height=$.height+(C?-1:0)+"px",x.css({top:$.top-p,bottom:$.bottom}),x.attr({rows:y}),M.css({top:$.top-p}),O.css({bottom:$.bottom+p}),w.toggleClass("is-multiline",y>1)}w.css(h)}.bind(this))},showInputPlaceholdersAsValues:function(t){this.$inputs.each(function(n,i){let e=(0,d.default)(i).find(".js-input");e.attr("type")==="checkbox"?e.parent().find(".label").addClass("input-checkbox-preview"):e.val(t?e.attr("placeholder"):"")})},applyInputsStyle:function(t,n={}){let i=this.data,e=v.default.clone(i["style-"+i.style+"-fields"]),o;i.style==="underlined"?(n.invalid&&(e["underline-color"]=this.INVALID_COLOR,e["underline-opacity"]=100,e["underline-width"]=e["underline-width"]||this.INVALID_BORDER_WIDTH),o={"background-color":"transparent","border-radius":0,"box-shadow":"inset 0 "+-e["underline-width"]*2+"px 0 "+-e["underline-width"]+"px "+this.getRgba(e["underline-color"],e["underline-opacity"])}):(n.invalid&&(e["border-color"]=this.INVALID_COLOR,e["border-opacity"]=100,e["border-width"]=e["border-width"]||this.INVALID_BORDER_WIDTH),o={"background-color":this.getRgba(e.color,e.opacity),"border-radius":e["border-radius"]+"px","box-shadow":"inset 0 0 0 "+e["border-width"]+"px "+this.getRgba(e["border-color"],e["border-opacity"])});let s={"font-family":e["font-family"],"font-style":e["font-style"],"font-weight":e["font-weight"],color:this.getRgba(e["text-color"],e["text-opacity"]),"font-size":e["font-size"],"letter-spacing":e["letter-spacing"],"margin-bottom":e["underline-width"]?e["underline-width"]+"px":0,"text-align":e["text-align"]||"left",direction:e.direction||"ltr"};t.filter(":not(.captcha-wrapper)").css(o).find(".js-input:not(.captcha-wrapper), select").css(s),t.find(".input-checkbox-inner .label").css(s),t.find(".input-file-label").css(s),t.find(".input-file-control").css(s),t.find(".js-add-line, .js-remove-line").css({"font-size":e["font-size"]}),t.find(".form-dropdown-triangle").each(function(a,f){let c=(0,d.default)(f),p=c.parent(),r=p.find(".js-input"),l=r.position().top,h=p.height()-r.height()-l,u=this.getSvgSizesFromFontSize(e["font-size"],"DROPDOWN_TRIANGLE");c.css({fill:this.getRgba(e["text-color"],e["text-opacity"]*this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER),top:l,bottom:h,width:u.w,height:u.h})}.bind(this)),t.find(".input-checkbox-inner svg").each((a,f)=>{let c=(0,d.default)(f),p=this.getSvgSizesFromFontSize(e["font-size"],"CHECKBOX_TICK");c.css({fill:this.getRgba(e["text-color"],e["text-opacity"]),width:p.w,height:p.h})})},applyButtonStyle:function(){let t=this.data,n=t["style-"+t.style+"-fields"],i=t["style-"+t.style+"-button-default"],e=t["style-"+t.style+"-button-hover"],o=this.getButtonValue.bind(this,i,n),s=this.getHoverValue.bind(this,e,i,n),a=o("letter-spacing");this.$button.css({"line-height":this.$button.height()+"px","background-color":this.getRgba(o("color"),o("opacity")),"border-radius":o("border-radius")+"px","box-shadow":"inset 0 0 0 "+o("border-width")+"px "+this.getRgba(o("border-color"),o("border-opacity")),"font-family":o("font-family"),"font-style":o("font-style"),"font-weight":o("font-weight"),color:this.getRgba(o("text-color"),o("text-opacity")),"font-size":o("font-size"),"letter-spacing":a,"text-align":o("text-align")||"center","text-indent":a/2||0}),this.$buttonIcons.css({fill:this.getRgba(o("text-color"),o("text-opacity"))}),this.$button.attr("data-default",this.$button.attr("style")),this.$button.css({"background-color":this.getRgba(s("color"),s("opacity")),"box-shadow":"inset 0 0 0 "+s("border-width")+"px "+this.getRgba(s("border-color"),s("border-opacity")),color:this.getRgba(s("text-color"),s("text-opacity"))}),this.$button.attr("data-hover",this.$button.attr("style")),this.forcePseudoState||this.$button.attr("style",this.$button.attr("data-default")),this.$button.outerHeight(),this.$button.toggleClass("with-transition",!!e.transition&&this.environment==="viewer")},getRgba:function(t,n){let i=H.hex2rgb(t);return"rgba("+i[0]+", "+i[1]+","+i[2]+","+n/100+")"},getButtonValue:function(t,n,i){return t[i]==="inherit"?n[i]:t[i]},getHoverValue:function(t,n,i,e){return t[e]==="inherit"?this.getButtonValue(n,i,e):t[e]},onInputHover:function(t){let n=this.data,i=v.default.clone(n["style-"+n.style+"-fields"]);(0,d.default)(t.currentTarget).find(".form-dropdown-triangle").css("fill",this.getRgba(i["text-color"],i["text-opacity"]))},onInputHoverOut:function(t){let n=this.data,i=v.default.clone(n["style-"+n.style+"-fields"]);(0,d.default)(t.currentTarget).find(".form-dropdown-triangle").css("fill",this.getRgba(i["text-color"],i["text-opacity"]*this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER))},onButtonHover:function(){this.$button.hasClass("submitted")||this.$button.attr("style",this.$button.attr("data-hover"))},onButtonHoverOut:function(){this.$button.attr("style",this.$button.attr("data-default"))},destroy:function(){this.$fileInput&&this.$fileInput.off("change",this.onFileChange),this.$el.off(I.isDesktop()?"mouseenter":"touchstart",".button",this.onButtonHover).off(I.isDesktop()?"mouseleave":"touchend",".button",this.onButtonHoverOut).off("change","select",this.onDropdownChange),this.$el&&this.$el.remove()},getSvgSizesFromFontSize:function(t,n){let i=this[n].H,e=this[n].W,o=this[n].FONT_SIZE;return{h:t*i/o,w:t*e/o}}}),Q=G});export{Q as a,j as b};
