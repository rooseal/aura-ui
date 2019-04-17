"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useList = _interopRequireDefault(require("../list/useList"));

var _useClickOutside = _interopRequireDefault(require("../../hooks/useClickOutside"));

var Styled = _interopRequireWildcard(require("./styled"));

var _ActionItem = _interopRequireDefault(require("./ActionItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Menu = function Menu(_ref) {
  var header = _ref.header,
      children = _ref.children;

  // console.log({ children });
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var list = (0, _useList.default)({
    list: children
  });
  var headerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!open) {
      headerRef.current.focus();
    } else {
      list.setActive(list.items[0].key);
    }
  }, [open]);
  var containerRef = (0, _react.useRef)(null);
  (0, _useClickOutside.default)(containerRef, function () {
    return setOpen(false);
  });

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child, i) {
      return (0, _react.cloneElement)(child, _objectSpread({}, list.items[i], child.props));
    });
  };

  return _react.default.createElement("div", {
    role: "menu",
    ref: containerRef,
    tabIndex: "-1",
    style: {
      position: 'relative'
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
      }

      if (e.key === 'Tab') {
        setOpen(false);
      }
    }
  }, typeof header === 'string' ? _react.default.createElement(Styled.Header, {
    ref: headerRef,
    onClick: function onClick() {
      return setOpen(!open);
    },
    open: open
  }, header) : _react.default.cloneElement(header, {
    ref: headerRef,
    onClick: function onClick() {
      return setOpen(!open);
    },
    open: open
  }), open && _react.default.createElement(Styled.Menu, {
    onKeyDown: list.keyHandler
  }, renderChildren()));
};

Menu.propTypes = {
  children: _propTypes.default.any.isRequired,
  header: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
Menu.defaultProps = {};
Menu.preview = {
  children: [_react.default.createElement(_ActionItem.default, null, "Sample 1"), _react.default.createElement(_ActionItem.default, null, "Sample 2"), _react.default.createElement(_ActionItem.default, null, "Sample 3")],
  header: 'Dropdown Menu'
};
var _default = Menu;
exports.default = _default;