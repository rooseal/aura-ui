"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function renderOpenCloseTag(_ref) {
  var name = _ref.name,
      props = _ref.props;
  // console.log({ props });
  return "<".concat(name, " ").concat(props.map(function (_ref2) {
    var propName = _ref2.propName,
        propValue = _ref2.propValue,
        _ref2$propType = _ref2.propType,
        propType = _ref2$propType === void 0 ? 'string' : _ref2$propType;
    return "".concat(propName, "=").concat(propType === 'string' ? "\"".concat(propValue, "\"") : "{".concat(JSON.stringify(propValue), "}"));
  }).join(' '), " />");
}

function renderOpenTag(_ref3) {
  var name = _ref3.name,
      props = _ref3.props;
  return "<".concat(name).concat(props.length === 0 ? '' : ' ').concat(props.map(function (_ref4) {
    var propName = _ref4.propName,
        propValue = _ref4.propValue,
        propType = _ref4.propType;
    return "".concat(propName, "=").concat(propType === 'string' ? "\"".concat(propValue, "\"") : "{".concat(propValue, "}"));
  }).join(' '), ">");
}

function renderCloseTag(_ref5) {
  var name = _ref5.name;
  return "</".concat(name, ">");
}

function renderElement(elementId, elementArray) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var element = elementArray.find(function (currentElement) {
    return currentElement.id === elementId;
  });

  if (element === undefined) {
    return elementId;
  } // console.log({ children: element.children });


  return element.children === null || element.children.length === 0 ? renderOpenCloseTag(element) : "\n    ".concat(renderOpenTag(element), "\n      ").concat(typeof element.children === 'string' ? element.children : element.children.map(function (currentElement) {
    return renderElement(currentElement, elementArray, depth + 2);
  }).join(''), "  \n    ").concat(renderCloseTag(element), "\n  ");
}

var _default = function _default() {
  var renderArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (renderArray.length === 0) {
    return "return null;";
  }

  var topLevelElements = renderArray.filter(function (currentElement) {
    return currentElement.parent === null;
  }); // console.log({ onlyElement: renderArray[0] });
  // console.log({ topLevelElements });

  if (topLevelElements.length === 1) {
    return "\n      return (".concat(renderElement(topLevelElements[0].id, renderArray), ")\n    ");
  }

  return "\n      return (\n        <React.Fragment>\n          ".concat(topLevelElements.map(function (currentElement) {
    return renderElement(currentElement.id, renderArray);
  }).join(''), "\n        </React.Fragment>\n      )\n    ");
}; // render element
// if (children length > 0)
// add open tag to string
// map children to render element with each child
// add close tag to string
// else
// print openclose tag


exports.default = _default;