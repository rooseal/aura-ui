"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _GuiBuilder = _interopRequireDefault(require("./GuiBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: 0 */
(0, _react2.storiesOf)('GUI Builder', module).add('Gui Builder App', function () {
  return _react.default.createElement("div", {
    style: {
      fontFamily: 'Verdana',
      fontSize: '12px',
      color: '#666'
    }
  }, _react.default.createElement(_GuiBuilder.default, null));
});