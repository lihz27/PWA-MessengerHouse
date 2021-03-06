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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: ADD_MESSAGE, ADD_HOUSE, ADD_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MESSAGE", function() { return ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HOUSE", function() { return ADD_HOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
var ADD_MESSAGE = 'ADD_MESSAGE';
var ADD_HOUSE = 'ADD_HOUSE';
var ADD_USER = 'ADD_USER';

/***/ }),

/***/ "./actions/message.js":
/*!****************************!*\
  !*** ./actions/message.js ***!
  \****************************/
/*! exports provided: addMessage, addHouse, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHouse", function() { return addHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./actions/index.js");

function addMessage(text, username, created_at) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__["ADD_MESSAGE"],
    text: text,
    username: username,
    created_at: created_at
  };
}
function addHouse(house_id, username, created_at) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__["ADD_HOUSE"],
    house_id: house_id,
    username: username,
    created_at: created_at
  };
}
function addUser(username, password) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__["ADD_USER"],
    username: username,
    password: password
  };
}

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
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

/***/ }),

/***/ "./components/Messenger.js":
/*!*********************************!*\
  !*** ./components/Messenger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/message */ "./actions/message.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Messenger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Messenger, _React$Component);

  function Messenger(props) {
    var _this;

    _classCallCheck(this, Messenger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Messenger).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessage", function (message) {
      _this.setState(function (state) {
        return {
          typing: state.typing.filter(function (_ref) {
            var username = _ref.username;
            return username !== message.username;
          })
        };
      });

      _this.setState(function (state) {
        return state.friends.add(message.username);
      });

      _this.setState(function (state) {
        return {
          messages: state.messages.concat(message)
        };
      });

      _this.props.addMessage(message.text, message.username, message.created_at);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "typingStatus", function (data) {
      var notIncluded = _this.state.typing.filter(function (el) {
        return el.username !== data;
      });

      for (var i = 0, len = _this.state.typing.length; i < len; ++i) {
        if (_this.state.typing[i].username === data) {
          clearTimeout(_this.state.typing[i].timeoutId);
        }
      }

      var timeoutId = setTimeout(function () {
        _this.setState(function (state) {
          return {
            typing: state.typing.filter(function (el) {
              return el.username !== data;
            })
          };
        });
      }, 3000);
      var status = {
        username: data,
        timeoutId: timeoutId
      };

      _this.setState(function (state) {
        return {
          typing: _toConsumableArray(notIncluded).concat([status])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentConvo", function (otherUser) {
      _this.setState(function () {
        var filtered = _this.props.messages.filter(function (message) {
          return message.username === otherUser || message.username === _this.username;
        });

        return {
          currentConvo: otherUser,
          messages: filtered
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showTypingStatus", function (e) {
      _this.socket.emit('typing', _this.username);

      _this.setState({
        text: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.state.text !== '') {
        var message = {
          created_at: new Date().getTime(),
          username: _this.username,
          text: _this.state.text
        };

        _this.socket.emit('message', message);

        _this.props.addMessage(_this.state.text, _this.username, message.created_at);

        _this.setState(function (state) {
          return {
            text: '',
            messages: _this.state.messages.concat(message)
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      if (_this.el) {
        _this.el.scrollIntoView({
          behavior: 'instant'
        });
      }
    });

    _this.state = {
      text: '',
      messages: [],
      updated: false,
      currentConvo: '',
      friends: new Set(),
      currentView: 'messenger',
      typing: []
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      this.username = this.props.user.username;
      this.scrollToBottom();

      if (!this.state.messages.length && !this.state.updated) {
        this.setState(function (state) {
          _this2.props.messages.forEach(function (msg) {
            state.friends.add(msg.username);
          });

          return state;
        });
        var filtered = this.state.currentConvo !== '' ? this.props.messages.filter(function (message) {
          return message.username === _this2.state.currentConvo;
        }) : this.props.messages;
        this.setState({
          messages: filtered,
          updated: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this$props$user = this.props.user,
          username = _this$props$user.username,
          password = _this$props$user.password;
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000');
      this.socket.io.engine.id = 'test';
      this.socket.on('connect', function () {
        _this3.socket.emit('authentication', {
          username: username,
          password: password
        });
      });
      this.socket.on('message', this.handleMessage);
      this.socket.on('typing', this.typingStatus);
      setTimeout(this.scrollToBottom, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      //TODO do we want this to shut off when you navigate away from messenger?
      //TODO seems like we want to receive messages still
      this.socket.off('message', this.handleMessage);
      this.socket.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var sameUser = function sameUser(msg, i, arr) {
        return i > 0 && msg.username === arr[i - 1].username;
      };

      var typingStatusMessage = !this.state.typing.length ? '' : this.state.typing.length === 1 ? "".concat(this.state.typing[0].username, " is typing...") : this.state.typing.length === 2 ? "".concat(this.state.typing[0].username, " and ").concat(this.state.typing[1].username, " are typing...") : 'several people are typing';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-card mdl-shadow--2dp",
        id: "chatview"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        getConvo: this.getCurrentConvo,
        friends: _toConsumableArray(this.state.friends).filter(function (notUser) {
          return notUser !== _this4.username;
        }),
        currentView: this.state.currentView
      }), this.state.currentView === 'browser' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, "Browse Homes"), this.state.currentView === 'messenger' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.messages.map(function (message, i, array) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          message: message,
          username: _this4.username,
          firstMessage: sameUser(message, i, array)
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          _this4.el = el;
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "typing-status"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, typingStatusMessage)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.text,
        onChange: this.showTypingStatus,
        className: "mdl-textfield__input",
        id: "message-input",
        placeholder: "Send a message"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-comment"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "mdl-textfield__label",
        htmlFor: "message-input"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n            #typing-status {\n            height: 2.4em;\n            font-size: .7em;\n            }\n\t\t\t\t\t\t#message-input {\n\t\t\t\t\t\tborder-bottom: lightgray solid 1px;\n\t\t\t\t\t\tborder-top: lightgray solid 1px;\n\t\t\t\t\t\theight: 20px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t\tpadding: 0px 10px 0px 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul {\n\t\t\t\t\t\t\theight: 480px;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\toverflow-y: scroll;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li {\n\t\t\t\t\t\t\tpadding: 1px;\n\t\t\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-card {\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttransition: all .3s;\n\t\t\t\t\t\t\ttransform: translateY(100px);\n              height: 500px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-textfield__input {\n              display:inline-block;\n              width: 90%;\n              padding-top: .5em;\n            }\n\t\t\t\t\t\t.timestamp{\n\t\t          font-size:10px;\n\t\t          font-weight: 300;\n\t\t          color: transparent;\n\t\t          margin: 3px;\n\t          }\n\t          li:hover .my-timestamp {\n\t\t          color: black;\n\t\t          transition: color .8s;\n\t          }\n\t          li:hover .timestamp {\n\t\t          color: black;\n\t\t          transition: color .8s;\n\t          }\n\t        .my-message {\n\t\t        display: inline-block;\n\t\t        background: #00e34d;\n\t\t        color: white;\n\t\t        border-radius: 10px;\n\t\t        padding: 7px;\n\t\t        max-width: 50%;\n\t\t        word-wrap: break-word;\n\t\t        clear: right;\n\t\t        line-height: 1.25;\n\t        }\n\t        .your-message {\n\t\t        display: inline-block;\n\t\t        background: #E5E5EA;\n\t\t        border-radius: 10px;\n\t\t        padding: 7px;\n\t\t        word-wrap: break-word;\n\t\t        max-width:70%;\n\t\t        line-height: 1.25;\n\t        }\n          .message-username {\n\t          display: block;\n\t          font-size: 0.8em;\n\t          font-weight: bold;\n\t          line-height: 1.5;\n\t          margin-left: 0.6em;\n          }\n          .send-msg-btn {\n            cursor:pointer;\n          }\n   \t\t\t\t.mdl-textfield__label:after{\n            background-color: #0069E0;\n          }\n\t\t\t\t\t"));
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref2) {
  var messages = _ref2.messages,
      houses = _ref2.houses,
      user = _ref2.user;
  return {
    messages: messages,
    houses: houses,
    user: user
  };
}, {
  addMessage: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addMessage"],
  addHouse: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addHouse"]
})(Messenger));

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var NavBar = function NavBar(_ref) {
  var getConvo = _ref.getConvo,
      friends = _ref.friends,
      changeHome = _ref.changeHome,
      changeMessage = _ref.changeMessage,
      currentView = _ref.currentView;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbar-container"
  }, currentView === 'messenger' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/browser",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/house.png",
    id: "house-button",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        a {\n        font-size: 12px;\n        }\n        #navbar-container {\n        display: flex;\n        justify-content: flex-end;\n        }\n        #house-button {\n        margin-right: 12px;\n        height: 50px;\n        width: auto;\n        }\n        .dropbtn {\n            background-color: #0069E0;\n            color: white;\n            padding: 10px;\n            font-size: 16px;\n            border: none;\n            cursor: pointer;\n            width: 120px;\n        }\n        .dropdown {\n            position: relative;\n            display: inline-block;\n            float: right;\n        }\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 160px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            z-index: 1;\n        }\n        .dropdown-content a {\n            color: black;\n            // padding: 12px 16px;\n            text-decoration: none;\n            display: block;\n        }\n        .dropdown-content a:hover {background-color: #f1f1f1}\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n        .dropdown:hover .dropbtn {\n            background-color: #0069E0;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./pages/messenger.js":
/*!****************************!*\
  !*** ./pages/messenger.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Messenger */ "./components/Messenger.js");



var MessengerView = function MessengerView() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Messenger__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (MessengerView);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/messenger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/messenger.js */"./pages/messenger.js");


/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=messenger.js.map