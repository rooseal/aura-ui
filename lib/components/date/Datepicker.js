"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextLine = _interopRequireDefault(require("../text/TextLine"));

var _button = require("../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import Calendar from '../calendar/calendar';
function formatValue(value) {
  var oldValue = this.props.value || this.state.value;
  if (oldValue >= value) return value;

  if (value.length >= 4) {
    if (value.charAt(4) !== '-') {
      value = [value.slice(0, 4), '-', value.slice(4)].join('');
    }

    if (value.length >= 7) {
      if (value.charAt(7) !== '-') {
        value = [value.slice(0, 7), '-', value.slice(7)].join('');
      }
    }
  }

  return value;
}

var Datepicker = function Datepicker(_ref) {
  var props = _extends({}, _ref);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  return _react.default.createElement("div", null, _react.default.createElement(_TextLine.default, {
    label: new Date().toISOString().slice(0, 10),
    maxLength: "10",
    name: "newDatepicker",
    type: "text",
    value: value,
    onChange: setValue
  }), _react.default.createElement(_button.Button, {
    onClick: function onClick() {
      return setShow(!show);
    }
  }), show && _react.default.createElement("div", null));
};

Datepicker.propTypes = {};
Datepicker.defaultProps = {};
var _default = Datepicker;
exports.default = _default;