"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Option = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  color: ", ";\n  padding: 5px 10px;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  flex-grow: 1;\n  font-size: 1em;\n\n  &.active {\n    color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  padding: 3px 20px;\n  display: flex;\n  border-radius: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderPrimary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primaryLight;
});

exports.Container = Container;

var Option = _styledComponents.default.button(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.textPrimary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.textLight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary;
});

exports.Option = Option;

var Switch = function Switch(_ref7) {
  var options = _ref7.options,
      value = _ref7.value,
      onChange = _ref7.onChange,
      Styled = _ref7.styled;
  return _react.default.createElement(Styled.Container, null, options.map(function (_ref8) {
    var cValue = _ref8.value,
        cText = _ref8.text;
    return _react.default.createElement(Option, {
      className: value === cValue ? 'active' : '',
      onClick: function onClick() {
        return onChange(cValue);
      }
    }, cText);
  }));
};

Switch.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })),
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  onChange: _propTypes.default.func.isRequired,
  styled: _propTypes.default.shape({
    Container: _propTypes.default.func
  })
};
Switch.defaultProps = {
  styled: {
    Container: Container
  }
};
var _default = Switch;
exports.default = _default;