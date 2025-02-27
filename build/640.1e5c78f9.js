"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[640],{3108:(e,t,a)=>{a.d(t,{Z:()=>n});const n={title:"H8GZ5",calendar:"sI_dJ",subtitle:"S2kQs",itemtitle:"bfKfW",image:"Mh3OY",imageTitle:"FMnAM",eye:"D2AyI",imageblock:"p3cvF",imageblockTitle:"W_4PH",imageblockmain:"um9bW",blockTitle:"U0xSI",loader:"OMzqV",blockText:"qDnyY",mainCard:"gqMr8"};var r=a(4783)(e.id,{locals:!0});e.hot.dispose(r)},9640:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n,r,i=a(5893),c=a(7294),l=a(1624),s=a(5923),o=a(1072),u=a(3108),d=a(7472),h=a(3459),v=a(8665);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}const m=function(e){return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 32 32"},e),n||(n=c.createElement("path",{d:"M29.334 3H25V1a1 1 0 1 0-2 0v2h-6V1a1 1 0 1 0-2 0v2H9V1a1 1 0 1 0-2 0v2H2.667A2.666 2.666 0 0 0 0 5.666v23.667A2.667 2.667 0 0 0 2.667 32h26.667A2.666 2.666 0 0 0 32 29.333V5.666A2.665 2.665 0 0 0 29.334 3M30 29.333a.667.667 0 0 1-.666.667H2.667A.667.667 0 0 1 2 29.333V5.666C2 5.299 2.299 5 2.667 5H7v2a1 1 0 1 0 2 0V5h6v2a1 1 0 1 0 2 0V5h6v2a1 1 0 1 0 2 0V5h4.334c.367 0 .666.299.666.666z"})),r||(r=c.createElement("path",{d:"M7 12h4v3H7zM7 17h4v3H7zM7 22h4v3H7zM14 22h4v3h-4zM14 17h4v3h-4zM14 12h4v3h-4zM21 22h4v3h-4zM21 17h4v3h-4zM21 12h4v3h-4z"})))};var p,x=a(7168),b=(0,x.hg)("entities/ArticleTHUNKK",(function(e,t){return a=void 0,n=void 0,i=function(){return function(e,t){var a,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(c=0)),c;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,n=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){c.label=l[1];break}if(6===l[0]&&c.label<r[1]){c.label=r[1],r=l;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(l);break}r[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,t.extra.api.get("/articles/".concat(e))];case 1:return[2,a.sent().data];case 2:return a.sent(),t.rejectWithValue("error"),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,t){function c(e){try{s(i.next(e))}catch(e){t(e)}}function l(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(c,l)}s((i=i.apply(a,n||[])).next())}));var a,n,r,i})),g=(0,x.oM)({name:"articleSlicei",initialState:{article:{idArticle:"",title:"",subtitle:"",img:"",createdAt:"",blocks:[]},isLoading:!1},reducers:{},extraReducers:function(e){e.addCase(b.pending,(function(e){e.isLoading=!0})).addCase(b.fulfilled,(function(e,t){e.isLoading=!1,e.article=t.payload})).addCase(b.rejected,(function(e,t){e.isLoading=!1}))}}),y=(g.actions,g.reducer),T=a(3766),j=a(9250),M=a(774);!function(e){e.TEXT="TEXT",e.IMAGE="IMAGE",e.IMAGEBLOCK="IMAGEBLOCK",e.TITLE="TITLE"}(p||(p={}));var k={articleDataReducer:y};const A=(0,c.memo)((function(){var e=(0,o.$G)(),t=(e.t,e.i18n,(0,j.UO)().id),a=M.S.filter((function(e){return e.idArticle===t}));return(0,i.jsx)(T.F,{reducers:k,children:(0,i.jsx)(s.Z,{className:u.Z.mainCard,children:(0,i.jsxs)("div",{className:(0,l.A)(u.Z.ArticlePage,{},[]),children:[(0,i.jsx)(h.xv,{title:a[0].title,className:u.Z.title}),(0,i.jsx)(v.T,{justify_content:"start",children:(0,i.jsxs)(v.T,{className:u.Z.calendar,children:[(0,i.jsx)(m,{}),(0,i.jsx)(h.xv,{text:a[0].createdAt})]})}),(0,i.jsx)(h.xv,{text:a[0].subtitle,className:u.Z.subtitle}),a[0].blocks.map((function(e,t){var a,n;return e.type===p.IMAGE?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.n,{className:u.Z.image,src:e.src}),(0,i.jsx)(h.xv,{theme:h.d9.SECONDARY,text:e.imageTitle,className:u.Z.imageTitle})]}):e.type===p.IMAGEBLOCK?(0,i.jsxs)(v.T,{className:u.Z.imageblockmain,width:"100%",children:[(0,i.jsx)(h.xv,{text:e.imageTitle,className:u.Z.imageblockTitle}),(0,i.jsx)(d.n,{className:u.Z.imageblock,src:e.src})]}):e.type===p.TEXT?(0,i.jsx)(i.Fragment,{children:null===(a=e.paragraphs)||void 0===a?void 0:a.map((function(e,t){return(0,i.jsx)(h.xv,{text:e,className:u.Z.blockText},e)}))}):e.type===p.TITLE?(0,i.jsx)(i.Fragment,{children:null===(n=e.paragraphs)||void 0===n?void 0:n.map((function(e,t){return(0,i.jsx)(h.xv,{text:e,className:u.Z.blockTitle},e)}))}):void 0}))]})})})}))}}]);