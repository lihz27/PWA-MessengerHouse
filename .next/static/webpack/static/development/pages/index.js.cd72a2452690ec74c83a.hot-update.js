webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Messenger.js":
/*!*********************************!*\
  !*** ./components/Messenger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
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









var generateName = function generateName() {
  var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var firstName = ['Jack', 'Steven', 'Brian', 'Marc', 'Drew', 'Stephanie', 'Daniel', 'James', 'Spencer', 'Caitlin', 'Jackie', 'Julius', 'Patrick'];
  var lastName = ['Li', 'Chung', 'Tiosejo', 'Louie', 'Curtis', 'Sockwell', 'Jiang', 'Bykowsky', 'Detro', 'Chen', 'Sea', 'Doyle'];
  var name = firstName[getRandomInt(0, firstName.length)] + ' ' + lastName[getRandomInt(0, lastName.length)];
  return name;
};

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
        return state.friends.add(message.username);
      });

      _this.setState(function (state) {
        return {
          messages: state.messages.concat(message)
        };
      });

      _this.props.addMessage(message.text, message.username, message.created_at);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentConvo", function (otherUser) {
      _this.setState(function (state) {
        var filtered = _this.props.messages.filter(function (message) {
          return message.username === otherUser;
        });

        return {
          currentConvo: otherUser,
          messages: filtered
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.state.text !== '') {
        var message = {
          created_at: new Date().getTime(),
          username: _this.state.username,
          text: _this.state.text
        };

        _this.socket.emit('message', message);

        _this.props.addMessage(_this.state.text, _this.state.username, message.created_at);

        _this.setState(function (state) {
          return {
            text: '',
            messages: _this.state.messages.concat(message)
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeToHomeView", function () {
      //TODO change this to routing? if so remove currentView from state
      _this.setState({
        currentView: 'browse'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeToMessageView", function () {
      //TODO remove this with above function
      _this.setState({
        currentView: 'messenger'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      if (_this.el) {
        _this.el.scrollIntoView({
          behavior: 'instant'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        username: e.target.value
      });
    });

    _this.state = {
      text: '',
      messages: [],
      username: generateName(),
      updated: false,
      currentConvo: '',
      friends: new Set(),
      currentView: 'messenger'
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

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
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000');
      this.socket.on('message', this.handleMessage);
      setTimeout(this.scrollToBottom, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.socket.off('message', this.handleMessage);
      this.socket.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var sameUser = function sameUser(msg, i, arr) {
        return i > 0 && msg.username === arr[i - 1].username;
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: 'enter username'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-card mdl-shadow--2dp",
        id: "chatview"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        getConvo: this.getCurrentConvo,
        friends: _toConsumableArray(this.state.friends),
        changeHome: this.changeToHomeView,
        changeMessage: this.changeToMessageView,
        currentView: this.state.currentView
      }), this.state.currentView === 'browser' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, "Browse Homes"), this.state.currentView === 'messenger' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.messages.map(function (message, i, array) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          message: message,
          username: _this3.state.username,
          firstMessage: sameUser(message, i, array)
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.el = el;
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.text,
        onChange: function onChange(e) {
          return _this3.setState({
            text: e.target.value
          });
        },
        className: "mdl-textfield__input",
        id: "message-input",
        placeholder: 'Send a message'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "send-msg-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-location-arrow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "mdl-textfield__label",
        htmlFor: "message-input"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n\t\t\t\t\t\t#message-input {\n\t\t\t\t\t\tborder-bottom: lightgray solid 1px;\n\t\t\t\t\t\tborder-top: lightgray solid 1px;\n\t\t\t\t\t\theight: 20px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t\tpadding: 0px 10px 0px 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul {\n\t\t\t\t\t\t\theight: 480px;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\toverflow-y: scroll;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li {\n\t\t\t\t\t\t\tpadding: 1px;\n\t\t\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-card {\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttransition: all .3s;\n\t\t\t\t\t\t\ttransform: translateY(100px);\n              height: 500px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-textfield__input {\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\twidth: 90%;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.timestamp{\n\t\t          font-size:10px;\n\t\t          font-weight: 300;\n\t\t          color: transparent;\n\t\t          margin: 3px;\n\t          }\n\t          li:hover .my-timestamp {\n\t\t          color: black;\n\t\t          transition: color .8s;\n\t          }\n\t          li:hover .timestamp {\n\t\t          color: black;\n\t\t          transition: color .8s;\n\t          }\n\t        .my-message {\n\t\t        display: inline-block;\n\t\t        background: #00e34d;\n\t\t        color: white;\n\t\t        border-radius: 10px;\n\t\t        padding: 7px;\n\t\t        max-width: 50%;\n\t\t        word-wrap: break-word;\n\t\t        clear: right;\n\t\t        line-height: 1.25;\n\t        }\n\t        .your-message {\n\t\t        display: inline-block;\n\t\t        background: #E5E5EA;\n\t\t        border-radius: 10px;\n\t\t        padding: 7px;\n\t\t        word-wrap: break-word;\n\t\t        max-width:70%;\n\t\t        line-height: 1.25;\n\t        }\n          .message-username {\n\t          display: block;\n\t          font-size: 0.8em;\n\t          font-weight: bold;\n\t          line-height: 1.5;\n\t          margin-left: 0.6em;\n          }\n          .send-msg-btn {\n          \tcursor:pointer;\n          }\n          .mdl-textfield.is-focused .mdl-textfield__label {\n    \t\t\t  color: #0069E0;\n\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var messages = _ref.messages,
      houses = _ref.houses;
  return {
    messages: messages,
    houses: houses
  };
}, {
  addMessage: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addMessage"],
  addHouse: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addHouse"]
})(Messenger));

/***/ })

})
//# sourceMappingURL=index.js.cd72a2452690ec74c83a.hot-update.js.map