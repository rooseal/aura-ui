"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _standalone = _interopRequireDefault(require("prettier/standalone"));

var _parserBabylon = _interopRequireDefault(require("prettier/parser-babylon"));

var _componentOpen = _interopRequireDefault(require("./componentOpen"));

var _componentClose = _interopRequireDefault(require("./componentClose"));

var _componentState = _interopRequireDefault(require("./componentState"));

var _componentFunction = _interopRequireDefault(require("./componentFunction"));

var _componentRender = _interopRequireDefault(require("./componentRender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Component' : _ref$name,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? [] : _ref$state,
      _ref$logic = _ref.logic,
      logic = _ref$logic === void 0 ? [] : _ref$logic,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? [] : _ref$render;
  var str = "".concat((0, _componentOpen.default)(name), "\n  ").concat(state.map(function (_ref2) {
    var stateName = _ref2.name,
        value = _ref2.value;
    return (0, _componentState.default)(stateName, value);
  }).join('\n'), "\n  ").concat(logic.map(function (_ref3) {
    var functionName = _ref3.name,
        paramList = _ref3.params,
        functionBody = _ref3.body;
    return (0, _componentFunction.default)(functionName, paramList, functionBody);
  }).join('\n'), "\n  ").concat((0, _componentRender.default)(render)).concat((0, _componentClose.default)());
  return _standalone.default.format(str, {
    parser: 'babylon',
    plugins: [_parserBabylon.default]
  });
};

exports.default = _default;