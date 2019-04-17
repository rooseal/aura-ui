"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledAnchor = _interopRequireDefault(require("./StyledAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Anchor = function Anchor(_ref) {
  var StyledComp = _ref.StyledComp,
      target = _ref.target,
      rel = _ref.rel,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["StyledComp", "target", "rel", "style", "children"]);

  return _react.default.createElement(StyledComp, _extends({
    style: style,
    rel: target === '_blank' && rel === undefined ? 'noopener noreferrer' : rel,
    target: target
  }, props), children);
};

Anchor.propTypes = {
  style: _propTypes.default.object,
  StyledComp: _propTypes.default.func
};
Anchor.defaultProps = {
  style: {},
  StyledComp: _StyledAnchor.default
};
Anchor.preview = {
  children: 'Link Text'
};
var _default = Anchor;
exports.default = _default;