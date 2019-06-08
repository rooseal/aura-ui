"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _teal = _interopRequireDefault(require("../../../css/themes/teal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  background-color: transparent;\n  ", "\n  position: absolute;\n  max-width: 250px;\n  min-width: 120px;\n  right: 5px;\n  top: calc(100% - 5px);\n  list-style-type: none;\n  padding-left: 0;\n  margin-top: 0;\n  z-index: 50;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMenu = _styledComponents.default.ul(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderPrimary;
}, ''
/* background-color: ${({ theme }) => theme.secondaryLight}; */
);

StyledMenu.propTypes = {
  theme: _propTypes.default.object,
  nested: _propTypes.default.bool
};
StyledMenu.defaultProps = {
  theme: _teal.default,
  nested: false
};
var _default = StyledMenu;
exports.default = _default;