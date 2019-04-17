"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reducer = _interopRequireDefault(require("./components/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(state, action) {
  return {
    components: (0, _reducer.default)(state.components, action)
  };
};

exports.default = _default;