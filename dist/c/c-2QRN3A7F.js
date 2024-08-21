import{a,d as h}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-3GOT4LKE.js";import{v as u}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6KVCTNLD.js";import{e as r,i as c}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VMLLFM4X.js";import{c as l,d as p}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LA3FLWVR.js";import{C as o,E as b}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import{a as d}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";function f({size:t,bgColor:g,color:e}){let n=typeof t=="number"?`${t}px`:t&&i[t]?i[t]:i.big,m=t==="big"||t==="medium"?"50%":"100%";return o(a,{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:g||(t==="big"||t==="medium"?"tomato":"transparent"),height:n,width:n,borderRadius:"100%",children:o(a,{height:m,width:m,border:"2px solid",borderRadius:"100%",css:l`
          animation: ${x} 2s infinite linear;
        `,borderColor:e?`${e} ${e} transparent transparent`:t==="big"||t==="medium"||typeof t=="number"?"white white transparent transparent":`${r.light.tomato} ${r.light.tomato} transparent transparent`})})}var x,i,y,s=d(()=>{"use strict";h();u();c();b();x=p`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`,i={small:22,medium:48,big:56};f.defaultProps={size:"big"};y=f});var $=d(()=>{"use strict";s();s()});export{y as a,$ as b};
