"use strict";(self.webpackChunk_alifd_scaffold_lite_js=self.webpackChunk_alifd_scaffold_lite_js||[]).push([[517],{74517:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(67294),a={container:"Card--container--TLBx1Lc",card:"Card--card--QM9EyEF",icon:"Card--icon--Ryw3zqK",button:"Card--button--XUOeyNw",info:"Card--info--NT1gZYJ",infoBox:"Card--infoBox--qL4fB7B",infoLeft:"Card--infoLeft--PXILuRb",infoRight:"Card--infoRight--Y97J5GS",city:"Card--city--a6t1Req",cardContent:"Card--cardContent--P1B_odI",leftBox:"Card--leftBox--mBBWh61",temperature:"Card--temperature--AtVn_T4",num:"Card--num--vmHoWcP",sign:"Card--sign--sZYzDA1",timeInfo:"Card--timeInfo--OQUF8du",tag:"Card--tag--XSe8mPq",rightBox:"Card--rightBox--iEmHYbR",wind:"Card--wind--kdly0XL",cloud:"Card--cloud--chK3tTY"},i=n(79436),l=n(5977);function c(e,t){return d(e)||u(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,i=!1,l,c;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return r}}function d(e){if(Array.isArray(e))return e}var f=i.Z.Provider,v=function e(){var t,n=c(i.Z.useModel("list"),2),o=n[0],m=n[1],s=(0,l.k6)(),u,d=c((0,r.useState)({num:0,timeText:""}),2),f=d[0],v=d[1];return(0,r.useEffect)((function(){var e,t=(new Date).getHours(),n;v({num:t,timeText:t>12?t-12+"pm":t+"am"})}),[]),r.createElement("div",{className:a.container},r.createElement("div",{className:a.card},r.createElement("div",{className:a.icon},r.createElement("img",{src:"https://riddle1981.github.io/weather/build/icon/".concat(o.wea_img).concat(f.num>21?"d":"l",".png"),alt:""})),r.createElement("div",{className:a.city},o.city),r.createElement("div",{className:a.cardContent},r.createElement("div",{className:a.leftBox},r.createElement("div",{className:a.temperature},r.createElement("span",{className:a.num},o.tem),r.createElement("span",{className:a.sign},"\xb0C")),r.createElement("div",{className:a.timeInfo},r.createElement("span",{className:a.date},o.week,","),r.createElement("span",{className:a.time},f.timeText))),r.createElement("div",{className:a.rightBox},r.createElement("div",{className:a.wind},o.wea),r.createElement("div",{className:a.cloud},o.win))),r.createElement("div",{className:a.button,onClick:function e(){s.push("/list")}},"\u8be6\u60c5")),r.createElement("div",{className:a.info},r.createElement("div",{className:a.infoBox},r.createElement("div",{className:a.infoLeft},"\u964d\u6c34\u91cf"),r.createElement("div",{className:a.infoRight},"6%")),r.createElement("div",{className:a.infoBox},r.createElement("div",{className:a.infoLeft},"\u6e7f\u5ea6"),r.createElement("div",{className:a.infoRight},o.humidity)),r.createElement("div",{className:a.infoBox},r.createElement("div",{className:a.infoLeft},"\u98ce\u901f"),r.createElement("div",{className:a.infoRight},o.win_meter))),r.createElement("div",{className:a.navBar}))},y=function(){return r.createElement(f,null,r.createElement(v,null))},E="Home--homeContainer--kDaf2p8",h="Home--logo--ZIIxvwV";function g(e,t){return w(e)||C(e,t)||N(e,t)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,i=!1,l,c;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return r}}function w(e){if(Array.isArray(e))return e}var x=i.Z.Provider,B=function e(){var t,n=g(i.Z.useModel("list"),2),a=n[0],l=n[1];return(0,r.useEffect)((function(){l.getSeven()}),[]),r.createElement("div",{className:E},r.createElement("div",{className:h},r.createElement("img",{src:"https://riddle1981.github.io/weather/build/icon/logo.png",alt:""})),r.createElement(y,null))},A,S,I=function(){return r.createElement(x,null,r.createElement(B,null))}}}]);