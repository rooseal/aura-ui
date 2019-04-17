"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PassRef = function PassRef(_ref2) {
  var pass = _ref2.pass,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["pass", "children"]);

  var _ref = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    pass(_ref);
  }, [_ref]);
  return children({
    _ref: _ref,
    parentProps: props
  });
};

PassRef.propTypes = {
  pass: _propTypes.default.func.isRequired,
  // Function from parent to accept the ref
  children: _propTypes.default.func.isRequired // Function which gets the ref as _ref to use as normal

};
var _default = PassRef;
exports.default = _default;