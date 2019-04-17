"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dialog = _interopRequireDefault(require("../../dialog"));

var _Text = _interopRequireDefault(require("../../Text"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _actions = require("../store/components/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewComponentDialog = function NewComponentDialog(_ref) {
  var setVisibility = _ref.setVisibility,
      element = _ref.element;

  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 2),
      store = _useStore2[0],
      dispatch = _useStore2[1];

  return _react.default.createElement(_dialog.default, null, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        scopeDialogFields = _ref3[0],
        setScopeDialogField = _ref3[1];

    return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Configure your Element"), _react.default.createElement("div", {
      style: {
        width: '80%',
        maxWidth: '500px'
      }
    }, JSON.stringify(element, null, 2)), _react.default.createElement("div", {
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
        // dispatch(addComponentTree(scopeDialogFields.name, component));
        setVisibility(false);
      }
    }, "Add Element"), _react.default.createElement("button", {
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

NewComponentDialog.propTypes = {
  setVisibility: _propTypes.default.func.isRequired,
  element: _propTypes.default.object.isRequired
};
var _default = NewComponentDialog;
exports.default = _default;