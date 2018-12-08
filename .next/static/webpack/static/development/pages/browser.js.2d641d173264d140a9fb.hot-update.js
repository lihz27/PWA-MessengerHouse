webpackHotUpdate("static/development/pages/browser.js",{

/***/ "./utils/notification.js":
/*!*******************************!*\
  !*** ./utils/notification.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Displays pop up message from the browser to request permission to allow notifications
//response is stored along with the app (calling again returns user's last choice)
//check if supported by browser
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!('Notification' in window)) {
    console.log('Notifications not supported in this browser');
  } else {
    Notification.requestPermission(function (status) {
      console.log('Notification permission status:', status);
    });
  }
});

function testNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: 'First notification!',
        tag: 'id1',
        // icon: 'images/notification-flat.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [{
          action: 'explore',
          title: 'Go to the site' // icon: 'images/checkmark.png'

        }, {
          action: 'close',
          title: 'Close the notification' // icon: 'images/xmark.png'

        }]
      };
      reg.showNotification('Hello world!', options);
    });
  }
}

/***/ })

})
//# sourceMappingURL=browser.js.2d641d173264d140a9fb.hot-update.js.map