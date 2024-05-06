"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[640],{3108:(e,t,n)=>{n.d(t,{Z:()=>r});const r={title:"H8GZ5",calendar:"sI_dJ",subtitle:"S2kQs",itemtitle:"bfKfW",image:"Mh3OY",imageTitle:"FMnAM",eye:"D2AyI",loader:"OMzqV",blockText:"qDnyY",mainCard:"gqMr8"};var a=n(4783)(e.id,{locals:!0});e.hot.dispose(a)},9640:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r,a,i=n(5893),c=n(7294),s=n(1624),l=n(5923),o=n(1072),u=n(3108),d=n(7472),h=n(3459),f=n(8665);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}const p=function(e){return c.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 32 32"},e),r||(r=c.createElement("path",{d:"M29.334 3H25V1a1 1 0 1 0-2 0v2h-6V1a1 1 0 1 0-2 0v2H9V1a1 1 0 1 0-2 0v2H2.667A2.666 2.666 0 0 0 0 5.666v23.667A2.667 2.667 0 0 0 2.667 32h26.667A2.666 2.666 0 0 0 32 29.333V5.666A2.665 2.665 0 0 0 29.334 3M30 29.333a.667.667 0 0 1-.666.667H2.667A.667.667 0 0 1 2 29.333V5.666C2 5.299 2.299 5 2.667 5H7v2a1 1 0 1 0 2 0V5h6v2a1 1 0 1 0 2 0V5h6v2a1 1 0 1 0 2 0V5h4.334c.367 0 .666.299.666.666z"})),a||(a=c.createElement("path",{d:"M7 12h4v3H7zM7 17h4v3H7zM7 22h4v3H7zM14 22h4v3h-4zM14 17h4v3h-4zM14 12h4v3h-4zM21 22h4v3h-4zM21 17h4v3h-4zM21 12h4v3h-4z"})))};var x,m=n(7168),b=(0,m.hg)("entities/ArticleTHUNKK",(function(e,t){return n=void 0,r=void 0,i=function(){return function(e,t){var n,r,a,i,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){c.label=s[1];break}if(6===s[0]&&c.label<a[1]){c.label=a[1],a=s;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(s);break}a[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,t.extra.api.get("/articles/".concat(e))];case 1:return[2,n.sent().data];case 2:return n.sent(),t.rejectWithValue("error"),[3,3];case 3:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function c(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(c,s)}l((i=i.apply(n,r||[])).next())}));var n,r,a,i})),g=(0,m.oM)({name:"articleSlicei",initialState:{article:{idArticle:"",title:"",subtitle:"",img:"",createdAt:"",blocks:[]},isLoading:!1},reducers:{},extraReducers:function(e){e.addCase(b.pending,(function(e){e.isLoading=!0})).addCase(b.fulfilled,(function(e,t){e.isLoading=!1,e.article=t.payload})).addCase(b.rejected,(function(e,t){e.isLoading=!1}))}}),y=(g.actions,g.reducer),j=n(3766),M=n(9250),w=n(4587);!function(e){e.TEXT="TEXT",e.IMAGE="IMAGE"}(x||(x={}));var A={articleDataReducer:y};const T=(0,c.memo)((function(){var e=(0,o.$G)(),t=(e.t,e.i18n,(0,M.UO)().id),n=w.S.filter((function(e){return e.idArticle===t}));return(0,i.jsx)(j.F,{reducers:A,children:(0,i.jsx)(l.Z,{className:u.Z.mainCard,children:(0,i.jsxs)("div",{className:(0,s.A)(u.Z.ArticlePage,{},[]),children:[(0,i.jsx)(h.xv,{title:n[0].title,className:u.Z.title}),(0,i.jsx)(f.T,{justify_content:"start",children:(0,i.jsxs)(f.T,{className:u.Z.calendar,children:[(0,i.jsx)(p,{}),(0,i.jsx)(h.xv,{text:n[0].createdAt})]})}),(0,i.jsx)(h.xv,{text:n[0].subtitle,className:u.Z.subtitle}),n[0].blocks.map((function(e,t){var n;return e.type===x.IMAGE?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.n,{className:u.Z.image,src:e.src}),(0,i.jsx)(h.xv,{theme:h.d9.SECONDARY,text:e.imageTitle,className:u.Z.imageTitle})]}):e.type===x.TEXT?(0,i.jsx)(i.Fragment,{children:null===(n=e.paragraphs)||void 0===n?void 0:n.map((function(e,t){return(0,i.jsx)(h.xv,{text:e,className:u.Z.blockText},e)}))}):void 0}))]})})})}))}}]);