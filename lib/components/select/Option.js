"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Styled = _interopRequireWildcard(require("./styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = (0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
      isActive = _ref.isActive,
      isSelected = _ref.isSelected,
      isDisabled = _ref.isDisabled,
      list = _ref.list,
      value = _ref.value,
      onFocus = _ref.onFocus,
      children = _ref.children,
      StyledOption = _ref.Styled.Option,
      props = _objectWithoutProperties(_ref, ["id", "isActive", "isSelected", "isDisabled", "list", "value", "onFocus", "children", "Styled"]);

  var getClassnames = function getClassnames() {
    var extraClassnames = [];
    if (isActive) extraClassnames.push('active');
    if (isSelected) extraClassnames.push('selected');
    if (isDisabled) extraClassnames.push('disabled');

    if (extraClassnames.length > 0) {
      return extraClassnames.join(' ');
    }

    return '';
  };

  return _react.default.createElement(StyledOption, _extends({
    ref: ref,
    className: getClassnames(),
    tabIndex: "-1",
    role: "option",
    onClick: function onClick() {
      return list.setValue(value);
    },
    onMouseOver: function onMouseOver() {
      return list.setActive(id);
    },
    onFocus: onFocus
  }, props), children);
});
Option.propTypes = {
  list: _propTypes.default.shape({
    setActive: _propTypes.default.func.isRequired,
    setValue: _propTypes.default.func.isRequired,
    value: _propTypes.default.string.isRequired
  }),
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  isActive: _propTypes.default.bool.isRequired,
  Styled: _propTypes.default.shape({
    Option: _propTypes.default.any
  }),
  isDisabled: _propTypes.default.bool,
  onFocus: _propTypes.default.func
};
Option.defaultProps = {
  Styled: {
    Option: Styled.Option
  },
  isDisabled: false,
  onFocus: function onFocus() {}
};
var _default = Option;
exports.default = _default;