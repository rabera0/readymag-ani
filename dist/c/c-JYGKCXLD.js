import{b as o,c as m}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DQFZXCVV.js";import{b as c}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IJGABWID.js";import{a as s}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";function _(t){return t.findBlockByFunction(r=>r.model.get("type")==="ecommercecart")}function E(t,r=[]){return!!u(t,r)}function u(t,r=[]){if(t===o.environment.constructor){let n=r.find(i=>i.get("type")==="ecommercecart");return n?n.attributes:null}else return r.find(n=>n.type==="ecommercecart")}function v(t){return t&&t.stripe&&t.stripe.stripe_data&&t.stripe.stripe_data.stripe_user_id?t.stripe.stripe_data.stripe_user_id:null}function x(t){let r=p(),i={translatedName:t.nameTranslated?.[r]||t.name,values:[],translatedValues:{}};return t.choices?.forEach(e=>{i.values.push(e.text);let a=e.textTranslated?.[r]||e.text;i.translatedValues[e.text]=a}),i}function p(){return typeof window<"u"?window.navigator?.language?.substring(0,2):"en"}function A(t){return{currency:t.currency.toUpperCase(),value:t.price,items:[{item_id:t.id,item_name:t.name,price:t.price,quantity:1,item_variant:t.options?JSON.stringify(t.options):void 0}]}}function G(t){let r=0,n="",i=[];for(let e of t)r+=e.price*e.cartQuantity,n=e.currency.toUpperCase(),i.push({item_id:e.id,item_name:e.name,price:e.price,quantity:e.cartQuantity,item_variant:e.options?JSON.stringify(e.options):void 0});return{value:r,currency:n,items:i}}var C,W,d=s(()=>{"use strict";m();c();C=t=>`_rm_cartstore:${t}`,W=t=>`_rm_ecom_provider:${t}`});export{_ as a,E as b,u as c,v as d,x as e,p as f,C as g,W as h,A as i,G as j,d as k};
