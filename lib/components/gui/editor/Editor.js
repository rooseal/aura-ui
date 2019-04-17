"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _brace = _interopRequireDefault(require("brace"));

var _reactAce = _interopRequireDefault(require("react-ace"));

require("brace/mode/jsx");

require("brace/theme/monokai");

var _componentToString = _interopRequireDefault(require("./snippets/componentToString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Editor = function Editor(_ref) {
  var div = _ref.div,
      component = _ref.component;

  var _useState = (0, _react.useState)((0, _componentToString.default)(component.content)),
      _useState2 = _slicedToArray(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  (0, _react.useEffect)(function () {
    console.log('Component List has Changed');
    setSource((0, _componentToString.default)(component.content));
  }, [component]);
  return component !== undefined ? _react.default.createElement(_reactAce.default, {
    style: {
      width: '100%',
      height: '100%'
    },
    value: source,
    mode: "jsx",
    theme: "monokai",
    showPrintMargin: false,
    onChange: setSource,
    name: div,
    tabSize: 2,
    editorProps: {
      $blockScrolling: true
    },
    onInput: function onInput(e) {
      return console.log('Typing... ', e);
    }
  }) : _react.default.createElement("div", null, "No Component loaded!");
};

Editor.propTypes = {
  div: _propTypes.default.string,
  component: _propTypes.default.object.isRequired
};
Editor.defaultProps = {
  div: 'editor'
};
var _default = Editor;
exports.default = _default;