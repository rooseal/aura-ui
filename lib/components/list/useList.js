"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _v = _interopRequireDefault(require("uuid/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Todo: Make a seperate useKeys hook where it also accepts what element to add the eventlistener to or none to not add the function
// List state
//  active
// List actions
//  setActive
var defaultKeymap = {
  previous: [38],
  // up
  next: [40],
  // down
  select: [13] // enter

};

var useList = function useList(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      _ref$keymap = _ref.keymap,
      customKeymap = _ref$keymap === void 0 ? {} : _ref$keymap;

  // Set the local list state
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      _setActive = _useState2[1]; // If the list comes from a components children and we have only 1 child
  // we don't get it as array. In that case we need to cast it to array


  if (!Array.isArray(list)) {
    list = [list];
  } // An object with the refs of all the items in the list
  // We need the refs here to manage the focus of the active item


  var refs = (0, _react.useRef)(new Map());

  var setRef = function setRef(id, ref) {
    if (ref !== refs.current.get(id)) {
      refs.current.set(id, ref);
    }
  }; // Create a seperate array of ids for the list items. The ids will only change when the list changes.


  var ids = (0, _react.useMemo)(function () {
    return list.map(function () {
      return (0, _v.default)();
    });
  }, [list]); // Create the list of props for the items

  var items = list.map(function (item, index) {
    var id = ids[index];
    return {
      item: item,
      _ref: refs.current.get(item),
      id: id,
      key: id,
      ref: function ref(_ref2) {
        return setRef(id, _ref2);
      },
      isActive: active === id,
      setActive: function setActive() {
        return _setActive(id);
      }
    };
  }); // Focus the html element corresponding to the active item

  (0, _react.useEffect)(function () {
    // debugger;
    if (active !== undefined) {
      var activeElement = refs.current.get(active);

      if (activeElement !== null && activeElement !== undefined) {
        activeElement.focus();
      }
    }
  } // [active],
  ); // Create the final keymap object based on the keymap prop

  var keymap = (0, _react.useMemo)(function () {
    return _objectSpread({}, defaultKeymap, customKeymap);
  }, [customKeymap]); // Key Handler for the list with controls for up and down

  function keyHandler(e) {
    console.log('useList Keyhandler');
    /* UP */

    if (keymap.previous.includes(e.keyCode)) {
      // Stop the window from scrolling up when pressing up
      e.preventDefault(); // Stop any parent element actions from firing when the list is active

      e.stopPropagation();
      var activeIndex = ids.findIndex(function (current) {
        return current === active;
      }) || 0;

      if (ids[activeIndex - 1] !== undefined) {
        _setActive(ids[activeIndex - 1]);
      } else {
        _setActive(ids[0]);
      }
    }
    /* DOWN */


    if (keymap.next.includes(e.keyCode)) {
      // Stop the window from scrolling down when pressing down
      e.preventDefault(); // Stop any parent element actions from firing when the list is active

      e.stopPropagation();

      var _activeIndex = ids.findIndex(function (current) {
        return current === active;
      }) || 0;

      if (ids[_activeIndex + 1] !== undefined) {
        _setActive(ids[_activeIndex + 1]);
      } else {
        _setActive(ids[list.length - 1]);
      }
    }
  }

  return {
    active: active,
    setActive: _setActive,
    items: items,
    keyHandler: keyHandler,
    keymap: keymap
  };
};

var _default = useList;
exports.default = _default;