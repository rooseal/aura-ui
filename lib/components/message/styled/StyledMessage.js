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
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  /* background-image: linear-gradient(to left, #ffffff, #efefef); */\n  background-color: #fafafa;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);\n  border-radius: 2px;\n  padding: 20px 30px;\n  font-family: ", ";\n  font-size: 0.8em;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMessage = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.textPrimary;
}, function (props) {
  return props.theme.fontFamily;
});

StyledMessage.propTypes = {
  theme: _propTypes.default.object,
  nested: _propTypes.default.bool
};
StyledMessage.defaultProps = {
  theme: _teal.default,
  nested: false
};
var _default = StyledMessage;
exports.default = _default;