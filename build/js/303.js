(self.webpackChunk_alifd_scaffold_lite_js=self.webpackChunk_alifd_scaffold_lite_js||[]).push([[303],{53303:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(67294),a=n(55563),l=n.n(a),i=n(79436);function o(e,t){return f(e)||m(e,t)||u(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,i,o;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}function f(e){if(Array.isArray(e))return e}var d=i.Z.Provider,v=function e(){var t,n=o(i.Z.useModel("list"),2),a=n[0],c=n[1];function u(){var e;return null==a||null===(e=a.weekList)||void 0===e?void 0:e.map((function(e){return r.createElement("div",{className:l().weekBox},r.createElement("div",{className:l().week},e.week),r.createElement("div",{className:l().wea},r.createElement("img",{src:"/public/icon/".concat(a.wea_img,"l.png"),alt:""})),r.createElement("div",{className:l().tem},r.createElement("span",null,e.tem),r.createElement("span",{className:l().grey},e.tem1)))}))}return r.createElement("div",{className:l().weekList},u())},y=function(){return r.createElement(d,null,r.createElement(v,null))},p=n(67001),h=n.n(p),E=n(5977);function g(e,t){return A(e)||x(e,t)||N(e,t)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,i,o;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}function A(e){if(Array.isArray(e))return e}var C=i.Z.Provider,S=function e(){var t,n=g(i.Z.useModel("list"),2),a=n[0],l=n[1],o=(0,E.k6)();console.log("sc",a);var c,u=g((0,r.useState)({num:0,timeText:""}),2),s=u[0],m=u[1];return(0,r.useEffect)((function(){var e,t=(new Date).getHours(),n;m({num:t,timeText:t>12?t-12+"pm":t+"am"})}),[]),r.createElement("div",{className:h().container},r.createElement("div",{className:h().icon},r.createElement("img",{src:"/public/icon/".concat(a.wea_img).concat(s.num>21?"d":"l",".png"),alt:""})),r.createElement("div",{className:h().back,onClick:function e(){o.push("/card")}},r.createElement("img",{src:"/public/icon/back.png",alt:""})),r.createElement("div",{className:h().city},a.city),r.createElement("div",{className:h().temperature},r.createElement("span",{className:h().num},a.tem),r.createElement("span",{className:h().sign},"\xb0C")),r.createElement("div",{className:h().info},r.createElement("div",{className:h().infoBox1},r.createElement("div",{className:h().infoIcon},r.createElement("img",{src:"/public/icon/jsl.png",alt:""})),r.createElement("div",{className:h().infoRight},"6%")),r.createElement("div",{className:h().infoBox2},r.createElement("div",{className:h().infoIcon},r.createElement("img",{src:"/public/icon/humidity.png",alt:""})),r.createElement("div",{className:h().infoRight},a.humidity)),r.createElement("div",{className:h().infoBox3},r.createElement("div",{className:h().infoIcon},r.createElement("img",{src:"/public/icon/wind.png",alt:""})),r.createElement("div",{className:h().infoRight},a.win_meter))))},k=function(){return r.createElement(C,null,r.createElement(S,null))},B=n(22533),I=n.n(B),j=n(63012);function M(e,t){return Z(e)||O(e,t)||T(e,t)||L()}function L(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,i,o;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}function Z(e){if(Array.isArray(e))return e}var R=i.Z.Provider,F=function e(){var t,n,a,l,o,c,u,s=M(i.Z.useModel("list"),2),m=s[0],f=s[1];return console.log("data h",m.hours),r.createElement("div",{className:I().container},r.createElement("div",{className:I().today},"Today"),r.createElement("div",{className:I().chart},r.createElement(j.AreaChart,{data:m.hours,autoFit:!0,xField:"hours",yField:"tem",areaStyle:{fill:"#F8F0D1",stroke:"#E4C856"},smooth:!0,line:{visible:!1},xAxis:{visible:!0,label:{visible:!0,autoHide:!0}},yAxis:{visible:!1}})),r.createElement("div",{className:I().temp},r.createElement("div",{className:I().tempBox},r.createElement("div",{className:I().num},"".concat(null===(t=m.hours[0])||void 0===t?void 0:t.tem,"\xb0C")),r.createElement("div",{className:I().time},"".concat(null===(n=m.hours[0])||void 0===n?void 0:n.hours))),r.createElement("div",{className:I().tempBox},r.createElement("div",{className:I().num},"".concat(null===(a=m.hours[13])||void 0===a?void 0:a.tem,"\xb0C")),r.createElement("div",{className:I().time},"".concat(null===(l=m.hours[13])||void 0===l?void 0:l.hours))),r.createElement("div",{className:I().tempBox},r.createElement("div",{className:I().num},"".concat(null===(o=m.hours[23])||void 0===o?void 0:o.tem,"\xb0C")),r.createElement("div",{className:I().time},"".concat(null===(c=m.hours[23])||void 0===c?void 0:c.hours)))))},U=function(){return r.createElement(R,null,r.createElement(F,null))},H=n(90991),P=n.n(H);function D(e,t){return J(e)||z(e,t)||$(e,t)||W()}function W(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,i,o;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}function J(e){if(Array.isArray(e))return e}var Q=i.Z.Provider,X=function e(){var t,n=D(i.Z.useModel("list"),2),a=n[0],l=n[1];return(0,r.useEffect)((function(){l.getSeven()}),[]),r.createElement("div",{className:P().ListContainer},r.createElement(k,null),r.createElement(U,null),r.createElement(y,null))},Y,K,V=function(){return r.createElement(Q,null,r.createElement(X,null))}},67001:function(e){e.exports={container:"Card--container--bed_1M5",icon:"Card--icon--tYz3S4A",back:"Card--back--sNAgXMW",city:"Card--city--Klg03Mm",temperature:"Card--temperature--LBBvWp1",num:"Card--num--gHnIoav",sign:"Card--sign--hHB_nlt",tag:"Card--tag--OMrMf6i",info:"Card--info--QkzhaFw",infoBox1:"Card--infoBox1--d0cki0m",infoBox2:"Card--infoBox2--cRxBxRN",infoBox3:"Card--infoBox3--cW2vRe2",infoIcon:"Card--infoIcon--tgRs7OF",infoRight:"Card--infoRight--HNBJk7Q"}},55563:function(e){e.exports={weekList:"List--weekList--ScFDDqZ",weekBox:"List--weekBox--cCns5UG",week:"List--week--iJvjdU0",wea:"List--wea--yrvK7u2",tem:"List--tem--pIb12cS",grey:"List--grey--dYOMa7z"}},22533:function(e){e.exports={container:"Temp--container--h4qjw2T",today:"Temp--today--EP4b5Mg",chart:"Temp--chart--cua9U8M",temp:"Temp--temp--eVXvr3V",tempBox:"Temp--tempBox--mAZ5sXy",num:"Temp--num--goWAo5h",time:"Temp--time--HAYsm7J"}},90991:function(e){e.exports={ListContainer:"List--ListContainer--xqQs3y8"}}}]);