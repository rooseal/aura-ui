"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledButtonAnchor = _interopRequireDefault(require("./StyledButtonAnchor"));

var _Anchor = _interopRequireDefault(require("./Anchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ButtonAnchor = function ButtonAnchor(props) {
  return _react.default.createElement(_Anchor.default, _extends({
    StyledComp: _StyledButtonAnchor.default
  }, props));
};

ButtonAnchor.preview = {
  children: 'Link Button'
};
var _default = ButtonAnchor;
exports.default = _default;