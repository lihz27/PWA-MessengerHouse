(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(e,t,n){__NEXT_REGISTER_PAGE("/browser",function(){return e.exports=n(346),{page:e.exports.default}})},345:function(e,t,n){"use strict";function o(){"Notification"in window&&"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){console.log("this is reg",e);var t={body:"First notification!",tag:"id1",icon:"static/img/apple-touch-icon-120x120.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1},actions:[{action:"explore",title:"Go to the site",icon:"static/img/apple-touch-icon-120x120.png"},{action:"close",title:"Close the notification",icon:"static/img/apple-touch-icon-120x120.png"}]};e.showNotification("Hello world!",t)})}n.d(t,"b",function(){return o}),t.a=function(){"Notification"in window?Notification.requestPermission(function(e){console.log("Notification permission status:",e)}):console.log("Notifications not supported in this browser")}},346:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(20),a=n(42),c=n(345);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,o,i,r,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=l(t).call(this,e),n=!i||"object"!==u(i)&&"function"!=typeof i?p(o):i,r=p(p(n)),c=function(){var e=document.querySelector(".home-profile-image").getAttribute("src"),t=0,o=Number(window.location.pathname.replace(/\/browser\//,""));o&&o>=0&&o<100&&(t=o);for(var i=0,r=n.props.houses.length;i<r;++i)if(n.props.houses[i].house_id===t)return;n.props.addHouse(t,n.props.user.username,e)},(a="addFavorite")in r?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[a]=c,n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,i.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){Object(c.a)()}},{key:"componentWillUnmount",value:function(){document.getElementById("add-favorites").removeEventListener("click",this.addFavorite)}},{key:"render",value:function(){return i.a.createElement("div",{id:"browse-homes"},i.a.createElement("a",{href:"/messenger"},"Messenger"),i.a.createElement("div",{id:"top-app"}),i.a.createElement("div",{id:"main"}),i.a.createElement("style",null,"\n            #main {\n              margin-left: -105px;\n              transform: scale(.5);\n            }\n            #browse-homes {\n              max-width: 100%;\n              max-height: 100%;\n            }\n            html.mdl-js {\n              background: white !important;\n            }\n          @media (max-width: 320px) {\n\n            }\n\n          "))}}])&&s(n.prototype,o),r&&s(n,r),t}();t.default=Object(r.b)(function(e){return{houses:e.houses,user:e.user}},{addHouse:a.a})(m)}},[[301,1,0]]]);