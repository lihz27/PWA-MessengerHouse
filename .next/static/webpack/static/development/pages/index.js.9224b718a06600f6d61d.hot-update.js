webpackHotUpdate("static\\development\\pages\\index.js",{

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
      friends = _ref.friends,
      changeHome = _ref.changeHome,
      changeMessage = _ref.changeMessage,
      currentView = _ref.currentView;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbar-container"
  }, currentView === 'messenger' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/browse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: '../static/house.png',
    id: "house-button"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dropbtn"
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-content"
  }, currentView === 'browse' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: changeMessage
  }, "Messenger"), friends.slice(-5).map(function (friend, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      onClick: function onClick() {
        return getConvo("".concat(friend));
      }
    }, friend);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        #navbar-container {\n        display: flex;\n        }\n        #house-button {\n        height: 50px;\n        width: auto;\n        }\n        .dropbtn {\n            background-color: #0069E0;\n            color: white;\n            padding: 16px;\n            font-size: 16px;\n            border: none;\n            cursor: pointer;\n            width: 120px;\n        }\n        .dropdown {\n            position: relative;\n            display: inline-block;\n            float: right;\n        }\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 160px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            z-index: 1;\n        }\n        .dropdown-content a {\n            color: black;\n            // padding: 12px 16px;\n            text-decoration: none;\n            display: block;\n        }\n        .dropdown-content a:hover {background-color: #f1f1f1}\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n        .dropdown:hover .dropbtn {\n            background-color: #0069E0;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.9224b718a06600f6d61d.hot-update.js.map