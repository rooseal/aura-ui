"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _standalone = require("@babel/standalone");

var _teal = _interopRequireDefault(require("../../../css/themes/teal"));

var _componentToString = _interopRequireDefault(require("../editor/snippets/componentToString"));

var _withScope = _interopRequireDefault(require("../hocs/withScope"));

var lib = _interopRequireWildcard(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  overflow-y: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primaryDark;
});

function parseComponent(obj) {
  // console.log({ transformed: transform(obj, { presets: ['react'] }) });
  // console.log({ lib: Object.entries(lib) });
  var entries = Object.entries(lib);
  var argNamestring = entries.map(function (x) {
    return x[0];
  }).join(', ');
  var args = entries.map(function (x) {
    return x[1];
  }); // console.log({ args });

  /* eslint no-new-func: 0 */

  return Function(argNamestring, "\"use strict\";return (".concat((0, _standalone.transform)(obj, {
    presets: ['react']
  }).code, ")")).apply(void 0, _toConsumableArray(args));
}

var Designer = function Designer(_ref2) {
  var component = _ref2.component;
  var componentString = (0, _componentToString.default)(component.content);
  var ParsedComponent = (0, _withScope.default)(parseComponent(componentString));
  return _react.default.createElement(Container, null, _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _teal.default
  }, _react.default.createElement(ParsedComponent, null)));
};

Designer.propTypes = {
  component: _propTypes.default.object.isRequired
};
var _default = Designer;
exports.default = _default;