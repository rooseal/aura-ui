"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Styled = _interopRequireWildcard(require("./styled"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref, ref) {
  var action = _ref.action,
      children = _ref.children;
  return (// console.log({ childType: typeof children });
    _react.default.createElement(Styled.Item, {
      tabIndex: "-1",
      onClick: action
    }, children)
  );
};

Item.propTypes = {
  children: _propTypes.default.any.isRequired,
  action: _propTypes.default.func.isRequired
};
Item.defaultProps = {};
var _default = Item;
exports.default = _default;