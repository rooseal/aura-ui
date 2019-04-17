"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var functionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handleAction';
  var paramList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var functionBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "console.log('Executing handleAction');";
  console.log({
    paramList: paramList
  });
  return "\n    function ".concat(functionName, " (").concat(paramList.map(function (name, index) {
    return "".concat(name);
  }), ") {\n      ").concat(functionBody, "\n    }\n    ");
};

exports.default = _default;