"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elements = function Elements(_ref) {
  var component = _ref.component,
      activeElementId = _ref.activeElementId,
      setActiveElementId = _ref.setActiveElementId;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_styled.SectionContainer, null, component.content.render.length === 0 ? _react.default.createElement("p", {
    style: {
      padding: '5px 5px 5px 5px',
      textAlign: 'center'
    }
  }, "No Elements in Component yet.") : _react.default.createElement("div", null, component.content.render.map(function (currentElement) {
    return _react.default.createElement("div", {
      style: {
        display: 'flex',
        padding: '2px 5px'
      }
    }, _react.default.createElement("div", {
      onClick: function onClick() {
        setActiveElementId(currentElement.id);
      },
      role: "button",
      tabIndex: "0",
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && setActiveElementId(currentElement.id);
      },
      style: {
        flex: '1',
        cursor: 'pointer',
        fontWeight: activeElementId === currentElement.id ? 'bold' : 'normal'
      }
    }, currentElement.name), activeElementId === currentElement.id && _react.default.createElement("div", {
      style: {
        fontStyle: 'italic'
      }
    }, "active"));
  }))));
};

Elements.propTypes = {
  component: _propTypes.default.object.isRequired
};
var _default = Elements;
exports.default = _default;