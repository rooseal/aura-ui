"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _teal = _interopRequireDefault(require("../../css/themes/teal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  cursor: pointer;\n  display: inline;\n  font-family: ", ";\n  font-size: 1em;\n  font-weight: bold;\n  padding: 0;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAnchorButton = _styledComponents.default.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (props) {
  return props.theme.fontFamily;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primaryDark;
});

StyledAnchorButton.propTypes = {
  theme: _propTypes.default.object
};
StyledAnchorButton.defaultProps = {
  theme: _teal.default
};
var _default = StyledAnchorButton;
exports.default = _default;