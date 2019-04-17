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

  return _react.default.createElement(_dialog.default, null, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        scopeDialogFields = _ref3[0],
        setScopeDialogField = _ref3[1];

    return _react.default.createElement("div", null, _react.default.createElement("h2", {
      style: {
        marginBottom: '50px'
      }
    }, "Add state for ", component.content.name), _react.default.createElement("p", null, "State Name"), _react.default.createElement("div", {
      style: {
        width: '80%',
        maxWidth: '500px'
      }
    }, _react.default.createElement(_Text.default, {
      value: scopeDialogFields.name,
      onChange: function onChange(e) {
        return setScopeDialogField('name', e.target.value);
      }
    })), _react.default.createElement("p", null, "Initial Value"), _react.default.createElement("div", {
      style: {
        width: '80%',
        maxWidth: '500px'
      }
    }, _react.default.createElement(_Text.default, {
      value: scopeDialogFields.initial,
      onChange: function onChange(e) {
        return setScopeDialogField('initial', e.target.value);
      }
    })), _react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        marginTop: '50px'
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
        dispatch((0, _actions.addState)(component.content.id, {
          name: scopeDialogFields.name,
          initialValue: scopeDialogFields.initial
        }));
        setVisibility(false);
      }
    }, "Add state"), _react.default.createElement("button", {
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