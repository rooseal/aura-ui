"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var dom = _interopRequireWildcard(require("react-dom-factories"));

var Aura = _interopRequireWildcard(require("../.."));

var _Panel = _interopRequireDefault(require("../panel/Panel"));

var _Switch = _interopRequireDefault(require("../../switch/Switch"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _actions = require("../store/components/actions");

var _NewElement = _interopRequireDefault(require("../dialogs/NewElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border: ", ";\n  padding: 1.5em;\n  margin-bottom: 2em;\n  text-align: right;\n  cursor: grab;\n  background-color: ", ";\n\n  ::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 3;\n  }\n\n  :hover {\n    background-color: rgba(230, 255, 230, 0.6);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.8em;\n  margin-bottom: 0.3em;\n  cursor: pointer;\n\n  :hover {\n    color: ", ";\n    font-weight: bold;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  color: ", ";\n  padding: 5px;\n  box-sizing: border-box;\n  overflow-y: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

console.log({
  dom: dom
});

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.textPrimary;
});

var Toggle = _styledComponents.default.p(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.textLight;
});

var Preview = _styledComponents.default.div(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderPrimary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primaryLight;
});

var Drawer = function Drawer(_ref6) {
  var component = _ref6.component,
      element = _ref6.element;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      elementTypesShown = _useState2[0],
      setElementTypesShown = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showNewElementDialog = _useState4[0],
      setShowNewElementDialog = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      newElementType = _useState6[0],
      setNewElementType = _useState6[1];

  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 2),
      store = _useStore2[0],
      dispatch = _useStore2[1];

  var domElements = Object.entries(dom);

  function closeNewElementDialog() {
    setShowNewElementDialog(false);
    setNewElementType(null);
  }

  return _react.default.createElement(_react.default.Fragment, null, showNewElementDialog && _react.default.createElement(_NewElement.default, {
    setVisibility: setShowNewElementDialog,
    element: newElementType
  }), _react.default.createElement(Container, null, _react.default.createElement("h1", {
    style: {
      fontSize: '1.1em'
    }
  }, "Component Drawer"), _react.default.createElement(_Switch.default, {
    options: [{
      text: 'Aura',
      value: 1
    }, {
      text: 'HTML',
      value: 2
    }],
    value: elementTypesShown,
    onChange: setElementTypesShown
  }), elementTypesShown === 1 && _react.default.createElement("div", null, Object.entries(Aura).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        name = _ref8[0],
        Component = _ref8[1];

    return _react.default.createElement(_Panel.default, null, function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          collapsed = _ref10[0],
          setCollapsed = _ref10[1];

      return _react.default.createElement("div", null, _react.default.createElement(Toggle, {
        onClick: function onClick() {
          return setCollapsed(!collapsed);
        }
      }, name), !collapsed && _react.default.createElement(Preview, {
        onClick: function onClick() {
          // dispatch(
          //   addElement(component.content.id, element, {
          //     name,
          //     props:
          //       Object.entries(Component.preview || {}).reduce(
          //         (acc, [current, prop]) => {
          //           if (current === 'children') return acc;
          //           acc = [
          //             ...acc,
          //             {
          //               propName: current,
          //               propValue: prop,
          //               propType:
          //                 current === 'onChange' ||
          //                 current === 'value'
          //                   ? 'function'
          //                   : typeof prop,
          //             },
          //           ];
          //           return acc;
          //         },
          //         [],
          //       ) || {},
          //     children:
          //       Component.preview !== undefined
          //         ? Component.preview.children !== undefined
          //           ? typeof Component.preview.children ===
          //             'string'
          //             ? Component.preview.children
          //             : [] // Todo: Change for real implementation
          //           : null
          //         : null,
          //   }),
          // )
          setNewElementType([name, Component.propTypes]);
          setShowNewElementDialog(true);
        }
      }, Component.preview !== undefined ? _react.default.createElement(Component, Component.preview) : _react.default.createElement(Component, null)));
    });
  })), elementTypesShown === 2 && _react.default.createElement("div", null, domElements.map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        name = _ref12[0],
        fn = _ref12[1];

    return _react.default.createElement(_Panel.default, null, function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 2),
          collapsed = _ref14[0],
          setCollapsed = _ref14[1];

      return _react.default.createElement("div", null, _react.default.createElement(Toggle, {
        onClick: function onClick() {
          return setCollapsed(!collapsed);
        }
      }, name), !collapsed && _react.default.createElement(Preview, {
        onClick: function onClick() {
          return dispatch((0, _actions.addElement)(component.content.id, element, {
            name: name,
            props: [],
            children: null
          }));
        }
      }, "No Preview available"));
    });
  }))));
};

Drawer.propTypes = {
  component: _propTypes.default.object.isRequired,
  element: _propTypes.default.any.isRequired
};
var _default = Drawer;
exports.default = _default;