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
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border: 1px solid ", ";\n  border-top: 0;\n  border-radius: 0 0 2px 2px;\n  width: 100%;\n  box-sizing: border-box;\n\n  ::before {\n    content: '';\n    display: block;\n    width: 80%;\n    height: 2px;\n    border-bottom: 1px solid ", ";\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledList = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderLight;
});

StyledList.propTypes = {
  theme: _propTypes.default.object
};
StyledList.defaultProps = {
  theme: _teal.default
};
var _default = StyledList;
exports.default = _default;