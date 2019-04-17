"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _UseState = _interopRequireDefault(require("../utilities/UseState"));

var _ = require(".");

var _buttons = require("../buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UseArrayState = function UseArrayState(_ref) {
  var children = _ref.children,
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? [] : _ref$initial;

  var _useState = (0, _react.useState)(initial),
      _useState2 = _slicedToArray(_useState, 2),
      arr = _useState2[0],
      setArr = _useState2[1]; // function add(item) {
  //   setArr([...arr, item]);
  // }
  // function remove(item) {
  //   setArr(
  //     arr.filter((currentItem, i) => {
  //       const index = arr.findIndex(
  //         currentFindIndex => currentFindIndex === item,
  //       );
  //       const shouldDelete = currentItem === item && i === index;
  //       console.log({ index, shouldDelete });
  //       return !shouldDelete;
  //     }),
  //   );
  // }


  function add(item) {
    arr.push(item);
    setArr(arr);
  }

  function remove(item) {
    var index = arr.indexOf(item);

    if (index === -1) {
      return;
    }

    arr.splice(index, 1);
    setArr(arr);
  }

  console.log({
    arr: arr
  });
  return children([arr, {
    add: add,
    remove: remove
  }]);
};

var messages = ['The cat jumped over the dog', '2 ways for splitting trees', 'No way out of wary querys', 'When messages get longer and longer by the day', 'Hooks are gonna shake the world harder than an earthquake'];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

(0, _react2.storiesOf)('Message', module).add('Short Message', function () {
  return _react.default.createElement(_UseState.default, {
    initial: false
  }, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        message = _ref3[0],
        setMessage = _ref3[1];

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
  }, function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        message = _ref5[0],
        setMessage = _ref5[1];

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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(UseArrayState, {
    initial: []
  }, function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        messageBus = _ref7[0],
        _ref7$ = _ref7[1],
        add = _ref7$.add,
        remove = _ref7$.remove;

    console.log(messageBus);
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      style: {
        marginBottom: '20px'
      }
    }, _react.default.createElement(_buttons.Button, {
      onClick: function onClick() {
        return add(getRandomMessage());
      }
    }, "Show new message"), messageBus.map(function (message) {
      return _react.default.createElement(_.Message, {
        show: true,
        hide: function hide() {
          return remove(message);
        }
      }, message);
    })));
  }));
}); // .add('Styled Select Base', () => <StyledSelect />);
// .add('List of Items', () => (
//   <div style={{ width: '300px' }}>
//     <ItemList storeValue="Cappucino" />
//   </div>
// ));