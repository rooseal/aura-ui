"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tabs = _interopRequireDefault(require("../../tabs/Tabs"));

var _Tab = _interopRequireDefault(require("../../tabs/Tab"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _List = _interopRequireDefault(require("../../list/List"));

var _Designer = _interopRequireDefault(require("../designer/Designer"));

var _drawer = _interopRequireDefault(require("../drawer/drawer"));

var _ComponentTree = _interopRequireDefault(require("../component-tree/ComponentTree"));

var _Editor = _interopRequireDefault(require("../editor/Editor"));

var _Store = _interopRequireDefault(require("../store/Store"));

var _Switch = _interopRequireWildcard(require("../../switch/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                        border: 0;\n                        padding: 0 10px;\n                      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-top: ", ";\n  border-bottom: ", ";\n  position: relative;\n  background-color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  & > div {\n    flex: 1;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  color: dodgerblue;\n  padding: 5px 20px;\n  border: 0;\n  display: block;\n  border-radius: 4px;\n  width: 100%;\n  margin: 5px 0;\n\n  :hover {\n    background-color: dodgerblue;\n    color: white;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  background-color: white;\n  border: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vh - 20px);\n  width: calc(100vw - 20px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DISPLAY_MODES = {
  VISUAL: Symbol('visual'),
  EDITOR: Symbol('editor'),
  SPLIT: Symbol('split')
};

var Container = _styledComponents.default.div(_templateObject());

var FlexRow = _styledComponents.default.div(_templateObject2());

var FlexColumn = _styledComponents.default.div(_templateObject3());

var Panel = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || '100%';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.borderPrimary;
});

var ListItem = _styledComponents.default.button(_templateObject5());

var FlexContainer = _styledComponents.default.div(_templateObject6());

var MenuBar = _styledComponents.default.div(_templateObject7(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderPrimary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderPrimary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primaryLight;
});

var Workspace = function Workspace(props) {
  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 2),
      store = _useStore2[0],
      dispatch = _useStore2[1];

  var _useState = (0, _react.useState)([store.components.componentList[0].content.id]),
      _useState2 = _slicedToArray(_useState, 2),
      components = _useState2[0],
      setComponents = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeElementId = _useState4[0],
      setActiveElementId = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      activeIndex = _useState6[0],
      setActiveIndex = _useState6[1];

  var _useState7 = (0, _react.useState)(DISPLAY_MODES.VISUAL),
      _useState8 = _slicedToArray(_useState7, 2),
      mode = _useState8[0],
      setMode = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      showDrawer = _useState10[0],
      setShowDrawer = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      showComponentTree = _useState12[0],
      setShowComponentTree = _useState12[1];

  function addComponent(component) {
    setComponents(_toConsumableArray(components).concat([component.content.id]));
  }

  function removeComponent(component) {
    setComponents(components.filter(function (current) {
      return current.content.id !== component.content.id;
    }));
  }

  function switchComponents(newIndex) {
    setActiveElementId(null);
    setActiveIndex(newIndex);
  }

  var componentObjects = (0, _react.useMemo)(function (_) {
    return components.map(function (x) {
      return store.components.componentList.find(function (current) {
        return current.content.id === x;
      });
    });
  }, [components, store]);
  return _react.default.createElement(Container, null, _react.default.createElement(FlexRow, {
    style: {
      overflow: 'hidden'
    }
  }, showDrawer && _react.default.createElement(Panel, {
    style: {
      width: '30%',
      minWidth: '250px',
      borderRight: '0'
    }
  }, _react.default.createElement(_drawer.default, {
    component: componentObjects[activeIndex],
    element: activeElementId
  })), _react.default.createElement(Panel, {
    style: {
      borderRight: '0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, _react.default.createElement(MenuBar, {
    style: {
      border: '0'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 5px'
    }
  }, _react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setShowDrawer(!showDrawer);
    },
    style: {
      fontSize: '0.9em',
      color: '#ccc',
      border: '1px solid #aaa',
      padding: '2px 4px',
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer'
    }
  }, "\u25C0")), _react.default.createElement("div", {
    style: {
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      padding: '0 20px'
    }
  }, _react.default.createElement("div", {
    style: {
      maxWidth: '200px'
    }
  }, _react.default.createElement(_Switch.default, {
    options: [{
      text: '▣',
      value: DISPLAY_MODES.VISUAL
    }, {
      text: '</>',
      value: DISPLAY_MODES.EDITOR
    }, {
      text: '◫',
      value: DISPLAY_MODES.SPLIT
    }],
    value: mode,
    onChange: function onChange(value) {
      return setMode(value);
    },
    styled: {
      Container: (0, _styledComponents.default)(_Switch.Container)(_templateObject8())
    }
  })), _react.default.createElement("div", {
    style: {
      color: '#ccc',
      display: 'flex'
    }
  }, _react.default.createElement("div", {
    style: {
      cursor: 'pointer',
      margin: '0 5px',
      padding: '5px 10px',
      flex: '1'
    }
  }, "Save"), _react.default.createElement("div", {
    style: {
      cursor: 'pointer',
      margin: '0 5px',
      padding: '5px 10px',
      flex: '1'
    }
  }, "Compile"), _react.default.createElement("div", {
    style: {
      cursor: 'pointer',
      margin: '0 5px',
      padding: '5px 10px',
      flex: '1'
    }
  }, "Run"), _react.default.createElement("div", {
    style: {
      cursor: 'pointer',
      margin: '0 5px',
      padding: '5px 10px',
      flex: '1'
    }
  }, "Export"), _react.default.createElement("div", {
    style: {
      cursor: 'pointer',
      margin: '0 5px',
      padding: '5px 10px',
      flex: '1'
    }
  }, "Format"))), _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 5px'
    }
  }, _react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setShowComponentTree(!showComponentTree);
    },
    style: {
      fontSize: '0.9em',
      color: '#ccc',
      border: '1px solid #aaa',
      padding: '2px 4px',
      background: 'transparent',
      outline: 'none',
      cursor: 'pointer'
    }
  }, "\u25B6")))), _react.default.createElement(MenuBar, null, _react.default.createElement(_Tabs.default, {
    updater: switchComponents,
    initial: 0
  }, componentObjects.map(function (currentComponent, i) {
    return _react.default.createElement(_Tab.default, {
      value: i,
      active: i === activeIndex
    }, currentComponent.content.name, ' ', _react.default.createElement("button", {
      type: "button",
      style: {
        fontWeight: 'bold',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: 'transparent',
        border: '0',
        cursor: 'pointer',
        color: 'white'
      },
      onClick: function onClick(e) {
        removeComponent(currentComponent);
      }
    }, "x"));
  }), _react.default.createElement(_Tab.default, {
    value: components.length,
    active: components.length === activeIndex
  }, "\u273A"))), components[activeIndex] !== undefined ? _react.default.createElement(FlexContainer, {
    style: {
      flex: '1'
    }
  }, mode === DISPLAY_MODES.VISUAL || mode === DISPLAY_MODES.SPLIT ? _react.default.createElement(_Designer.default, {
    component: componentObjects[activeIndex]
  }) : null, mode === DISPLAY_MODES.EDITOR || mode === DISPLAY_MODES.SPLIT ? _react.default.createElement(_Editor.default, {
    component: componentObjects[activeIndex]
  }) : null) : _react.default.createElement("div", {
    style: {
      textAlign: 'center',
      width: '400px',
      margin: '100px auto'
    }
  }, _react.default.createElement("h1", null, "Load a component"), _react.default.createElement(_List.default, {
    list: store.components.componentList,
    onChange: addComponent,
    transform: function transform(current, index) {
      return _react.default.createElement(ListItem, {
        onClick: function onClick() {
          return addComponent(current.item);
        }
      }, current.item.content.name);
    }
  }))), showComponentTree && _react.default.createElement(Panel, {
    style: {
      width: '20%',
      minWidth: '300px'
    }
  }, _react.default.createElement(_ComponentTree.default, {
    setActiveElementId: setActiveElementId,
    activeElementId: activeElementId
  }))));
};

var _default = Workspace;
exports.default = _default;