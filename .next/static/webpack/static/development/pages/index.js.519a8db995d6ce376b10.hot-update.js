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
  }, '  ', dayjs__WEBPACK_IMPORTED_MODULE_1___default()(message.created_at).format('h:mma')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        .my-subcontainer {\n        text-align: right;\n        }\n          .timestamp{\n          font-size:10px;\n          font-weight: 300;\n          color: transparent;\n          margin: 3px;\n          }\n          li:hover .my-timestamp {\n          color: black;\n          transition: color .8s;\n          }\n          li:hover .timestamp {\n          color: black;\n          transition: color .8s;\n          }\n        .my-message {\n        background: #00e34d;\n        color: white;\n        border-radius: 10px;\n        margin-bottom: 0.1em;\n        padding: 5px;\n        text-align: center;\n\n        max-width: 50%;\n        white-space: normal;\n        word-wrap: break-word;\n        width: fit-content;\n        clear: right;\n        display: inline-block;\n        }\n        .your-message {\n        display: inline-block;\n        background: #E5E5EA;\n        border-radius: 10px;\n        margin-bottom: 0.1em;\n        padding: 5px;\n        max-width: 50%;\n        text-align: center;\n\n        white-space: normal;\n        word-wrap: break-word;\n        width: fit-content;\n        }\n\n        .message-username {\n          display: block;\n          font-size: 0.8em;\n          font-weight: bold;\n          line-height: 1.5;\n          margin-left: 0.6em;\n        }\n\n      "));
});

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NavBar = function NavBar(_ref) {
  var getConvo = _ref.getConvo,
      friends = _ref.friends;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dropbtn"
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-content"
  }, friends.slice(-5).map(function (friend, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      onClick: function onClick() {
        return getConvo("".concat(friend));
      }
    }, friend);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        .dropbtn {\n            background-color: #0069E0;\n            color: white;\n            padding: 16px;\n            font-size: 16px;\n            border: none;\n            cursor: pointer;\n        }\n        .dropdown {\n            position: relative;\n            display: inline-block;\n            float: right;\n        }\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 160px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            z-index: 1;\n        }\n        .dropdown-content a {\n            color: black;\n            padding: 12px 16px;\n            text-decoration: none;\n            display: block;\n        }\n        .dropdown-content a:hover {background-color: #f1f1f1}\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n        .dropdown:hover .dropbtn {\n            background-color: #0069E0;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.519a8db995d6ce376b10.hot-update.js.map