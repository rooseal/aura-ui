"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Select = _interopRequireDefault(require("./Select"));

var _Option = _interopRequireDefault(require("./Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: 0 */
var listData = ['Filter Coffee', 'Espresso', 'Latte Machiato', 'Cappucino', 'Hot Chocolat'];
console.log({
  React: _react.default
});
(0, _react2.storiesOf)('Select', module).add('Select (simple list)', function () {
  return _react.default.createElement(_Select.default, {
    list: listData
  });
}).add('Select (children list)', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Select.default, null, listData.map(function (item) {
    return _react.default.createElement(_Option.default, null, item);
  })));
});