"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  background-color: ", ";\n  padding: 0.8em;\n  border: 0;\n  border-radius: ", ";\n  outline: none;\n  font-size: 1em;\n  height: 35px;\n  line-height: 1;\n\n  :hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabContainer = _styledComponents.default.button(_templateObject(), function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.secondaryDark : theme.primaryLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.borderRadius, " ").concat(theme.borderRadius, " 0 0");
}, function (_ref3) {
  var active = _ref3.active,
      theme = _ref3.theme;
  return active ? theme.secondaryDark : theme.secondary;
});

var Tab = function Tab(_ref4) {
  var children = _ref4.children,
      setState = _ref4.setState,
      value = _ref4.value,
      active = _ref4.active;
  return _react.default.createElement(TabContainer, {
    active: active,
    onClick: function onClick(e) {
      return setState(value);
    }
  }, children);
};

Tab.propTypes = {
  children: _propTypes.default.any.isRequired,
  setState: _propTypes.default.func.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  active: _propTypes.default.bool
};
Tab.defaultProps = {
  active: false
};
var _default = Tab;
exports.default = _default;