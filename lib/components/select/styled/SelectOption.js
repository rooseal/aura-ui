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
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border-radius: 2px;\n  color: ", ";\n  font-family: Verdana;\n  font-size: 14px;\n  margin: 3px;\n  padding: 10px;\n  cursor: default;\n  outline: none;\n\n  &.selected::before {\n    content: '\u2713';\n    float: right;\n    margin-right: 10px;\n  }\n\n  &.active {\n    background-color: ", ";\n    color: white;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledOption = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
});

StyledOption.propTypes = {
  theme: _propTypes.default.object
};
StyledOption.defaultProps = {
  theme: _teal.default
};
var _default = StyledOption;
exports.default = _default;