(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(t,e,r){"use strict";var n=r(11),o=r(5),c=r(3),l=r(111),f=r(18),N=r(13),I=r(206),v=r(38),A=r(81),m=r(205),_=r(4),h=r(82).f,E=r(32).f,d=r(17).f,V=r(294),C=r(295).trim,w="Number",y=o.Number,S=y.prototype,x=o.TypeError,M=c("".slice),k=c("".charCodeAt),H=function(t){var e=m(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,o,c,l,f,code,N=m(t,"number");if(A(N))throw x("Cannot convert a Symbol value to a number");if("string"==typeof N&&N.length>2)if(N=C(N),43===(e=k(N,0))||45===e){if(88===(r=k(N,2))||120===r)return NaN}else if(48===e){switch(k(N,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+N}for(l=(c=M(N,2)).length,f=0;f<l;f++)if((code=k(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+N};if(l(w,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var F,O=function(t){var e=arguments.length<1?0:y(H(t)),r=this;return v(S,r)&&_((function(){V(r)}))?I(Object(e),r,O):e},R=n?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;R.length>z;z++)N(y,F=R[z])&&!N(O,F)&&d(O,F,E(y,F));O.prototype=S,S.constructor=O,f(o,w,O,{constructor:!0})}},294:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},295:function(t,e,r){var n=r(3),o=r(26),c=r(14),l=r(296),f=n("".replace),N="["+l+"]",I=RegExp("^"+N+N+"*"),v=RegExp(N+N+"*$"),A=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,I,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:A(1),end:A(2),trim:A(3)}},296:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},319:function(t,e,r){"use strict";r.r(e);r(293);var n={name:"BriefcaseAccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon briefcase-account-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20,6H16V4A2,2 0 0,0 14,2H10C8.89,2 8,2.89 8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8A2,2 0 0,0 20,6M10,4H14V6H10V4M12,9A2.5,2.5 0 0,1 14.5,11.5A2.5,2.5 0 0,1 12,14A2.5,2.5 0 0,1 9.5,11.5A2.5,2.5 0 0,1 12,9M17,19H7V17.75C7,16.37 9.24,15.25 12,15.25C14.76,15.25 17,16.37 17,17.75V19Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);