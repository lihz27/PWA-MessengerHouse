(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(e,t,n){__NEXT_REGISTER_PAGE("/browser",function(){return e.exports=n(345),{page:e.exports.default}})},345:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(20),a=n(42);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var n,o,r,i,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=u(t).call(this,e),n=!r||"object"!==s(r)&&"function"!=typeof r?f(o):r,i=f(f(n)),c=function(){var e=document.querySelector(".home-profile-image").getAttribute("src"),t=0,o=Number(window.location.pathname.replace(/\/browser\//,""));o&&o>=0&&o<100&&(t=o);for(var r=0,i=n.props.houses.length;r<i;++r)if(n.props.houses[r].house_id===t)return;n.props.addHouse(t,n.props.user.username,e)},(a="addFavorite")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){"Notification"in window?Notification.requestPermission(function(e){console.log("Notification permission status:",e)}):console.log("Notifications not supported in this browser")}},{key:"componentWillUnmount",value:function(){document.getElementById("add-favorites").removeEventListener("click",this.addFavorite)}},{key:"render",value:function(){return"Notification"in window&&"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){console.log("this is reg",e);var t={body:"First notification!",tag:"id1",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1},actions:[{action:"explore",title:"Go to the site"},{action:"close",title:"Close the notification"}]};e.showNotification("Hello world!",t)}),r.a.createElement("div",{id:"browse-homes"},r.a.createElement("a",{href:"/messenger"},"Messenger"),r.a.createElement("div",{id:"top-app"}),r.a.createElement("div",{id:"main"}),r.a.createElement("style",null,"\n            #main {\n              margin-left: -105px;\n              transform: scale(.5);\n            }\n            #browse-homes {\n              max-width: 100%;\n              max-height: 100%;\n            }\n            html.mdl-js {\n              background: white !important;\n            }\n          @media (max-width: 320px) {\n\n            }\n\n          "))}}])&&c(n.prototype,o),i&&c(n,i),t}();t.default=Object(i.b)(function(e){return{houses:e.houses,user:e.user}},{addHouse:a.a})(p)}},[[301,1,0]]]);