"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[260],{3089:(e,t,n)=>{n.d(t,{Z:()=>a});const a={changesortbtn:"PV1SR",listbox:"nX99K",sortblock:"FwWKU",changesortbtnactive:"DqPXR",articles:"V6GhI",article:"_wmvX",link:"ivLwr",avatar:"jRfFT",maintitle:"dS906",title:"xIwOt",describtion:"kVp63",loader:"c_Xlt",card:"hvP_m"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},3260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(5893),r=n(7294),i=n(1624),l=n(5923),s=n(1072),c=n(3459),o=n(8665),u=n(3089),d=n(7472),f=n(2098),h=n(8535),v=n(3766),p=n(7168),b=(0,p.hg)("entities/ServiceTHUNK",(function(e,t){return n=void 0,a=void 0,i=function(){return function(e,t){var n,a,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(l=0)),l;)try{if(n=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,a=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){l.label=s[1];break}if(6===s[0]&&l.label<r[1]){l.label=r[1],r=s;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(s);break}r[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],a=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,t.extra.api.get("/articles")];case 1:return[2,e.sent().data];case 2:return e.sent(),t.rejectWithValue("error"),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,t){function l(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,s)}c((i=i.apply(n,a||[])).next())}));var n,a,r,i})),x=(0,p.oM)({name:"articlespage",initialState:{articles:[],isloading:!1},reducers:{},extraReducers:function(e){e.addCase(b.pending,(function(e){e.isloading=!0})).addCase(b.fulfilled,(function(e,t){e.isloading=!1,e.articles=t.payload})).addCase(b.rejected,(function(e,t){e.isloading=!1}))}}),m=(x.actions,x.reducer),g=n(5998),w=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.articlesDataReducer)||void 0===t?void 0:t.isloading)&&void 0!==n&&n},j=n(7137),y=n(774),k={articlesDataReducer:m};const N=(0,r.memo)((function(){var e=(0,s.$G)(),t=e.t;return e.i18n,(0,g.v9)(w)?(0,a.jsx)(o.h,{className:u.Z.loader,justify_content:"center",children:(0,a.jsx)(j.a,{})}):(0,a.jsx)(v.F,{reducers:k,children:(0,a.jsx)(l.Z,{className:u.Z.card,children:(0,a.jsxs)("div",{className:(0,i.A)("",{},[]),children:[(0,a.jsx)(c.xv,{title:t("articles"),bold:!0,className:u.Z.maintitle}),(0,a.jsx)(o.T,{className:u.Z.articles,align_items:"normal",justify_content:"start",children:null===y.S||void 0===y.S?void 0:y.S.map((function(e){return(0,a.jsx)(o.h,{className:u.Z.article,align_items:"start",wrap:"wrap",children:(0,a.jsxs)(f.F,{to:h.$.article_page+"/"+e.idArticle,className:u.Z.link,children:[(0,a.jsx)(d.n,{src:e.img,alt:"article",className:u.Z.avatar,border:10}),(0,a.jsx)(o.T,{align_items:"start",children:(0,a.jsx)(c.xv,{text:t(e.title),bold:!0,className:u.Z.title})}),(0,a.jsx)(c.xv,{className:u.Z.describtion,text:e.subtitle})]})},e.idArticle)}))})]})})})}))}}]);