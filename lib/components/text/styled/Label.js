"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #666;\n  position: absolute;\n  transition: font-size 0.5s, top 0.5s, left 0.5s;\n  left: 0.7em;\n  top: 0.35em;\n\n  &.active {\n    font-size: 0;\n    left: 0;\n    top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents.default.label(_templateObject());

var _default = Label;
exports.default = _default;