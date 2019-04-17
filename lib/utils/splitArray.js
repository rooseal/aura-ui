"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var splitCollection = function splitCollection(condition, collection) {
  return collection.reduce(function (acc, current) {
    var isPositive = condition(current);

    if (isPositive) {
      return [_toConsumableArray(acc[0]).concat([current]), acc[1]];
    }

    return [acc[0], _toConsumableArray(acc[1]).concat([current])];
  }, [[], []]);
};

var _default = splitCollection;
exports.default = _default;