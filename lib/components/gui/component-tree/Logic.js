"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NewFunction = _interopRequireDefault(require("../dialogs/NewFunction"));

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Logic = function Logic(_ref) {
  var component = _ref.component;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showNewFunctionDialog = _useState2[0],
      setShowNewFunctionDialog = _useState2[1];

  return _react.default.createElement(_react.default.Fragment, null, showNewFunctionDialog && _react.default.createElement(_NewFunction.default, {
    setVisibility: setShowNewFunctionDialog,
    component: component
  }), _react.default.createElement(_styled.SectionContainer, null, component.content.logic.length === 0 ? _react.default.createElement("p", {
    style: {
      padding: '5px 5px 5px 5px',
      textAlign: 'center'
    }
  }, _react.default.createElement(_styled.AddButton, {
    onClick: function onClick() {
      return setShowNewFunctionDialog(true);
    },
    text: "Add Logic",
    style: {
      fontSize: '1.2em'
    }
  })) : _react.default.createElement("div", null, component.content.logic.map(function (currentLogic) {
    return _react.default.createElement("div", {
      style: {
        display: 'flex',
        padding: '2px 5px'
      }
    }, _react.default.createElement("div", {
      style: {
        flex: '1'
      }
    }, currentLogic.name, "()"), _react.default.createElement("div", {
      style: {
        fontStyle: 'italic'
      }
    }, "function"));
  }), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px'
    }
  }, _react.default.createElement(_styled.AddButton, {
    onClick: function onClick() {
      return setShowNewFunctionDialog(true);
    },
    text: "Add Logic"
  })))));
};

Logic.propTypes = {
  component: _propTypes.default.object.isRequired
};
var _default = Logic;
exports.default = _default;