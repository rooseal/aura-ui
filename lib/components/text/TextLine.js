"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextLine =
/*#__PURE__*/
function (_Component) {
  _inherits(TextLine, _Component);

  function TextLine() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false,
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var _this$props = _this.props,
          mask = _this$props.mask,
          onChange = _this$props.onChange;
      var value = event.target.value;

      if (mask !== undefined) {
        value = mask(value);
      }

      if (onChange === undefined) {
        _this.setState({
          value: value
        });
      } else {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function () {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      });

      onFocus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      });

      onBlur();
    });

    return _this;
  }

  _createClass(TextLine, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          focused = _this$state.focused,
          stateValue = _this$state.value;

      var _this$props2 = this.props,
          _this$props2$name = _this$props2.name,
          name = _this$props2$name === void 0 ? (0, _v.default)() : _this$props2$name,
          value = _this$props2.value,
          type = _this$props2.type,
          style = _this$props2.style,
          label = _this$props2.label,
          onChange = _this$props2.onChange,
          _ref = _this$props2._ref,
          props = _objectWithoutProperties(_this$props2, ["name", "value", "type", "style", "label", "onChange", "_ref"]);

      return _react.default.createElement(_styled.Container, null, _react.default.createElement(_styled.AnimBar, {
        className: focused ? 'active' : ''
      }), _react.default.createElement(_styled.Label, {
        htmlFor: name,
        active: focused || value !== ''
      }, label), _react.default.createElement(_styled.Input, _extends({}, props, {
        ref: _ref,
        id: name,
        name: name,
        type: type,
        style: style,
        value: onChange === undefined ? stateValue : value,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange
      })));
    }
  }]);

  return TextLine;
}(_react.Component);

_defineProperty(TextLine, "propTypes", {
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  type: _propTypes.default.oneOf(['text', 'password']),
  style: _propTypes.default.object,
  mask: _propTypes.default.func,
  label: _propTypes.default.string.isRequired,
  // Passed in by ForwardRef Wrapper
  _ref: _propTypes.default.object
});

_defineProperty(TextLine, "defaultProps", {
  type: 'text',
  value: '',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(TextLine, _extends({
    _ref: ref
  }, props));
});

exports.default = _default;