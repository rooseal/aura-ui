"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _brace = _interopRequireDefault(require("brace"));

var _reactAce = _interopRequireDefault(require("react-ace"));

require("brace/mode/javascript");

require("brace/theme/monokai");

var _dialog = _interopRequireDefault(require("../../dialog"));

var _Text = _interopRequireDefault(require("../../Text"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _actions = require("../store/components/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewStateDialog = function NewStateDialog(_ref) {
  var setVisibility = _ref.setVisibility,
      component = _ref.component;

  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 2),
      store = _useStore2[0],
      dispatch = _useStore2[1];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      newParam = _useState4[0],
      setNewParam = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      body = _useState6[0],
      setBody = _useState6[1];

  var updateParam = function updateParam(value, index) {
    setParams(params.map(function (p, i) {
      return i === index ? value : p;
    }));
  };

  var addNewParam = function addNewParam() {
    setParams(_toConsumableArray(params).concat([newParam]));
    setNewParam('');
  };

  return _react.default.createElement(_dialog.default, null, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        scopeDialogFields = _ref3[0],
        setScopeDialogField = _ref3[1];

    return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Add function for ", component.content.name), _react.default.createElement("p", null, "Function Name"), _react.default.createElement("div", {
      style: {
        width: '60%',
        minWidth: '300px'
      }
    }, _react.default.createElement(_Text.default, {
      value: scopeDialogFields.name,
      onChange: function onChange(e) {
        return setScopeDialogField('name', e.target.value);
      }
    })), _react.default.createElement("p", null, "Function Parameters"), params.map(function (param, i) {
      return _react.default.createElement("div", {
        style: {
          width: '60%',
          minWidth: '300px'
        }
      }, _react.default.createElement(_Text.default, {
        value: param,
        onChange: function onChange(e) {
          return updateParam(e.target.value, i);
        }
      }));
    }), _react.default.createElement("p", null, "Add parameter"), _react.default.createElement("div", {
      style: {
        width: '60%',
        minWidth: '300px'
      }
    }, _react.default.createElement(_Text.default, {
      value: newParam,
      onChange: function onChange(e) {
        return setNewParam(e.target.value);
      },
      onBlur: addNewParam
    })), _react.default.createElement("p", null, "Function body"), _react.default.createElement("div", {
      style: {
        height: '200px'
      }
    }, _react.default.createElement(_reactAce.default, {
      style: {
        height: '100%'
      },
      value: body,
      mode: "javascript",
      theme: "monokai",
      onChange: setBody,
      name: "newFunction",
      editorProps: {
        $blockScrolling: true
      }
    })), _react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        marginTop: '20px'
      }
    }, _react.default.createElement("button", {
      type: "button",
      style: {
        backgroundColor: 'teal',
        padding: '10px 20px',
        border: '0',
        color: 'white',
        margin: '5px'
      },
      onClick: function onClick(e) {
        dispatch((0, _actions.addLogic)(component.content.id, {
          name: scopeDialogFields.name,
          params: params,
          body: body
        }));
        setVisibility(false);
      }
    }, "Add function"), _react.default.createElement("button", {
      type: "button",
      style: {
        backgroundColor: 'teal',
        padding: '10px 20px',
        border: '0',
        color: 'white',
        margin: '5px'
      },
      onClick: function onClick(e) {
        setVisibility(false);
      }
    }, "Cancel")));
  });
};

NewStateDialog.propTypes = {
  setVisibility: _propTypes.default.func.isRequired,
  component: _propTypes.default.object.isRequired
};
var _default = NewStateDialog;
exports.default = _default;