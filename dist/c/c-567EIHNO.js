import{a as f}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CY2FEJLT.js";import{a as u,b}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-ALU6PIEL.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-5EGHSVLS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-MWOSWUM3.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S2UTM4FX.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6L6VUWAD.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-D6J5HC4D.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-URFCP7B2.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IWCOVASN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CQ3QLQK5.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-YM5H3BT6.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-MVDJARLS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-T6TN5YO4.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-W5OZJVNV.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PTOZSKV6.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PSGGD2IQ.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LUPS5IAT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-WEREZOGV.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-A23WIZTM.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CXA7FWYL.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-ZWSDUWXW.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-GDSGTKKB.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6P4KCQ22.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-SHJ7QGQT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CYBVJMMN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-UMLFVHKK.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-FFSQZJFP.js";import{e as d,h as l}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-C3SKTX2K.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-Z4COXDDT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6KVCTNLD.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-O4L6L2GG.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VMLLFM4X.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-BDTBHKNZ.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LA3FLWVR.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7ZY2VSVL.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VPHMCDHS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-5JZ2YWXB.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DQFZXCVV.js";import{a as h}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-H3ZPPNIG.js";import{b as p}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-KI5HOILD.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IJGABWID.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CD44EXNS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-SLUQJE2K.js";import{d as c}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var a=c(h()),m=c(p());b();l();var g=f.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,NUMBER_TEST_REGEX:/^[0-9.,`']+$/,render:function(){if(this.makeBox("widget-form"),this.rendered=!0,this.captcha&&!window.recaptchaReadyPromise){let t;window.recaptchaReadyPromise=new Promise(e=>{t=e}),window.onloadRecaptchaCallback=function(){t()},(0,a.default)('<script src="https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit" async><\/script>').appendTo("head")}return this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),this.formWidget=new u({data:this,environment:"viewer",$container:this.$el}),this.formWidget.render(),this.$button=this.$(".button"),this.$button.on("click",this.onButtonClick),this.$(".js-input").on("keydown",this.onInputKeyDown),this.$(".js-input").on("input",this.onInput),this.$("select").on("change",this.onInput),RM.screenshot?this.waitForUsedFontsLoad():this.widgetIsLoaded(),this},hasFontsToLoad:function(){return!0},destroy:function(){return this.formWidget&&this.formWidget.destroy(),this.formWidget=null,this.$(".button").off("click",this.onButtonClick),f.prototype.destroy.apply(this,arguments)},waitForUsedFontsLoad:function(){this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.widgetIsLoaded):this.widgetIsLoaded()},onButtonClick:function(){this.$button.hasClass("submitted")||(this.setButtonState("pending"),this.formWidget.executeCaptcha(function(){this.sendForm()}.bind(this)))},sendForm:function(){if(!this.validateForm()){this.setButtonState();return}this.button_caption_after_submit==="Text after submit"||!this.button_caption_after_submit||this.submit_mode&&this.submit_mode!=="textAfterSubmit"?this.$button.addClass("empty-submitted-text"):this.$button.find(".caption").text(this.button_caption_after_submit),RM.common.isDownloadedSource&&!RM.common.homepageRewrite?this.submitToIframe(function(e){e?(this.setButtonState("error"),RM.analytics&&RM.analytics.sendEvent("rm_form_submit_error",e)):(this.setButtonState("submitted"),RM.analytics&&RM.analytics.sendEvent("form_submit"))}.bind(this)):this.submitForm(function(e){e?(this.setButtonState("error"),e.responseJSON&&e.responseJSON.name==="email_not_confirmed"&&m.default.delay(function(){alert(e.responseJSON.message)},100),RM.analytics&&RM.analytics.sendEvent("rm_form_submit_error",e)):(this.setButtonState("submitted"),RM.analytics&&RM.analytics.sendEvent("form_submit"))}.bind(this)),this.link_after_submit&&this.submit_mode&&this.submit_mode!=="textAfterSubmit"&&this.applyLink()},applyLink:function(){let t;this.submit_mode==="toUrlAfterSubmit"?this.openInNewTab(this.link_after_submit):(t=this.page.mag.getPageUri?"/"+this.page.mag.getPageUri(this.link_after_submit):"javascript:void(0)",this.mag.router.navigate(t,{trigger:!0}))},openInNewTab:function(t){Object.assign(document.createElement("a"),{target:"_blank",rel:"noopener",href:t}).click()},getDataBySort:function(t){return t=parseInt(t,10),m.default.findWhere(this.fields,{sort:t})},validateForm:function(){let t=this.$(".js-input"),e=!0;return this.captcha&&!this.formWidget.captchaResponse?!1:(m.default.each(t,function(s){let i=(0,a.default)(s),o=i.val().trim(),n=this.getDataBySort(i.attr("data-sort")),r=!0;if(!o)r=n.optional;else switch(n.tp){case"name":case"text":case"dropdown":break;case"email":d(o)||(r=!1);break;case"phone":/^[0123456789 +-]+$/.test(o)||(r=!1);break;case"number":(!this.NUMBER_TEST_REGEX.test(o)||isNaN(parseFloat(o)))&&(r=!1);break;case"checkbox":!n.optional&&!i.prop("checked")&&(r=!1);break;case"captcha":this.formWidget.captchaResponse||(r=!1);break}r||(this.formWidget.applyInputsStyle(i.closest(".input-wrapper"),{invalid:!0}),e=!1)}.bind(this)),e)},onInput:function(t){let e=(0,a.default)(t.currentTarget).parent().find(".js-input");this.formWidget.applyInputsStyle(e.closest(".input-wrapper")),this.setButtonState()},onInputKeyDown:function(t){t.keyCode===a.default.keycodes.enter&&!(0,a.default)(t.target).is("textarea")&&(t.preventDefault(),this.onButtonClick()),(0,a.default)(t.target).is("textarea")&&(t.keyCode===a.default.keycodes.up||t.keyCode===a.default.keycodes.down)&&t.stopPropagation()},getFormData:function(){let t={wid:this._id,mag_num_id:this.page.mag.num_id,is_preview:!!(RM.constructorRouter&&RM.constructorRouter.preview),fields:[]};return this.captcha&&(t.captcha=this.formWidget.captchaResponse),m.default.each(this.fields,function(e){if(e.tp==="captcha"){t.captcha=this.formWidget.captchaResponse;return}let s=this.$(".js-input[data-sort="+e.sort+"]");if(s.length===0)return;let i=s.val().trim();if(e.tp==="checkbox"&&(i=s.prop("checked")?"On":"Off"),e.tp==="number"){let o=parseFloat(i);i=isNaN(o)?i:o}e.tp!=="file"&&t.fields.push({caption:e.caption,type:e.tp,value:i})}.bind(this)),t},submitForm:function(t){this.xhr&&this.xhr.abort();let e=this.$el.find("form");e.length||(e=this.$el.find(".form-wrapper").wrap('<form enctype="multipart/form-data" method="post" target="form_submit_iframe"></form>').parent().attr("action","/api/connect/forms/send/"+this.page.mag.num_id));let s=new FormData(e.get(0)),i=this.getFormData();if(i&&i.fields)for(let n of i.fields)s.delete(n.name);for(let n of Object.keys(i))s.append(n,typeof i[n]=="object"&&i[n]!==null?JSON.stringify(i[n]):i[n]);let o=s.get("formfiles");o&&(!o.size||!o.name)&&s.delete("formfiles"),this.xhr=a.default.ajax({url:"/api/connect/forms/send/"+this.page.mag.num_id,method:"POST",dataType:"json",data:s,cache:!1,contentType:!1,processData:!1,success:function(){t()},error:function(n){t({status:n.status,responseJSON:n.responseJSON,responseText:n.responseText})}}),RM.analytics&&RM.analytics.sendEvent("form_start")},submitToIframe:function(t){let e=this.endpoint_url&&this.endpoint_url.custom_url,s,i;if(!e)return t("No custom URL specified for submit");s=(0,a.default)("#form_submit_iframe"),s.length||(s=(0,a.default)('<iframe id="form_submit_iframe" name="form_submit_iframe" style="display:none;"></iframe>').appendTo("body")),i=this.$el.find("form"),i.length||(i=this.$el.find(".form-wrapper").wrap('<form method="post" target="form_submit_iframe" enctype="multipart/form-data"></form>')),i.attr("action",e),i.get(0).submit(),t(null),RM.analytics&&RM.analytics.sendEvent("form_start")},setButtonState:function(t){t=t||"";let e=["error","submitted","pending"];this.$button.removeClass(e.join(" ")).addClass(t)}}),R=g;export{R as default};
