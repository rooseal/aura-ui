"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _componentToString = _interopRequireDefault(require("../../editor/snippets/componentToString"));

var actionTypes = _interopRequireWildcard(require("./actionsTypes"));

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(state, action) {
  console.log({
    action: action
  });

  switch (action.type) {
    case 'INIT':
      return (0, _initialState.default)(state);

    case actionTypes.ADD_COMPONENT:
      console.log({
        state: state
      });
      return _objectSpread({}, state, {
        componentList: _toConsumableArray(state.componentList.map(function (currentComponent) {
          console.log({
            current: currentComponent.content,
            new: action.payload.component.content
          });

          if (currentComponent.content.id === action.payload.parent.content.id) {
            return _objectSpread({}, currentComponent, {
              children: _toConsumableArray(currentComponent.children).concat([action.payload.component.content.id])
            });
          }

          return currentComponent;
        })).concat([action.payload.component])
      });

    case actionTypes.ADD_STATE:
      console.log({
        state: state
      });
      return _objectSpread({}, state, {
        componentList: _toConsumableArray(state.componentList.map(function (currentComponent) {
          console.log({
            lala: currentComponent.content
          });

          if (currentComponent.content.id === action.payload.component) {
            return _objectSpread({}, currentComponent, {
              content: _objectSpread({}, currentComponent.content, {
                state: _toConsumableArray(currentComponent.content.state).concat([{
                  name: action.payload.name,
                  value: action.payload.initialValue
                }])
              })
            });
          }

          return currentComponent;
        }))
      });

    case actionTypes.ADD_LOGIC:
      console.log({
        state: state
      });
      return _objectSpread({}, state, {
        componentList: _toConsumableArray(state.componentList.map(function (currentComponent) {
          console.log({
            lala: currentComponent.content
          });

          if (currentComponent.content.id === action.payload.component) {
            return _objectSpread({}, currentComponent, {
              content: _objectSpread({}, currentComponent.content, {
                logic: _toConsumableArray(currentComponent.content.logic).concat([{
                  name: action.payload.name,
                  params: action.payload.params,
                  body: action.payload.body
                }])
              })
            });
          }

          return currentComponent;
        }))
      });

    case actionTypes.ADD_ELEMENT:
      console.log({
        state: state
      });
      return _objectSpread({}, state, {
        componentList: _toConsumableArray(state.componentList.map(function (currentComponent) {
          console.log({
            lala: currentComponent.content
          });

          if (currentComponent.content.id === action.payload.component) {
            return _objectSpread({}, currentComponent, {
              content: _objectSpread({}, currentComponent.content, {
                render: _toConsumableArray(currentComponent.content.render.map(function (currentElement) {
                  console.log({
                    currentElement: currentElement
                  });

                  if (currentElement.id === action.payload.parentId) {
                    return _objectSpread({}, currentElement, {
                      children: _toConsumableArray(currentElement.children || []).concat([action.payload.id])
                    });
                  }

                  return currentElement;
                })).concat([{
                  id: action.payload.id,
                  name: action.payload.name,
                  props: action.payload.props,
                  children: action.payload.children,
                  parent: action.payload.parentId
                }])
              })
            });
          }

          return currentComponent;
        }))
      });

    default:
      return state;
  }
};

exports.default = _default;