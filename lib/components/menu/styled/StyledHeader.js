"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _teal = _interopRequireDefault(require("../../../css/themes/teal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 2px solid ", ";\n  display: block;\n  width: 100%;\n  border-radius: ", ";\n  color: white;\n  font-family: Verdana;\n  font-size: 0.8em;\n  padding: 10px 24px;\n\n  /* :active {\n    transform: translateX(1px) translateY(1px);\n  } */\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents.default.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (props) {
  return props.open ? '2px 2px 0 0' : '2px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primaryDark;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primaryDark;
});

StyledHeader.propTypes = {
  theme: _propTypes.default.object
};
StyledHeader.defaultProps = {
  theme: _teal.default
};
var _default = StyledHeader;
exports.default = _default;