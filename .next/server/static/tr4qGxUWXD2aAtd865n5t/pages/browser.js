module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_HOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_USER; });
var ADD_MESSAGE = 'ADD_MESSAGE';
var ADD_HOUSE = 'ADD_HOUSE';
var ADD_USER = 'ADD_USER';

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addUser; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function addMessage(text, messageType, username, created_at, recipients) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__[/* ADD_MESSAGE */ "b"],
    text: text,
    messageType: messageType,
    username: username,
    created_at: created_at,
    recipients: recipients
  };
}
function addHouse(house_id, username, imgUrl) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__[/* ADD_HOUSE */ "a"],
    house_id: house_id,
    username: username,
    imgUrl: imgUrl
  };
}
function addUser(username, password) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__[/* ADD_USER */ "c"],
    username: username,
    password: password
  };
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(2);

// EXTERNAL MODULE: ./actions/message.js
var message = __webpack_require__(3);

// CONCATENATED MODULE: ./utils/notification.js
//Displays pop up message from the browser to request permission to allow notifications
//response is stored along with the app (calling again returns user's last choice)
//check if supported by browser
/* harmony default export */ var notification = (function () {
  if (!('Notification' in window)) {
    console.log('Notifications not supported in this browser');
  } else {
    Notification.requestPermission(function (status) {
      console.log('Notification permission status:', status);
    }).then(function () {
      testNotification();
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
// CONCATENATED MODULE: ./pages/browser.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var browser_Browser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Browser, _React$Component);

  function Browser(props) {
    var _this;

    _classCallCheck(this, Browser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Browser).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addFavorite", function () {
      var imgUrl = document.querySelector('.home-profile-image').getAttribute('src');
      var houseNum = 0;
      var houseId = Number(window.location.pathname.replace(/\/browser\//, ''));

      if (houseId && houseId >= 0 && houseId < 100) {
        houseNum = houseId;
      }

      for (var i = 0, len = _this.props.houses.length; i < len; ++i) {
        if (_this.props.houses[i].house_id === houseNum) {
          return;
        }
      }

      _this.props.addHouse(houseNum, _this.props.user.username, imgUrl);
    });

    return _this;
  }

  _createClass(Browser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      notification(); // const script_Top = document.createElement("script");
      // script_Top.src = "https://s3-us-west-1.amazonaws.com/img-gallery-hr/PWAbundle.js";
      // script_Top.async = true;
      // document.body.appendChild(script_Top);
      // const script = document.createElement("script");
      //
      // script.src = "https://s3-us-west-1.amazonaws.com/housing-hr/PWAbundle.js";
      // script.async = true;
      //
      // document.body.appendChild(script);
      // const delayForRender = () => {
      //   const favoriteButton = document.getElementById('add-favorites');
      //   favoriteButton.addEventListener('click', this.addFavorite);
      // };
      //
      // setTimeout(delayForRender, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var favoriteButton = document.getElementById('add-favorites');
      favoriteButton.removeEventListener('click', this.addFavorite);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        id: "browse-homes"
      }, external_react_default.a.createElement("a", {
        href: "/messenger"
      }, "Messenger"), external_react_default.a.createElement("div", {
        id: "top-app"
      }), external_react_default.a.createElement("div", {
        id: "main"
      }), external_react_default.a.createElement("style", null, "\n            #main {\n              margin-left: -105px;\n              transform: scale(.5);\n            }\n            #browse-homes {\n              max-width: 100%;\n              max-height: 100%;\n            }\n            html.mdl-js {\n              background: white !important;\n            }\n          @media (max-width: 320px) {\n\n            }\n\n          "));
    }
  }]);

  return Browser;
}(external_react_default.a.Component);

/* harmony default export */ var browser = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(function (_ref) {
  var houses = _ref.houses,
      user = _ref.user;
  return {
    houses: houses,
    user: user
  };
}, {
  addHouse: message["a" /* addHouse */]
})(browser_Browser));

/***/ })

/******/ });