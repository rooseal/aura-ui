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
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border: 1px solid ", ";\n  border-bottom: ", ";\n  border-radius: 2px 2px 0 0;\n  display: block;\n  width: 100%;\n  margin: 0;\n  text-align: left;\n  color: ", ";\n  font-family: Verdana;\n  font-size: 14px;\n  padding: 10px;\n  cursor: pointer;\n\n  ::before {\n    content: '\u2BC6';\n    float: right;\n    margin-right: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents.default.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderLight;
}, function (_ref2) {
  var open = _ref2.open,
      theme = _ref2.theme;
  return open ? 0 : "1px solid ".concat(theme.borderLight);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
});

StyledHeader.propTypes = {
  theme: _propTypes.default.object
};
StyledHeader.defaultProps = {
  theme: _teal.default
};
var _default = StyledHeader;
exports.default = _default;