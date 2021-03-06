"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: 0 */
(0, _react2.storiesOf)('Anchors', module).add('Styled Base', function () {
  return _react.default.createElement(_.StyledAnchor, null, "Styled Base");
}).add('Default Anchor', function () {
  return _react.default.createElement(_.Anchor, null, "Default Anchor");
}).add('Default Button', function () {
  return _react.default.createElement(_.ButtonAnchor, null, "Default Button");
});