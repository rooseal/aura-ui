"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  line-height: 1;\n  margin-bottom: 0.7em;\n  padding: 0.35em 0.7em;\n  width: 100%;\n  border: 1px solid teal;\n  outline: 0;\n  :focus {\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Textarea = _styledComponents.default.textarea(_templateObject());

var _default = Textarea;
exports.default = _default;