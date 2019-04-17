"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _v = _interopRequireDefault(require("uuid/v1"));

var _UseState = _interopRequireDefault(require("../utilities/UseState"));

var _ = require(".");

var _buttons = require("../buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var messages = ['The cat jumped over the dog', '2 ways for splitting trees', 'No way out of wary querys', 'When messages get longer and longer by the day', 'Hooks are gonna shake the world harder than an earthquake'];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

var MultipleMessages = function MultipleMessages() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      messageBus = _useState2[0],
      setMessageBus = _useState2[1];

  var latestMessageBus = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    latestMessageBus.current = messageBus;
  }, [latestMessageBus]);

  function add(value) {
    setMessageBus(_toConsumableArray(latestMessageBus.current).concat([{
      id: (0, _v.default)(),
      value: value
    }]));
  }

  function remove(id) {
    setMessageBus(latestMessageBus.current.filter(function (current) {
      return current.id !== id;
    }));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, _react.default.createElement(_buttons.Button, {
    onClick: function onClick() {
      return add(getRandomMessage());
    }
  }, "Show new message"), latestMessageBus.current.map(function (message) {
    return _react.default.createElement(_.Message, {
      key: message.id,
      show: true,
      hide: function hide() {
        return remove(message.id);
      }
    }, message.value);
  })));
};

(0, _react2.storiesOf)('Message', module).add('Short Message', function () {
  return _react.default.createElement(_UseState.default, {
    initial: false
  }, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        message = _ref2[0],
        setMessage = _ref2[1];

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_buttons.Button, {
      onClick: function onClick() {
        return setMessage(true);
      }
    }, "Show message"), _react.default.createElement(_.Message, {
      show: message,
      hide: function hide() {
        return setMessage(false);
      }
    }, "This is a test message"));
  });
}).add('Long Message', function () {
  return _react.default.createElement(_UseState.default, {
    initial: false
  }, function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        message = _ref4[0],
        setMessage = _ref4[1];

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_buttons.Button, {
      onClick: function onClick() {
        return setMessage(true);
      }
    }, "Show message"), _react.default.createElement(_.Message, {
      show: message,
      hide: function hide() {
        return setMessage(false);
      }
    }, "This is a somewhat longer test message for seeing the popup behave in different situations"));
  });
}).add('Multiple Messages', function () {
  return _react.default.createElement(MultipleMessages, null);
}); // .add('Styled Select Base', () => <StyledSelect />);
// .add('List of Items', () => (
//   <div style={{ width: '300px' }}>
//     <ItemList storeValue="Cappucino" />
//   </div>
// ));