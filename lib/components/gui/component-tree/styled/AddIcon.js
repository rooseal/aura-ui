"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  width: 1em;\n  display: inline-block;\n  padding: 1px 1px 0 0;\n  margin-right: 1.2em;\n  border: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddIcon = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement("i", props, "+");
})(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderPrimary;
});
var _default = AddIcon;
exports.default = _default;