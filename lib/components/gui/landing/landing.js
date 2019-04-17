"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("../../Text"));

var _buttons = require("../../buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: ", "em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: dodgerblue;\n  margin-top: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.5rem;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: ", ";\n  margin-bottom: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* border: 1px solid #fefefe; */\n  border-radius: 3px;\n  background-color: ", ";\n  padding: 20px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var Card = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.secondaryLight;
});

var Title = _styledComponents.default.h1(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.textPrimary;
});

var Subtitle = _styledComponents.default.h2(_templateObject4());

var Flex = _styledComponents.default.div(_templateObject5());

var Space = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.size || 1;
});

var Landing = function Landing(_ref3) {
  var setProjectName = _ref3.setProjectName;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      newName = _useState2[0],
      setNewName = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      showSection = _useState4[0],
      setShowSection = _useState4[1];

  return _react.default.createElement(Container, null, _react.default.createElement(Card, null, _react.default.createElement(Title, null, "Aura GUI Builder"), _react.default.createElement(Subtitle, null, "Rapid React App Prototyping"), _react.default.createElement(Space, {
    size: "3"
  }), showSection === 1 && _react.default.createElement(Flex, null, _react.default.createElement(_buttons.Button, {
    onClick: function onClick() {
      return setShowSection(2);
    }
  }, "Start New Project"), _react.default.createElement(_buttons.Button, null, "Open Existing Project")), showSection === 2 && _react.default.createElement(Flex, null, _react.default.createElement(_Text.default, {
    value: newName,
    onChange: function onChange(e) {
      return setNewName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && setProjectName(newName);
    },
    autoFocus: true
  }))));
};

Landing.propTypes = {
  setProjectName: _propTypes.default.func.isRequired
};
var _default = Landing;
exports.default = _default;