"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledMessage = _interopRequireDefault(require("./styled/StyledMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CONTAINER_ID = 'aruiMessageContainer';
var CONTAINER_CLASS = 'arui-message-container';
var CONTAINER_PARENT = document.body;
var TRANSITION_TIME = 1000;

var Message = function Message(_ref) {
  var show = _ref.show,
      hide = _ref.hide,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 2000 : _ref$timeout,
      children = _ref.children;

  // const containerRef = useRef(null);
  var _useState = (0, _react.useState)(document.getElementById(CONTAINER_ID)),
      _useState2 = _slicedToArray(_useState, 2),
      container = _useState2[0],
      setContainer = _useState2[1]; // Used for transitioning the message


  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hidden = _useState4[0],
      setHidden = _useState4[1];

  (0, _react.useEffect)(function () {
    var createdContainer = false;
    var temp; // let container = document.getElementById(CONTAINER_ID);

    if (container === null) {
      temp = document.createElement('div');
      temp.id = CONTAINER_ID;
      temp.className = CONTAINER_CLASS;
      temp.style.position = 'fixed';
      temp.style.top = '30px';
      temp.style.right = '20px';
      temp.style.marginBottom = '5px';
      temp.style.display = 'flex';
      temp.style.flexDirection = 'column';
      temp.style.alignItems = 'flex-end'; // console.log(CONTAINER_PARENT);

      CONTAINER_PARENT.appendChild(temp);
      createdContainer = true;
      setContainer(temp);
    } // containerRef.current = container;


    return function () {
      if (createdContainer) {
        temp.parentElement.removeChild(temp);
      } // containerRef.current = null;

    };
  }, []);
  (0, _react.useEffect)(function () {
    if (show) {
      console.log('Activate Message'); // Wrapper for in animation

      setTimeout(function () {
        // Wrapper for out animation
        hide();
      }, timeout);
    }
  }, [show]); // console.log(`Render function of ${children}`, { show }, { container });

  return show ? container !== null ? (0, _reactDom.createPortal)(_react.default.createElement(_StyledMessage.default, null, children), container) : null : null;
};

var _default = Message;
exports.default = _default;