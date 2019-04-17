"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useClickOutside = function useClickOutside(element, func) {
  (0, _react.useEffect)(function () {
    function handleClick(e) {
      if (!element.current.contains(e.target) && element !== e.target) {
        if (typeof func === 'function') {
          func();
        } else {
          throw Error("The second argument to useClickOutside must be a function");
        }
      }
    }

    window.addEventListener('click', handleClick);
    return function () {
      window.removeEventListener('click', handleClick);
    };
  }, []);
};

var _default = useClickOutside;
exports.default = _default;