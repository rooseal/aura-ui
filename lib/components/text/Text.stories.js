"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: 0 */
(0, _react2.storiesOf)('Text Input', module).add('Text Line', function () {
  return _react.default.createElement(_.TextLine, {
    label: "Firstname"
  });
}).add('Text Area', function () {
  return _react.default.createElement(_.TextArea, null);
});