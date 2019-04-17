"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NewComponent = _interopRequireDefault(require("../dialogs/NewComponent"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _Panel = _interopRequireDefault(require("../panel/Panel"));

var _menu = require("../../menu");

var _Logic = _interopRequireDefault(require("./Logic"));

var _State = _interopRequireDefault(require("./State"));

var _Elements = _interopRequireDefault(require("./Elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-top: ", ";\n  border-bottom: ", ";\n  position: relative;\n  background-color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: dodgerblue;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  padding: 2px;\n  padding-left: ", ";\n  outline: none;\n\n  :hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  display: inline-block;\n  font-style: normal;\n  cursor: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100%;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint no-use-before-define: 0 */
var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
});

var Icon = _styledComponents.default.i(_templateObject2(), function (props) {
  return props.onClick !== undefined ? 'pointer' : 'arrow';
}, function (props) {
  return props.color || '#666';
});

var ComponentTitle = _styledComponents.default.div(_templateObject3(), function (props) {
  return "".concat((props.level - 1) * 25, "px");
});

var ComponentName = _styledComponents.default.span(_templateObject4());

var ComponentAttribute = _styledComponents.default.div(_templateObject5(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.textPrimary;
});

var MenuBar = _styledComponents.default.div(_templateObject6(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderPrimary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderPrimary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primaryLight;
});

var Components = function Components(_ref6) {
  var component = _ref6.component,
      _ref6$level = _ref6.level,
      level = _ref6$level === void 0 ? 1 : _ref6$level,
      componentList = _ref6.componentList,
      activeElementId = _ref6.activeElementId,
      setActiveElementId = _ref6.setActiveElementId;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      newComponentDialog = _useState4[0],
      setNewComponentDialog = _useState4[1];

  return _react.default.createElement(_react.default.Fragment, null, newComponentDialog && _react.default.createElement(_NewComponent.default, {
    setVisibility: setNewComponentDialog,
    component: component
  }), _react.default.createElement(ComponentTitle, {
    level: level,
    onClick: function onClick(e) {
      setShow(!show);
    }
  }, show ? _react.default.createElement(Icon, null, "\u23F7") : _react.default.createElement(Icon, null, "\u23F5"), _react.default.createElement(Icon, {
    color: "red"
  }, "\u058E"), _react.default.createElement(ComponentName, {
    style: {
      color: 'royalblue'
    }
  }, component.content.name), _react.default.createElement("div", {
    style: {
      position: 'absolute',
      right: '0',
      top: '0'
    }
  }, _react.default.createElement(Icon, {
    color: "royalblue",
    onClick: function onClick(e) {
      e.stopPropagation();
      setNewComponentDialog(true);
    }
  }, "+"))), show && _react.default.createElement("div", null, _react.default.createElement(ComponentAttribute, null, _react.default.createElement(_Panel.default, null, function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        collapsed = _ref8[0],
        setCollapsed = _ref8[1];

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ComponentTitle, {
      role: "button",
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && setCollapsed(!collapsed);
      },
      tabIndex: "0",
      style: {
        paddingLeft: "".concat(level * 25, "px")
      },
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      }
    }, _react.default.createElement(Icon, null, "\u26C1"), "State"), !collapsed && _react.default.createElement(_State.default, {
      component: component
    }));
  })), _react.default.createElement(ComponentAttribute, null, _react.default.createElement(_Panel.default, null, function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        collapsed = _ref10[0],
        setCollapsed = _ref10[1];

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ComponentTitle, {
      role: "button",
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && setCollapsed(!collapsed);
      },
      tabIndex: "0",
      style: {
        paddingLeft: "".concat(level * 25, "px")
      },
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      }
    }, _react.default.createElement(Icon, {
      color: "green"
    }, "\u2699"), "Logic"), !collapsed && _react.default.createElement(_Logic.default, {
      component: component
    }));
  })), _react.default.createElement(ComponentAttribute, null, _react.default.createElement(_Panel.default, null, function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        collapsed = _ref12[0],
        setCollapsed = _ref12[1];

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ComponentTitle, {
      role: "button",
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && setCollapsed(!collapsed);
      },
      tabIndex: "0",
      style: {
        paddingLeft: "".concat(level * 25, "px")
      },
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      }
    }, _react.default.createElement(Icon, {
      color: "gold"
    }, "\u2668"), "Elements"), !collapsed && _react.default.createElement(_Elements.default, {
      component: component,
      setActiveElementId: setActiveElementId,
      activeElementId: activeElementId
    }));
  })), _react.default.createElement(ComponentAttribute, null, _react.default.createElement(ComponentTitle, {
    style: {
      paddingLeft: "".concat(level * 25, "px")
    }
  }, _react.default.createElement(Icon, {
    color: "dodgerblue"
  }, "\u269B"), "Components")), printChildScopes(component, level, componentList, setActiveElementId, activeElementId)));
};

var ComponentTree = function ComponentTree(_ref13) {
  var component = _ref13.component,
      level = _ref13.level,
      activeElementId = _ref13.activeElementId,
      setActiveElementId = _ref13.setActiveElementId;

  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 1),
      componentList = _useStore2[0].components.componentList;

  return _react.default.createElement(Container, null, _react.default.createElement(MenuBar, {
    style: {
      borderTop: '0'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  }, _react.default.createElement("div", null, _react.default.createElement(_menu.Menu, {
    header: _react.default.createElement("i", {
      style: {
        padding: '4px 10px 5px 10px',
        fontSize: '1em',
        display: 'inline-block',
        color: '#ccc',
        cursor: 'pointer',
        outline: 'none'
      }
    }, "\u22EF")
  }, _react.default.createElement(_menu.ActionItem, {
    action: function action() {
      return console.log('You die hard');
    }
  }, "Push me!"), _react.default.createElement(_menu.ActionItem, {
    action: function action() {
      return console.log('You die harder');
    }
  }, "No, push me!"))))), _react.default.createElement(Components, {
    component: componentList[0],
    level: 1,
    componentList: componentList,
    setActiveElementId: setActiveElementId,
    activeElementId: activeElementId
  }));
};

ComponentTree.propTypes = {
  component: _propTypes.default.shape({
    content: _propTypes.default.any.isRequired,
    children: _propTypes.default.array.isRequired
  }),
  level: _propTypes.default.number,
  activeElementId: _propTypes.default.any.isRequired,
  setActiveElementId: _propTypes.default.func.isRequired
};
ComponentTree.defaultProps = {
  component: undefined,
  level: 1
};

function printChildScopes(scope, level, scopes, setActiveElementId, activeElementId) {
  // console.log({ printChildScope: scope });
  if (scope.children.length === 0) {
    return null;
  }

  return scope.children.map(function (currentChild) {
    return _react.default.createElement(Components, {
      component: scopes.find(function (currentScope) {
        return currentScope.content.id === currentChild;
      }),
      level: level + 1,
      componentList: scopes,
      activeElementId: activeElementId,
      setActiveElementId: setActiveElementId
    });
  });
}

var _default = ComponentTree;
exports.default = _default;