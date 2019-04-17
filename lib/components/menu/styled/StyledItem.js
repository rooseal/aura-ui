"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _teal = _interopRequireDefault(require("../../../css/themes/teal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  position: relative;\n  display: block;\n  border: 0;\n  border-left: 2px solid ", ";\n  border-right: 2px solid ", ";\n  padding: 2px;\n\n  :last-child {\n    border-radius: 0 0 2px 2px;\n    border-bottom: 2px solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledItem = _styledComponents.default.li(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
});

StyledItem.propTypes = {
  theme: _propTypes.default.object
};
StyledItem.defaultProps = {
  theme: _teal.default
};
var _default = StyledItem;
exports.default = _default;