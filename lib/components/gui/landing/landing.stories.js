"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _landing = _interopRequireDefault(require("./landing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint import/no-extraneous-dependencies: 0 */
(0, _react2.storiesOf)('GUI Builder', module).add('Landing Page', function () {
  return _react.default.createElement("div", {
    style: {
      fontFamily: 'Verdana',
      fontSize: '14px',
      color: '#666'
    }
  }, _react.default.createElement(_landing.default, null));
});