webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message,
      username = _ref.username,
      firstMessage = _ref.firstMessage;
  var ownMessage = username === message.username;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      listStyle: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ownMessage ? 'my-subcontainer' : 'your-subcontainer'
  }, ownMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "timestamp"
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(message.created_at).format('h:mma'), '  '), !firstMessage && !ownMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message-username"
  }, message.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ownMessage ? 'my-message' : 'your-message'
  }, message.text), !ownMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "timestamp"
  }, '  ', dayjs__WEBPACK_IMPORTED_MODULE_1___default()(message.created_at).format('h:mma')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n          .my-subcontainer {\n            text-align: right;\n          }\n        "));
});

/***/ })

})
//# sourceMappingURL=index.js.5ab8107defe471beabab.hot-update.js.map