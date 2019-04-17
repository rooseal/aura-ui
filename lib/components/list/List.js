"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useList = _interopRequireDefault(require("./useList"));

var _useClickOutside = _interopRequireDefault(require("../../hooks/useClickOutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 5px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styled = {
  List: _styledComponents.default.div(_templateObject())
};

var List = function List(props) {
  var inputList = props.list,
      onChange = props.onChange,
      value = props.value,
      transform = props.transform;
  var list = (0, _useList.default)({
    list: inputList
  });
  console.log({
    list: list
  });
  console.log({
    inputList: inputList
  });
  return _react.default.createElement("div", {
    role: "menu",
    tabIndex: "-1"
  }, _react.default.createElement(Styled.List, {
    onKeyDown: list.keyHandler
  }, list.items.map(transform)));
};

List.propTypes = {
  list: _propTypes.default.array.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.any.isRequired,
  transform: _propTypes.default.func.isRequired
};
List.defaultProps = {};
var _default = List;
exports.default = _default;