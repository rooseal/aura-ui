"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var stateName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'state';
  var initialValue = arguments.length > 1 ? arguments[1] : undefined;
  return (// console.log({ stateName, initialValue });
    // console.log(`
    // const [${stateName.toLowerCase()}, set${stateName[0].toUpperCase() +
    //   stateName.slice(1).toLowerCase()}] = useState(${initialValue});
    // `);
    "\n  const [".concat(stateName.toLowerCase(), ", set").concat(stateName[0].toUpperCase() + stateName.slice(1).toLowerCase(), "] = React.useState(").concat(initialValue, ");\n  ")
  );
};

exports.default = _default;