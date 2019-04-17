"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useList = _interopRequireDefault(require("./useList"));

var _useControlledState3 = _interopRequireDefault(require("../../hooks/useControlledState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultKeymap = {
  select: [13] // enter

};

var useSelectList = function useSelectList(_ref) {
  var propValue = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["value", "onChange"]);

  // Create the final keymap object based on the keymap prop
  var keymap = (0, _react.useMemo)(function () {
    return _objectSpread({}, defaultKeymap, rest.customKeymap);
  }, [rest.customKeymap]);

  var _useControlledState = (0, _useControlledState3.default)(propValue, onChange),
      _useControlledState2 = _slicedToArray(_useControlledState, 2),
      value = _useControlledState2[0],
      setValue = _useControlledState2[1];

  var list = (0, _useList.default)(_objectSpread({}, rest, {
    keymap: keymap
  }));
  list.items = list.items.map(function (currentItem) {
    var item = currentItem.item;
    var currentValue = typeof item === 'string' ? item : item.props !== undefined ? item.props.value !== undefined ? item.props.value : item.props.children : item;
    return _objectSpread({}, currentItem, {
      value: currentValue,
      isSelected: currentValue === value
    });
  });

  function keyHandler(e) {
    list.keyHandler(e);
    /* ENTER */

    if (list.keymap.select.includes(e.keyCode)) {
      e.preventDefault();
      var currentActive = list.items.find(function (current) {
        return current.id === list.active;
      });
      setValue(currentActive.value);
    }
  } // useEffect(() => {
  //   window.addEventListener('keydown', keyHandler);
  //   return () => {
  //     window.removeEventListener('keydown', keyHandler);
  //   };
  // });


  return _objectSpread({}, list, {
    keyHandler: keyHandler,
    value: value,
    setValue: setValue
  });
};

var _default = useSelectList;
exports.default = _default;