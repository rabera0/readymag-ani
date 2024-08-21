import{a as wt}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import{a as Et}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CD44EXNS.js";import{b as xt}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var _t=xt(O=>{"use strict";(function(_){var u=typeof self=="object"&&self.self===self&&self||typeof window=="object"&&window.global===window&&window;if(typeof define=="function"&&define.amd)define(["underscore","jquery","exports"],function(b,M,f){u.Backbone=_(u,f,b,M)});else if(typeof O<"u"){var h=Et(),T;try{T=wt()}catch{}_(u,O,h,T)}else u.Backbone=_(u,{},u._,u.jQuery||u.Zepto||u.ender||u.$)})(function(_,u,h,T){var b=_.Backbone,M=Array.prototype.slice;u.VERSION="1.4.0",u.$=T,u.noConflict=function(){return _.Backbone=b,this},u.emulateHTTP=!1,u.emulateJSON=!1;var f=u.Events={},N=/\s+/,x,E=function(t,e,i,r,s){var n=0,a;if(i&&typeof i=="object")for(r!==void 0&&("context"in s)&&s.context===void 0&&(s.context=r),a=h.keys(i);n<a.length;n++)e=E(t,e,a[n],i[a[n]],s);else if(i&&N.test(i))for(a=i.split(N);n<a.length;n++)e=t(e,a[n],r,s);else e=t(e,i,r,s);return e};f.on=function(t,e,i){if(this._events=E(Q,this._events||{},t,e,{context:i,ctx:this,listening:x}),x){var r=this._listeners||(this._listeners={});r[x.id]=x,x.interop=!1}return this},f.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=h.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),n=x=s[r];n||(this._listenId||(this._listenId=h.uniqueId("l")),n=x=s[r]=new P(this,t));var a=W(t,e,i,this);if(x=void 0,a)throw a;return n.interop&&n.on(e,i),this};var Q=function(t,e,i,r){if(i){var s=t[e]||(t[e]=[]),n=r.context,a=r.ctx,l=r.listening;l&&l.count++,s.push({callback:i,context:n,ctx:n||a,listening:l})}return t},W=function(t,e,i,r){try{t.on(e,i,r)}catch(s){return s}};f.off=function(t,e,i){return this._events?(this._events=E(U,this._events,t,e,{context:i,listeners:this._listeners}),this):this},f.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;for(var s=t?[t._listenId]:h.keys(r),n=0;n<s.length;n++){var a=r[s[n]];if(!a)break;a.obj.off(e,i,this),a.interop&&a.off(e,i)}return h.isEmpty(r)&&(this._listeningTo=void 0),this};var U=function(t,e,i,r){if(t){var s=r.context,n=r.listeners,a=0,l;if(!e&&!s&&!i){for(l=h.keys(n);a<l.length;a++)n[l[a]].cleanup();return}for(l=e?[e]:h.keys(t);a<l.length;a++){e=l[a];var d=t[e];if(!d)break;for(var m=[],v=0;v<d.length;v++){var c=d[v];if(i&&i!==c.callback&&i!==c.callback._callback||s&&s!==c.context)m.push(c);else{var p=c.listening;p&&p.off(e,i)}}m.length?t[e]=m:delete t[e]}return t}};f.once=function(t,e,i){var r=E(z,{},t,e,this.off.bind(this));return typeof t=="string"&&i==null&&(e=void 0),this.on(r,e,i)},f.listenToOnce=function(t,e,i){var r=E(z,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var z=function(t,e,i,r){if(i){var s=t[e]=h.once(function(){r(e,s),i.apply(this,arguments)});s._callback=i}return t};f.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),r=0;r<e;r++)i[r]=arguments[r+1];return E(X,this._events,t,void 0,i),this};var X=function(t,e,i,r){if(t){var s=t[e],n=t.all;s&&n&&(n=n.slice()),s&&F(s,r),n&&F(n,[e].concat(r))}return t},F=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],l=e[2];switch(e.length){case 0:for(;++r<s;)(i=t[r]).callback.call(i.ctx);return;case 1:for(;++r<s;)(i=t[r]).callback.call(i.ctx,n);return;case 2:for(;++r<s;)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:for(;++r<s;)(i=t[r]).callback.call(i.ctx,n,a,l);return;default:for(;++r<s;)(i=t[r]).callback.apply(i.ctx,e);return}},P=function(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0};P.prototype.on=f.on,P.prototype.off=function(t,e){var i;this.interop?(this._events=E(U,this._events,t,e,{context:void 0,listeners:void 0}),i=!this._events):(this.count--,i=this.count===0),i&&this.cleanup()},P.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]},f.bind=f.on,f.unbind=f.off,h.extend(u,f);var S=u.Model=function(t,e){var i=t||{};e||(e={}),this.preinitialize.apply(this,arguments),this.cid=h.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{});var r=h.result(this,"defaults");i=h.defaults(h.extend({},r,i),r),this.set(i,e),this.changed={},this.initialize.apply(this,arguments)};h.extend(S.prototype,f,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return u.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!h.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t=="object"?(r=t,i=e):(r={})[t]=e,i||(i={}),!this._validate(r,i))return!1;var s=i.unset,n=i.silent,a=[],l=this._changing;this._changing=!0,l||(this._previousAttributes=h.clone(this.attributes),this.changed={});var d=this.attributes,m=this.changed,v=this._previousAttributes;for(var c in r)e=r[c],h.isEqual(d[c],e)||a.push(c),h.isEqual(v[c],e)?delete m[c]:m[c]=e,s?delete d[c]:d[c]=e;if(this.idAttribute in r&&(this.id=this.get(this.idAttribute)),!n){a.length&&(this._pending=i);for(var p=0;p<a.length;p++)this.trigger("change:"+a[p],this,d[a[p]],i)}if(l)return this;if(!n)for(;this._pending;)i=this._pending,this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:!0}))},hasChanged:function(t){return t==null?!h.isEmpty(this.changed):h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):!1;var e=this._changing?this._previousAttributes:this.attributes,i={},r;for(var s in t){var n=t[s];h.isEqual(e[s],n)||(i[s]=n,r=!0)}return r?i:!1},previous:function(t){return t==null||!this._previousAttributes?null:this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=h.extend({parse:!0},t);var e=this,i=t.success;return t.success=function(r){var s=t.parse?e.parse(r,t):r;if(!e.set(s,t))return!1;i&&i.call(t.context,e,r,t),e.trigger("sync",e,r,t)},C(this,t),this.sync("read",this,t)},save:function(t,e,i){var r;t==null||typeof t=="object"?(r=t,i=e):(r={})[t]=e,i=h.extend({validate:!0,parse:!0},i);var s=i.wait;if(r&&!s){if(!this.set(r,i))return!1}else if(!this._validate(r,i))return!1;var n=this,a=i.success,l=this.attributes;i.success=function(v){n.attributes=l;var c=i.parse?n.parse(v,i):v;if(s&&(c=h.extend({},r,c)),c&&!n.set(c,i))return!1;a&&a.call(i.context,n,v,i),n.trigger("sync",n,v,i)},C(this,i),r&&s&&(this.attributes=h.extend({},l,r));var d=this.isNew()?"create":i.patch?"patch":"update";d==="patch"&&!i.attrs&&(i.attrs=r);var m=this.sync(d,this,i);return this.attributes=l,m},destroy:function(t){t=t?h.clone(t):{};var e=this,i=t.success,r=t.wait,s=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(a){r&&s(),i&&i.call(t.context,e,a,t),e.isNew()||e.trigger("sync",e,a,t)};var n=!1;return this.isNew()?h.defer(t.success):(C(this,t),n=this.sync("delete",this,t)),r||s(),n},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||K();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},h.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;return i?(this.trigger("invalid",this,i,h.extend(e,{validationError:i})),!1):!0}});var I=u.Collection=function(t,e){e||(e={}),this.preinitialize.apply(this,arguments),e.model&&(this.model=e.model),e.comparator!==void 0&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,h.extend({silent:!0},e))},Z={add:!0,remove:!0,merge:!0},k={add:!0,remove:!1},L=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i),s=e.length,n;for(n=0;n<r.length;n++)r[n]=t[n+i];for(n=0;n<s;n++)t[n+i]=e[n];for(n=0;n<r.length;n++)t[n+s+i]=r[n]};h.extend(I.prototype,f,{model:S,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return u.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:!1},e,k))},remove:function(t,e){e=h.extend({},e);var i=!h.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);return!e.silent&&r.length&&(e.changes={added:[],merged:[],removed:r},this.trigger("update",this,e)),i?r[0]:r},set:function(t,e){if(t!=null){e=h.extend({},Z,e),e.parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var i=!h.isArray(t);t=i?[t]:t.slice();var r=e.at;r!=null&&(r=+r),r>this.length&&(r=this.length),r<0&&(r+=this.length+1);var s=[],n=[],a=[],l=[],d={},m=e.add,v=e.merge,c=e.remove,p=!1,H=this.comparator&&r==null&&e.sort!==!1,gt=h.isString(this.comparator)?this.comparator:null,o,g;for(g=0;g<t.length;g++){o=t[g];var y=this.get(o);if(y){if(v&&o!==y){var $=this._isModel(o)?o.attributes:o;e.parse&&($=y.parse($,e)),y.set($,e),a.push(y),H&&!p&&(p=y.hasChanged(gt))}d[y.cid]||(d[y.cid]=!0,s.push(y)),t[g]=y}else m&&(o=t[g]=this._prepareModel(o,e),o&&(n.push(o),this._addReference(o,e),d[o.cid]=!0,s.push(o)))}if(c){for(g=0;g<this.length;g++)o=this.models[g],d[o.cid]||l.push(o);l.length&&this._removeModels(l,e)}var Y=!1,mt=!H&&m&&c;if(s.length&&mt?(Y=this.length!==s.length||h.some(this.models,function(pt,yt){return pt!==s[yt]}),this.models.length=0,L(this.models,s,0),this.length=this.models.length):n.length&&(H&&(p=!0),L(this.models,n,r??this.length),this.length=this.models.length),p&&this.sort({silent:!0}),!e.silent){for(g=0;g<n.length;g++)r!=null&&(e.index=r+g),o=n[g],o.trigger("add",o,this,e);(p||Y)&&this.trigger("sort",this,e),(n.length||l.length||a.length)&&(e.changes={added:n,removed:l,merged:a},this.trigger("update",this,e))}return i?t[0]:t}},reset:function(t,e){e=e?h.clone(e):{};for(var i=0;i<this.models.length;i++)this._removeReference(this.models[i],e);return e.previousModels=this.models,this._reset(),t=this.add(t,h.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return M.apply(this.models,arguments)},get:function(t){if(t!=null)return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;return h.isFunction(e)&&(e=e.bind(this)),i===1||h.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=h.extend({parse:!0},t);var e=t.success,i=this;return t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t),e&&e.call(t.context,i,r,t),i.trigger("sync",i,r,t)},C(this,t),this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};var i=e.wait;if(t=this._prepareModel(t,e),!t)return!1;i||this.add(t,e);var r=this,s=e.success;return e.success=function(n,a,l){i&&r.add(n,l),s&&s.call(l.context,n,a,l)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new A(this,q)},keys:function(){return new A(this,J)},entries:function(){return new A(this,B)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;e=e?h.clone(e):{},e.collection=this;var i=new this.model(t,e);return i.validationError?(this.trigger("invalid",this,i.validationError,e),!1):i},_removeModels:function(t,e){for(var i=[],r=0;r<t.length;r++){var s=this.get(t[r]);if(s){var n=this.indexOf(s);this.models.splice(n,1),this.length--,delete this._byId[s.cid];var a=this.modelId(s.attributes);a!=null&&delete this._byId[a],e.silent||(e.index=n,s.trigger("remove",s,this,e)),i.push(s),this._removeReference(s,e)}}return i},_isModel:function(t){return t instanceof S},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);i!=null&&(this._byId[i]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);i!=null&&delete this._byId[i],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy"&&this.remove(e,r),t==="change"){var s=this.modelId(e.previousAttributes()),n=this.modelId(e.attributes);s!==n&&(s!=null&&delete this._byId[s],n!=null&&(this._byId[n]=e))}}this.trigger.apply(this,arguments)}});var R=typeof Symbol=="function"&&Symbol.iterator;R&&(I.prototype[R]=I.prototype.values);var A=function(t,e){this._collection=t,this._kind=e,this._index=0},q=1,J=2,B=3;R&&(A.prototype[R]=function(){return this}),A.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===q)e=t;else{var i=this._collection.modelId(t.attributes);this._kind===J?e=i:e=[i,t]}return{value:e,done:!1}}this._collection=void 0}return{value:void 0,done:!0}};var V=u.View=function(t){this.cid=h.uniqueId("view"),this.preinitialize.apply(this,arguments),h.extend(this,h.pick(t,et)),this._ensureElement(),this.initialize.apply(this,arguments)},tt=/^(\S+)\s*(.*)$/,et=["model","collection","el","id","attributes","className","tagName","events"];h.extend(V.prototype,f,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof u.$?t:u.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=h.result(this,"events")),!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(h.isFunction(i)||(i=this[i]),!!i){var r=e.match(tt);this.delegate(r[1],r[2],i.bind(this))}}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(h.result(this,"el"));else{var t=h.extend({},h.result(this,"attributes"));this.id&&(t.id=h.result(this,"id")),this.className&&(t.class=h.result(this,"className")),this.setElement(this._createElement(h.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}});var it=function(t,e,i,r){switch(e){case 1:return function(){return t[i](this[r])};case 2:return function(s){return t[i](this[r],s)};case 3:return function(s,n){return t[i](this[r],D(s,this),n)};case 4:return function(s,n,a){return t[i](this[r],D(s,this),n,a)};default:return function(){var s=M.call(arguments);return s.unshift(this[r]),t[i].apply(t,s)}}},j=function(t,e,i,r){h.each(i,function(s,n){e[n]&&(t.prototype[n]=it(e,s,n,r))})},D=function(t,e){return h.isFunction(t)?t:h.isObject(t)&&!e._isModel(t)?rt(t):h.isString(t)?function(i){return i.get(t)}:t},rt=function(t){var e=h.matches(t);return function(i){return e(i.attributes)}},st={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},nt={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h.each([[I,st,"models"],[S,nt,"attributes"]],function(t){var e=t[0],i=t[1],r=t[2];e.mixin=function(s){var n=h.reduce(h.functions(s),function(a,l){return a[l]=0,a},{});j(e,s,n,r)},j(e,h,i,r)}),u.sync=function(t,e,i){var r=ht[t];h.defaults(i||(i={}),{emulateHTTP:u.emulateHTTP,emulateJSON:u.emulateJSON});var s={type:r,dataType:"json"};if(i.url||(s.url=h.result(e,"url")||K()),i.data==null&&e&&(t==="create"||t==="update"||t==="patch")&&(s.contentType="application/json",s.data=JSON.stringify(i.attrs||e.toJSON(i))),i.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST",i.emulateJSON&&(s.data._method=r);var n=i.beforeSend;i.beforeSend=function(d){if(d.setRequestHeader("X-HTTP-Method-Override",r),n)return n.apply(this,arguments)}}s.type!=="GET"&&!i.emulateJSON&&(s.processData=!1);var a=i.error;i.error=function(d,m,v){i.textStatus=m,i.errorThrown=v,a&&a.call(i.context,d,m,v)};var l=i.xhr=u.ajax(h.extend(s,i));return e.trigger("request",e,l,i),l};var ht={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};u.ajax=function(){return u.$.ajax.apply(u.$,arguments)};var G=u.Router=function(t){t||(t={}),this.preinitialize.apply(this,arguments),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},at=/\((.*?)\)/g,ut=/(\(\?)?:\w+/g,lt=/\*\w+/g,ct=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(G.prototype,f,{preinitialize:function(){},initialize:function(){},route:function(t,e,i){h.isRegExp(t)||(t=this._routeToRegExp(t)),h.isFunction(e)&&(i=e,e=""),i||(i=this[e]);var r=this;return u.history.route(t,function(s){var n=r._extractParameters(t,s);r.execute(i,n,e)!==!1&&(r.trigger.apply(r,["route:"+e].concat(n)),r.trigger("route",e,n),u.history.trigger("route",r,e,n))}),this},execute:function(t,e,i){t&&t.apply(this,e)},navigate:function(t,e){return u.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=h.result(this,"routes");for(var t,e=h.keys(this.routes);(t=e.pop())!=null;)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(ct,"\\$&").replace(at,"(?:$1)?").replace(ut,function(e,i){return i?e:"([^/?]+)"}).replace(lt,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(r,s){return s===i.length-1?r||null:r?decodeURIComponent(r):null})}});var w=u.History=function(){this.handlers=[],this.checkUrl=this.checkUrl.bind(this),typeof window<"u"&&(this.location=window.location,this.history=window.history)},ft=/^[#\/]|\s+$/g,dt=/^\/+|\/+$/g,ot=/#.*$/;w.started=!1,h.extend(w.prototype,f,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname),e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){return t==null&&(this._usePushState||!this._wantsHashChange?t=this.getPath():t=this.getHash()),t.replace(ft,"")},start:function(t){if(w.started)throw new Error("Backbone.history has already been started");if(w.started=!0,this.options=h.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.history&&this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(dt,"/"),this._wantsHashChange&&this._wantsPushState)if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}else this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0});if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var i=document.body,r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open(),r.document.close(),r.location.hash="#"+this.fragment}var s=window.addEventListener||function(n,a){return attachEvent("on"+n,a)};if(this._usePushState?s("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?s("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(e,i){return detachEvent("on"+e,i)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),w.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(t){return this.matchRoot()?(t=this.fragment=this.getFragment(t),h.some(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0})):!1},navigate:function(t,e){if(!w.started)return!1;(!e||e===!0)&&(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root;(t===""||t.charAt(0)==="?")&&(i=i.slice(0,-1)||"/");var r=i+t;t=t.replace(ot,"");var s=this.decodeFragment(t);if(this.fragment!==s){if(this.fragment=s,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,r);else if(this._wantsHashChange){if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;e.replace||(n.document.open(),n.document.close()),this._updateHash(n.location,t,e.replace)}}else return this.location.assign(r);if(e.trigger)return this.loadUrl(t)}},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}),u.history=new w;var vt=function(t,e){var i=this,r;return t&&h.has(t,"constructor")?r=t.constructor:r=function(){return i.apply(this,arguments)},h.extend(r,i,e),r.prototype=h.create(i.prototype,t),r.prototype.constructor=r,r.__super__=i.prototype,r};S.extend=I.extend=G.extend=V.extend=w.extend=vt;var K=function(){throw new Error('A "url" property or function must be specified')},C=function(t,e){var i=e.error;e.error=function(r){i&&i.call(e.context,t,r,e),t.trigger("error",t,r,e)}};return u})});export{_t as a};
