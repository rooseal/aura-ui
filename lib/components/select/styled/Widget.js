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
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWidget = _styledComponents.default.div(_templateObject());

StyledWidget.propTypes = {
  theme: _propTypes.default.object
};
StyledWidget.defaultProps = {
  theme: _teal.default
};
var _default = StyledWidget;
exports.default = _default;