(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dqaN:function(t,e,r){"use strict";var a,n,o,i,s,l,c,p,b,d,u,x,g,m,f,h,w,j,O=r("MUpH"),v=r("wTIg"),y=(r("E9XD"),r("Z86j")),k=r("lYvG"),z=r("qKvR"),L=r("sczP"),q=r("Wbzz"),A=r("q1tI"),D=r("kx/E");e.a=function(t){var e=t.articles,r=t.alwaysShowAllDetails;if(!e)return null;var a=1===e.length,n=Object(A.useContext)(D.a),o=n.gridLayout,i=void 0===o?"tiles":o,s=n.hasSetGridLayout,l=n.getGridLayout,c=e.reduce((function(t,e,r,a){return r%2==0&&t.push(a.slice(r,r+2)),t}),[]);return Object(A.useEffect)((function(){return l()}),[]),Object(z.jsx)(Y,{style:{opacity:s?1:0},alwaysShowAllDetails:r},c.map((function(t,e){var r=e%2!=0,n=e%2!=1;return Object(z.jsx)(T,{key:e,gridLayout:i,hasOnlyOneArticle:a,reverse:r},Object(z.jsx)(S,{article:t[0],narrow:r}),Object(z.jsx)(S,{article:t[1],narrow:n}))})))};var S=function(t){var e=t.article,r=t.narrow;if(!e)return null;var a=Object(A.useContext)(D.a).gridLayout,n=r&&e.title.length>35,o=r?e.hero.narrow:e.hero.regular,i=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(z.jsx)(U,{to:e.slug,"data-a11y":"false"},Object(z.jsx)(H,{gridLayout:a},Object(z.jsx)(K,{narrow:r,gridLayout:a},i?Object(z.jsx)(k.c,{src:o}):Object(z.jsx)(k.a,null)),Object(z.jsx)("div",null,Object(z.jsx)(M,{dark:!0,hasOverflow:n,gridLayout:a},e.title),Object(z.jsx)(N,{narrow:r,hasOverflow:n,gridLayout:a},e.excerpt),Object(z.jsx)(P,null,e.date," · ",e.timeToRead," min read"))))},E=Object(z.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",L.a.phablet(a||(a=Object(O.a)(["\n    -webkit-line-clamp: 3;\n  "]))),""),G={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},Y=Object(v.a)("div",{target:"ewq8szl0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&G}),""),C=function(t){return Object(z.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",L.a.desktop_medium(n||(n=Object(O.a)(["\n    grid-template-columns: 1fr 1fr;\n  "])))," ",L.a.tablet(o||(o=Object(O.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]))),"")},I=function(t){return Object(z.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",L.a.desktop(i||(i=Object(O.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "])))," ",L.a.tablet(s||(s=Object(O.a)(["\n    grid-template-columns: 1fr;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",L.a.phablet(l||(l=Object(O.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))),"")},J=function(t){return Object(z.css)("position:relative;",L.a.tablet(c||(c=Object(O.a)(["\n    margin-bottom: 60px;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",L.a.phablet(p||(p=Object(O.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))),"")},R=function(t){return Object(z.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},T=Object(v.a)("div",{target:"ewq8szl1"})((function(t){return"tiles"===t.gridLayout?C:R}),""),H=Object(v.a)("div",{target:"ewq8szl2"})((function(t){return"rows"===t.gridLayout?I:J}),""),K=Object(v.a)("div",{target:"ewq8szl3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",L.a.tablet(b||(b=Object(O.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "])))," ",L.a.phablet(d||(d=Object(O.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]))),""),M=Object(v.a)(y.a.h2,{target:"ewq8szl4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",E,";",L.a.desktop(u||(u=Object(O.a)(["\n    margin-bottom: 15px;\n  "])))," ",L.a.tablet(x||(x=Object(O.a)(["\n    font-size: 24px;  \n  "])))," ",L.a.phablet(g||(g=Object(O.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]))),""),N=Object(v.a)("p",{target:"ewq8szl5"})(E,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",L.a.desktop(m||(m=Object(O.a)(["\n    display: -webkit-box;\n  "])))," ",L.a.phablet(f||(f=Object(O.a)(["\n    margin-bottom: 15px;\n  "])))," ",L.a.phablet(h||(h=Object(O.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]))),""),P=Object(v.a)("div",{target:"ewq8szl6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",L.a.phablet(w||(w=Object(O.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]))),""),U=Object(v.a)(q.Link,{target:"ewq8szl7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",K,",&:focus ",K,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",L.a.phablet(j||(j=Object(O.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "])),K),"")}}]);
//# sourceMappingURL=9d86c5a1-1255b43f80190a6bbbe4.js.map