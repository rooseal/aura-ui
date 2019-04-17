"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _Store = _interopRequireDefault(require("../store/Store"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

var _actions = require("../store/components/actions");

var _Editor = _interopRequireDefault(require("./Editor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var countUpBody = "setCounter(counter+1);";
var countDownBody = "setCounter(counter-1);";

var EditorWrapper = function EditorWrapper(props) {
  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 2),
      store = _useStore2[0],
      dispatch = _useStore2[1];

  var root = store.components.componentList[0];
  (0, _react.useEffect)(function () {
    dispatch((0, _actions.addState)(root.content.id, {
      name: 'counter',
      initialValue: 0
    }));
    dispatch((0, _actions.addLogic)(root.content.id, {
      name: 'countUp',
      params: [],
      body: countUpBody
    }));
    dispatch((0, _actions.addLogic)(root.content.id, {
      name: 'countDown',
      params: [],
      body: countDownBody
    }));
    dispatch((0, _actions.addElement)(root.content.id, null, {
      name: 'div',
      props: [{
        propName: 'style',
        propValue: "{display: 'flex'}",
        propType: typeof Object === "undefined" ? "undefined" : _typeof(Object)
      }],
      children: []
    }));
  }, []);
  (0, _react.useEffect)(function () {
    var currentComponent = store.components.componentList.find(function (c) {
      return root.content.id === c.content.id;
    });
    console.log({
      currentComponent: currentComponent
    });

    if (currentComponent.content.render.length === 1) {
      var parentElement = currentComponent.content.render[0];
      dispatch((0, _actions.addElement)(root.content.id, parentElement.id, {
        name: 'h1',
        props: [],
        children: ['Hello Messagent Developments!']
      }));
    }
  }); // if (root.content.state.length > 0) {
  //   console.log('Print test state string with', root.content.state);
  //   console.log(
  //     stateString(root.content.state[0].name, root.content.state[0].value),
  //   );
  // }

  return _react.default.createElement(_Editor.default, null);
};

(0, _react2.storiesOf)('GUI Builder', module).add('Source Editor', function () {
  return _react.default.createElement(_Store.default, null, _react.default.createElement("div", null, _react.default.createElement(EditorWrapper, null)));
});