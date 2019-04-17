"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addElement = exports.addLogic = exports.addState = exports.addComponentTree = exports.createComponent = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var actionTypes = _interopRequireWildcard(require("./actionsTypes"));

var _tree = require("../../tree/tree");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createComponent = function createComponent(name) {
  return {
    id: (0, _uuid.default)(),
    name: name,
    state: [],
    logic: [],
    render: []
  };
};

exports.createComponent = createComponent;

var addComponentTree = function addComponentTree(componentName, parentComponent) {
  return {
    type: actionTypes.ADD_COMPONENT,
    payload: {
      component: (0, _tree.tree)(createComponent(componentName), parentComponent),
      parent: parentComponent
    }
  };
};

exports.addComponentTree = addComponentTree;

var addState = function addState(componentId, _ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue;
  return {
    type: actionTypes.ADD_STATE,
    payload: {
      component: componentId,
      name: name,
      initialValue: initialValue
    }
  };
};

exports.addState = addState;

var addLogic = function addLogic(componentId, _ref2) {
  var name = _ref2.name,
      params = _ref2.params,
      body = _ref2.body;
  return {
    type: actionTypes.ADD_LOGIC,
    payload: {
      component: componentId,
      name: name,
      params: params,
      body: body
    }
  };
};

exports.addLogic = addLogic;

var addElement = function addElement(componentId, parentId, _ref3) {
  var name = _ref3.name,
      _ref3$props = _ref3.props,
      props = _ref3$props === void 0 ? [] : _ref3$props,
      _ref3$children = _ref3.children,
      children = _ref3$children === void 0 ? [] : _ref3$children;
  return {
    type: actionTypes.ADD_ELEMENT,
    payload: {
      component: componentId,
      parentId: parentId,
      id: (0, _uuid.default)(),
      name: name,
      props: props,
      children: children
    }
  };
};

exports.addElement = addElement;