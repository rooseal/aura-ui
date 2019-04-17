"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useControlledState3 = _interopRequireDefault(require("../../hooks/useControlledState"));

var _useClickOutside = _interopRequireDefault(require("../../hooks/useClickOutside"));

var _useSelectList = _interopRequireDefault(require("../list/useSelectList"));

var _Option = _interopRequireDefault(require("./Option"));

var Styled = _interopRequireWildcard(require("./styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-style: italic;\n  color: ", ";\n  padding: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmptyText = _styledComponents.default.p(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.textLight;
});

var Select = function Select(_ref2) {
  var propValue = _ref2.value,
      setPropValue = _ref2.onChange,
      closeOnSelect = _ref2.closeOnSelect,
      dataList = _ref2.list,
      children = _ref2.children,
      _ref2$Styled = _ref2.Styled,
      Container = _ref2$Styled.Container,
      Header = _ref2$Styled.Header,
      List = _ref2$Styled.List,
      props = _objectWithoutProperties(_ref2, ["value", "onChange", "closeOnSelect", "list", "children", "Styled"]);

  var _useControlledState = (0, _useControlledState3.default)(propValue, setPropValue),
      _useControlledState2 = _slicedToArray(_useControlledState, 2),
      selectValue = _useControlledState2[0],
      setSelectValue = _useControlledState2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var list = (0, _useSelectList.default)({
    value: selectValue,
    onChange: setSelectValue,
    list: dataList || children
  });
  var containerRef = (0, _react.useRef)(null);
  var headerRef = (0, _react.useRef)(null);
  (0, _useClickOutside.default)(containerRef, function () {
    setOpen(false);
  });
  (0, _react.useEffect)(function () {
    if (open) {
      if (list.active === undefined) {
        // Todo: There is a bug where if the active item doesn't
        // change, the list doesn't get focus. Because a item gets
        // focus when it is activated. FIX IT.
        list.setActive(list.items[0].key);
      }
    } else {
      headerRef.current.focus();
    }
  }, [open]);

  var handleKeyNavigation = function handleKeyNavigation(e) {
    /* UP */
    if (list.keymap.previous.includes(e.keyCode)) {
      // debugger;
      var activeIndex = list.items.findIndex(function (item) {
        return item.isActive;
      });

      if (activeIndex === -1) {
        activeIndex = list.items.length - 1;
      }

      console.log({
        activeItem: list.items[activeIndex],
        activeIndex: activeIndex,
        list: list
      });

      if (activeIndex > 0) {
        list.setValue(list.items[activeIndex - 1].value);
        list.setActive(list.items[activeIndex - 1].id);
      }
    }
    /* DOWN */


    if (list.keymap.next.includes(e.keyCode)) {
      // debugger;
      var _activeIndex = list.items.findIndex(function (item) {
        return item.isActive;
      });

      if (_activeIndex === -1) {
        _activeIndex = 0;
      }

      console.log({
        activeItem: list.items[_activeIndex],
        activeIndex: _activeIndex,
        list: list
      });

      if (_activeIndex < list.items.length - 1) {
        list.setValue(list.items[_activeIndex + 1].value);
        console.log({
          listItem: list.items[_activeIndex + 1].item
        });
        list.setActive(list.items[_activeIndex + 1].id);
      }
    }
  };

  var handleListKeys = function handleListKeys(e) {
    if (open) {
      list.keyHandler(e);
    }

    if (e.keyCode === 13) {
      if (open && closeOnSelect) {
        setOpen(false);
      }
    }

    if (e.keyCode === 9 || e.keyCode === 27) {
      setOpen(false);

      if (headerRef.current !== null) {
        headerRef.current.focus();
      }
    }

    handleKeyNavigation(e);
  };

  var handleHeaderKeys = function handleHeaderKeys(e) {
    handleKeyNavigation(e);
  };

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child, i) {
      return (0, _react.cloneElement)(child, _objectSpread({
        list: list
      }, list.items[i], child.props));
    });
  };

  var renderList = function renderList() {
    return dataList.map(function (option, i) {
      return _react.default.createElement(_Option.default, _extends({
        list: list
      }, list.items[i]), _typeof(option) === 'object' ? JSON.stringify(option) : option);
    });
  };

  return _react.default.createElement(Container, _extends({
    ref: containerRef
  }, props), _react.default.createElement(Header, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    onKeyDown: handleHeaderKeys,
    open: open,
    ref: headerRef
  }, list.value || 'Please select a value'), open && _react.default.createElement(Styled.Widget, null, _react.default.createElement(List, {
    role: "listbox",
    onKeyDown: handleListKeys,
    tabIndex: "-1"
  }, dataList !== undefined ? renderList() : renderChildren())));
}; // API Reminder: You can only have list OR children. If both are provided the children prop will be ignored


Select.propTypes = {
  list: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    value: _propTypes.default.any.isRequired,
    title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node])
  }))]),
  closeOnSelect: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object]),
  onChange: _propTypes.default.func,
  Styled: _propTypes.default.shape({
    Container: _propTypes.default.any,
    Header: _propTypes.default.any,
    List: _propTypes.default.any
  }),
  value: _propTypes.default.any
};
Select.defaultProps = {
  closeOnSelect: true,
  children: _react.default.createElement(EmptyText, null, "There are no options available"),
  onChange: undefined,
  Styled: {
    Container: Styled.Select,
    Header: Styled.Header,
    List: Styled.List
  },
  value: ''
};
var _default = Select;
exports.default = _default;