import{a as f,b as q}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7RV7N453.js";import{a as P,b as Y}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PSGGD2IQ.js";import{c as M,d as g,l as X}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-KI5HOILD.js";import{b as $}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IJGABWID.js";import{a as b}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var S,_,z,O=b(()=>{"use strict";$();S={Desktop:[1024,672],"iPhone SE":[320,568],"iPhone 14 & 15 Pro Max":[430,932],"iPhone 14 & 15 Pro":[393,852],"iPhone 13 & 14":[390,844],"iPhone SE horizontal":[568,320],Tablet:[768,926]},_={default:"Desktop",phone_portrait:"iPhone SE",tablet_portrait:"Tablet"},z={Desktop:"default","iPhone SE":"phone_portrait","iPhone 14 & 15 Pro Max":"phone_portrait","iPhone 14 & 15 Pro":"phone_portrait","iPhone 13 & 14":"phone_portrait","iPhone SE horizontal":"tablet_portrait",Tablet:"tablet_portrait"}});function ct({viewportTopAndHeight:t,workspaceHeight:e}){let o=t.top<0?Math.abs(t.top):0,n=0;if(t.height<e)if(t.height-o+t.top<e)n=t.height-o;else{let r=t.top+t.height-e;n=t.height-o-r}else t.top<0?n=e:n=e-t.top;return n=n>0?n:0,n}function E(t,e,o=1,n){let r=e.x*o,c=e.y*o,i=e.w*o,l=e.h*o,s={left:r,top:c,width:i,height:l};return t&&(t!=="c"&&(t.indexOf("s")!==-1&&(s.top=n.height-c-l),t.indexOf("e")!==-1&&(s.left=n.width-r-i)),["n","c","s"].indexOf(t)!==-1&&(s.left=n.width/2-i/2+r),["w","c","e"].indexOf(t)!==-1&&(s.top=n.height/2-l/2+c),s.bottom=s.top+s.height,s.right=s.left+s.width),s}var L,C,J,I,N,Q,D,B,v,R,W,H,tt,et,it,F,V,ot,nt,st,k,rt,T,yt,lt=b(()=>{"use strict";q();X();Y();O();L=(t,e,o)=>{let n=o&&z[o]===e?o:_[e],[r,c]=S[n];return f.cover({width:t,height:1/0},{width:r,height:c})},C=t=>g[t].height||g[t].min_height,J=t=>g[t].width,I=(t,e)=>e==="phone_portrait"?t.phoneWidth||g.phone_portrait.width:e==="tablet_portrait"?g.tablet_portrait.width:t.desktopWidth||g.default.width,N=(t,e)=>{if(!t)return C(e);let o=e!=="default"?`viewport_${e}`:void 0;return o&&t[o]?.height?t[o]?.height:t.height?t.height:C(e)},Q=(t,e,o)=>({width:I(t,o),height:N(e,o)}),D=(t,{windowSize:e,viewport:o="default",zoom:n=1,device:r})=>{let c=f.mapFromViewportToDocument(e,1,n,{scrollLeft:0,scrollTop:0}),i=B(t.width,{viewport:o,windowSize:e,device:r}),l=f.center(o==="phone_portrait"&&n>=1?i:t,c),s=o==="phone_portrait"?Math.max(f.center(i,e).top,0)/n:0;return{...t,left:Math.max(l.left,0),top:Math.max(l.top,s)}},B=(t,{windowSize:e,viewport:o,device:n})=>{let r=n||M[o];return o!=="default"?L(t,o,r):e},v=(t,{viewport:e="default",windowSize:o,device:n,zoom:r=1})=>{let c=B(t.width,{windowSize:o,device:n,viewport:e});if(e==="default")return{left:0,top:0,width:c.width,height:c.height};{let i=c.width*r,l=Math.min(r<1?t.height*r:c.height,o.height);return f.center({width:i,height:l},o)}},R=(t,e="default")=>{let o=f.center({width:J(e),height:t.height},t);return f.relativeToAbsolute(o,t)},W=(t,e="default")=>{let o=e!=="default"?`viewport_${e}`:void 0,n=(r={},c)=>({w:r.w??c.w,h:r.h??c.h,x:r.x??c.x,y:r.y??c.y,fixed_position:r.sticked?void 0:r.fixed_position??c.fixed_position});return n(o?t[o]:t,t)},H=(t=[])=>{let e=t[0],{x:o,y:n,w:r,h:c}=e||{};return t.reduce((i,l)=>{let s=Math.min(i.x,l.x),h=Math.min(i.y,l.y);return i.w=Math.max(i.x+i.w,l.x+l.w)-s,i.h=Math.max(i.y+i.h,l.y+l.h)-h,i.x=s,i.y=h,i},{x:o,y:n,w:r,h:c})},tt=(t,e)=>{let o=["nw","n","ne"].includes(e),n=["w","c","e"].includes(e),r=["nw","w","sw"].includes(e),c=["n","c","s"].includes(e);return{left:r?t.left:c?t.left+t.width/2:t.left+t.width,top:o?t.top:n?t.top+t.height/2:t.top+t.height}},et=(t,e,o={})=>{let{viewport:n}=e,r=t.map(c=>({...W(c,n),...o}));return V(r,e)},it=(t,e,o)=>{let{workspaceSize:n,viewport:r="default",windowSize:c,device:i,zoom:l=1}=o,s=v(n,{viewport:r,windowSize:c,device:i,zoom:l}),{width:h,height:d,left:p,top:u}=E(e,t,l,s);return f.relativeToAbsolute({width:h,height:d,left:p,top:u},s)},F=(t,e)=>{let{workspaceSize:o,viewport:n,windowSize:r,device:c,zoom:i=1,scroller:l}=e,s=D(o,{viewport:n,windowSize:r,device:c,zoom:i}),h={width:t.w,height:t.h,left:t.x,top:t.y},d=R(s,n),p=f.relativeToAbsolute(h,d);return f.mapFromDocumentToViewport(p,1,i,l)},V=(t,e)=>{if(t.reduce((n,r)=>n!==r.fixed_position?"mixed":n,t[0]?.fixed_position)){let n=t.map(s=>s.fixed_position?it(s,s.fixed_position,e):F(s,e)),{left:r,top:c,width:i,height:l}=P.getBoundingBoxOfBoxes(n);return{left:r,top:c,width:i,height:l}}else{let n=t.length===1?t[0]:H(t);return F(n,e)}},ot=(t,e)=>{let o=t.map(l=>{let{left:s,top:h,width:d,height:p}=V([l],e),u=l.angle??0,a=l.fixed_position,x=Math.cos(u*Math.PI/180),m=Math.sin(u*Math.PI/180);return P.calcBoundingBox({left:s,top:h,width:d,height:p,cosAngle:x,sinAngle:m},a,!0)}),{left:n,top:r,width:c,height:i}=P.getBoundingBoxOfBoxes(o);return{left:n,top:r,width:c,height:i}},nt=(t,e,{workspaceSize:o,windowSize:n,viewport:r="default",zoom:c=1,scroller:i={scrollLeft:0,scrollTop:0},device:l})=>{if(e){let s=v(o,{viewport:r,windowSize:n,device:l,zoom:c}),h=["nw","n","ne"].includes(e),d=["w","c","e"].includes(e),p=["nw","w","sw"].includes(e),u=["n","c","s"].includes(e),a=["ne","e","se"].includes(e),x=["sw","s","se"].includes(e),m={left:p?t.left:u?t.left+t.width/2:t.left+t.width,top:h?t.top:d?t.top+t.height/2:t.top+t.height},w={left:p?s.left:u?s.left+s.width/2:s.left+s.width,top:h?s.top:d?s.top+s.height/2:s.top+s.height},y=f.absoluteToRelative(m,w),K=a?y.left*-1:y.left,j=x?y.top*-1:y.top,{left:A,top:G,width:U,height:Z}=f.mapFromViewportToDocument({left:K,top:j,width:t.width,height:t.height},1,c,{scrollLeft:0,scrollTop:0});return{fixed_position:e,x:A,y:G,w:U,h:Z}}else{let s=D(o,{viewport:r,windowSize:n,device:l,zoom:c}),h=f.mapFromViewportToDocument(t,1,c,i),d=R(s,r),{left:p,top:u,width:a,height:x}=f.absoluteToRelative(h,d);return{x:p,y:u,w:a,h:x}}},st=(t,{workspaceSize:e,windowSize:o,viewport:n="default",zoom:r=1,device:c})=>{let i=W(t,n),l=i.fixed_position;if(l){let s=["nw","n","ne"].includes(l),h=["w","c","e"].includes(l),d=["nw","w","sw"].includes(l),p=["n","c","s"].includes(l),u=["ne","e","se"].includes(l),a=["sw","s","se"].includes(l),x=T.mapDeviceToWindow(e,{viewport:n,windowSize:o,device:c,zoom:r}),m=T.getFixedOrigin(x,l),w=f.invertPosition(m,o);return{position:"fixed",left:d||p?m.left+i.x+"px":"",top:s||h?m.top+i.y+"px":"",right:u?w.right+i.x+"px":"",bottom:a?w.bottom+i.y+"px":"","margin-left":p?-i.w/2+"px":"","margin-top":h?-i.h/2+"px":""}}else return{position:"absolute",left:t.x+"px",top:t.y+"px"}},k=({boxCoordinates:t,workspacePosition:e,windowSize:o,viewportType:n,scroller:r,zoom:c})=>{let i={x:t.x,y:t.y};if(!t.fixed_position)return{...i};if(n==="default"){let l=o.width/c,s=o.height/c,h=e.left,d=e.left+l/2-t.w/2,p=e.left+l-t.w,u=e.top,a=e.top+s/2-t.h/2,x=e.top+s-t.h;["nw","w","sw"].includes(t.fixed_position)?i.x=i.x+h:["n","c","s"].includes(t.fixed_position)?i.x=i.x+d:["ne","e","se"].includes(t.fixed_position)&&(i.x=p-i.x),["nw","n","ne"].includes(t.fixed_position)?i.y+=u:["e","c","w"].includes(t.fixed_position)?i.y+=a:["sw","s","se"].includes(t.fixed_position)&&(i.y=x-i.y)}else if(["phone_portrait","tablet_portrait"].includes(n)){let l=r.scrollLeft/c,s=r.scrollTop/c,h=o.width/c,d=o.height/c,p=l,u=e.left+h/2-t.w/2,a=e.left*2+h-t.w,x=s,m=e.top+d/2-t.h/2,w=e.top*2+d-t.h;["nw","w","sw"].includes(t.fixed_position)?i.x=i.x+p:["n","c","s"].includes(t.fixed_position)?i.x=i.x+u:["ne","e","se"].includes(t.fixed_position)&&(i.x=a-i.x-l),["nw","n","ne"].includes(t.fixed_position)?i.y=i.y+x:["e","c","w"].includes(t.fixed_position)?i.y+=m:["sw","s","se"].includes(t.fixed_position)&&(i.y=w-i.y-s)}return{...i}},rt=({boxCoordinates:t,workspaceBox:e,windowSize:o,viewportType:n,scroller:r,zoom:c})=>{let i={x:t.x,y:t.y},l=(e.width-g[n].width)/2;return i=k({workspacePosition:{left:e.left,top:e.top},boxCoordinates:t,scroller:r,windowSize:o,viewportType:n,zoom:c}),i.x=i.x-l,{...i}};T={fitToDevice:L,fixedToWorkspace:k,fixedToOrigin:rt,mapDeviceToWindow:v,getPageWidth:I,getWorkspaceSize:Q,getDeviceSize:B,getCoordinateBox:W,getFixedOrigin:tt,getHeightOfVisiblePartOfWorkspace:ct,mapWorkspaceToDocument:D,mapWidgetToWindow:et,coordinatesToClientBox:V,coordinatesToClientBoundingBox:ot,mapWidgetToWorkspace:nt,mapWidgetToCss:st,getFixedPositionBox:E},yt=T});export{_ as a,z as b,O as c,rt as d,yt as e,lt as f};
