import{Z as S,_ as L,ca as _,gb as E,hb as P,ib as R,qc as oe}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IWCOVASN.js";import{i as ee}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-YM5H3BT6.js";import{f as g,w as X}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-MVDJARLS.js";import{a as $,b as J}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LUPS5IAT.js";import{e as N,i as V,m as ne}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LQZC4O6P.js";import{a as O,d as ie}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-3GOT4LKE.js";import{c,g as re}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-ZWSDUWXW.js";import{g as C,h as Y}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CYBVJMMN.js";import{a as h,c as I}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-FFSQZJFP.js";import{r as T,v}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6KVCTNLD.js";import{b as D,i as te}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VMLLFM4X.js";import{c as B}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LA3FLWVR.js";import{C as a,E as f}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import{a as H}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7ZY2VSVL.js";import{a as k,d as G}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var W,ae,se,Ce,le=k(()=>{"use strict";W=G(H());ie();v();te();Y();ee();X();J();I();re();ne();f();ae=4,se=(0,W.forwardRef)(({textDirection:t,autosize:r,columns:e,verticalAlign:u,bgColor:d,shouldShowSelectionBorder:x,scale:i,viewport:n,viewerOptions:m,children:U,useBaseline:j,isEditMode:z,selectionColor:s,disableSelectionHighlight:y,pointerEvents:A},F)=>{let{bg:K,selectionBg:b,selectionTextColor:w}=C(()=>{let o=d?g(d):void 0,Q=o?`rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`:void 0,l=s?.backgroundColor?g(s.backgroundColor):void 0,Z=y?"transparent":l?`rgba(${l.r}, ${l.g}, ${l.b}, ${l.a})`:void 0,p=s?.textColor?g(s.textColor):void 0,q=y?"inherit":p?`rgba(${p.r}, ${p.g}, ${p.b}, ${p.a})`:void 0;return{bg:Q,selectionBg:Z,selectionTextColor:q}},[d,y,s]);return a(O,{display:"flex",ref:F,height:!r||e&&e.count>1?"100%":"auto",flexDirection:"column",justifyContent:!u||u==="top"?"flex-start":"flex-end",backgroundColor:K,pointerEvents:A,css:B`
          // Цвет рамки выделенного блока
          --editor-border-color: ${x?D.blue:"transparent"};

          direction: ${t};

          // При включенных колонках обязательно устанавливаем hidden, чтобы большое кол-во контента
          // не выходило за пределы контейнера
          overflow: ${e&&e.count>1||!r?"hidden":"visible"};
          ${z?`padding: 0 ${ae}px;`:""};

          // Для вьювера
          // Сбрасывает зум у текста, и вместо него применяет трансформ.
          // Трансформ вместо зума нужен из-за того, что если коэффициент зума * line-height = дробное число,
          // высота строки рендерится с погрешностью,
          // и через несколько строчек начинает заметно не совпадать с линейками, выставленными по высоте строки.
          // (Высота самого блока текста при этом рендерится правильно. То же самое в конструкторе)
          // При трансформе высота строки рассчитывается правильно.
          ${i&&$.isOnForRatio(n||"default",i,m||{})&&$.isCSSZoom()?`
              width: ${`${1/i*100}%`};
              height: ${`${1/i*100}%`};
              zoom: ${1/i};
              transform: ${`scale(${i})`};
              transform-origin: left top;
            `:""}

          // Same for the 'viewer.next'
          ${h("viewer.next")?N(V({width:`calc(1 / ${c`${o=>o.pageScale}`} * 100%)`,height:`calc(1 / ${c`${o=>o.pageScale}`} * 100%)`,zoom:`calc(1 / ${c`${o=>o.pageScale}`})`,transform:`scale(${c`${o=>o.pageScale}`})`,transformOrigin:"left top"})):""}

          // Колонки
          & > div {
            // т.к. обертка является флекс элементом, то колонки не будут работать на этом элементе
            // поэтому задаем стиль внутреннему компоненту (draft-root)
            ${e&&e.count>1&&`
            min-height: 100%;
            column-fill: auto;
            column-count: ${e.count};
            column-gap: ${e.gap}px;
          `}
          }

          // Custom text selection
          *::selection {
            ${w?`color: ${w};`:""}
            ${b?`background-color: ${b};`:""}
          }

          // Все что ниже: унаследовано из старого виджета
          .public-DraftEditor-content {
            white-space: normal !important;
            overflow-wrap: break-word;
          }

          .text-viewer {
            overflow-wrap: break-word;
            white-space: normal;
          }

          ${j?"":`
          .text-viewer span,
          .text-viewer a,
          & div[data-contents='true'] span,
          & div[data-contents='true'] a {
            line-height: inherit;
            vertical-align: top;
          }
        `}

          & div[data-contents='true'],
          .text-viewer {
            // Отключаем лигатуры, которые включены по-умолчанию
            font-feature-settings: 'liga' 0, 'rlig' 0, 'dlig' 0, 'hlig' 0, 'smcp' 0;
            -webkit-nbsp-mode: normal;
            -webkit-line-break: after-white-space;
            white-space: pre-wrap;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
        `,children:U})}),Ce=se});function pe({children:t,type:r,...e}){return r==="ordered-list-item"?a("ol",{style:{counterReset:L},...e,children:t}):a("ul",{...e,children:t})}var Ne,Ve,We,M,Me,ce=k(()=>{"use strict";v();oe();_();f();Ne=T(({children:t,...r})=>a(pe,{...r,children:a("li",{children:t})}))``,Ve=t=>t==="ordered-list-item"||t==="unordered-list-item",We=({editorState:t,block:r})=>{let e=E({editorState:t,block:r,key:S});return typeof e=="string"?e:""},M=({block:t,editorState:r,styleName:e})=>P({editorState:r,block:t,key:S,value:e}),Me=({style:t,currentStyle:r,editorState:e})=>R(e).reduce((x,i)=>{let n=x,m=n.getCurrentContent().getBlockForKey(i);return t===null?n=M({editorState:n,block:m,styleName:void 0}):t.name!==r&&(n=M({editorState:n,block:m,styleName:t.name})),n},e)});export{ae as a,Ce as b,le as c,pe as d,Ne as e,Ve as f,We as g,Me as h,ce as i};
