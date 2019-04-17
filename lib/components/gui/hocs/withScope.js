"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid pink;\n  box-shadow: 1px 1px 2px rgba(rgb(233, 30, 99, 0.4));\n  padding: 5px;\n  margin: 5px;\n  min-height: 200px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScopeContainer = _styledComponents.default.div(_templateObject());

var withScope = function withScope(Component) {
  return function (props) {
    return _react.default.createElement(ScopeContainer, null, _react.default.createElement(Component, props));
  };
};

var _default = withScope;
exports.default = _default;