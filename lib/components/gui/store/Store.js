"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _storeContext = _interopRequireDefault(require("./storeContext"));

var _initialState = _interopRequireDefault(require("./initialState"));

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Store = function Store(_ref) {
  var children = _ref.children,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? _initialState.default : _ref$initialValue,
      _ref$rootReducer = _ref.rootReducer,
      rootReducer = _ref$rootReducer === void 0 ? _rootReducer.default : _ref$rootReducer,
      _ref$projectName = _ref.projectName,
      projectName = _ref$projectName === void 0 ? 'GoWithTheFlow' : _ref$projectName;

  var _useReducer = (0, _react.useReducer)(rootReducer, initialValue(projectName)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return _react.default.createElement(_storeContext.default.Provider, {
    value: [state, dispatch]
  }, children);
};

Store.propTypes = {
  children: _propTypes.default.node.isRequired,
  initialValue: _propTypes.default.object.isRequired,
  rootReducer: _propTypes.default.func.isRequired,
  projectName: _propTypes.default.string
};
var _default = Store;
exports.default = _default;