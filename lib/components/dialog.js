"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  max-height: 80vh;\n  display: flex;\n  width: 95%;\n  max-width: 600px;\n\n  & > div {\n    overflow-y: auto;\n    padding-right: 10px;\n    width: inherit;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SET_FIELD = Symbol('SET_FIELD');

var Overlay = _styledComponents.default.div(_templateObject());

var DialogContainer = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.secondaryLight;
});

var reducer = function reducer(state, action) {
  switch (action.type) {
    case SET_FIELD:
      return _objectSpread({}, state, _defineProperty({}, action.payload.name, action.payload.value));

    default:
      return state;
  }
};

var Dialog = function Dialog(_ref2) {
  var children = _ref2.children;

  var _useReducer = (0, _react.useReducer)(reducer, {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dialogFields = _useReducer2[0],
      dispatch = _useReducer2[1];

  var setField = function setField(name, value) {
    dispatch({
      type: SET_FIELD,
      payload: {
        name: name,
        value: value
      }
    });
  };

  return _react.default.createElement(Overlay, null, _react.default.createElement(DialogContainer, null, typeof children === 'function' ? children([dialogFields, setField]) : children));
};

Dialog.propTypes = {
  children: _propTypes.default.any.isRequired
};
var _default = Dialog;
exports.default = _default;