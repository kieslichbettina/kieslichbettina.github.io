(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{303:function(e,t,r){"use strict";r.r(t);r(21),r(30),r(39),r(52),r(41),r(19),r(83),r(40),r(84);var o=r(36),n=r(304),c=r(110),l=r(80);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"PortfolioPage",props:["isActive","setPortfolioDetails"],components:{PortfolioCard:n.default,PageHeader:c.default},data:function(){return{image:"portfolio-card.jpg"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["repos"]))},O=d,v=r(9),component=Object(v.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page portfoliopage",class:{"active-page":e.isActive,"animate__animated animate__fadeInUp":e.isActive}},[t("div",{staticClass:"page-wrapper"},[t("PageHeader",{attrs:{title:"my portfolio",secondaryTitle:"works"}}),e._v(" "),t("section",[t("div",[t("div",[t("ul",{staticClass:"projects-list"},e._l(e.repos,(function(r){return t("li",{key:r.id,on:{click:function(t){return e.setPortfolioDetails(r)}}},[t("PortfolioCard",{attrs:{avatar:e.image,title:r.name,description:r.description}})],1)})),0)])])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:r(110).default})}}]);