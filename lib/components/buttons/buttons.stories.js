"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: 0 */
(0, _react2.storiesOf)('Buttons', module).add('Styled Base', function () {
  return _react.default.createElement(_.StyledButton, null, "Styled Base");
}).add('Default Button', function () {
  return _react.default.createElement(_.Button, null, "Default Button");
}).add('Default Submit', function () {
  return _react.default.createElement(_.Submit, null, "Default Submit");
}).add('Default Anchor', function () {
  return _react.default.createElement(_.Anchor, null, "Default Anchor");
});