"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useStore3 = _interopRequireDefault(require("../store/useStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: orange;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: cyan;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  background-color: #333;\n  width: 100%;\n  border-radius: 10px;\n  font-size: 0.8em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SourcePanel = _styledComponents.default.textarea(_templateObject());

var Textzone = _styledComponents.default.div(_templateObject2());

var Bracket = _styledComponents.default.span(_templateObject3());

var TagName = _styledComponents.default.span(_templateObject4());

var StartTag = function StartTag() {
  return _react.default.createElement(Bracket, null, "<");
};

var EndTag = function EndTag() {
  return _react.default.createElement(Bracket, null, ">");
};

var CloseTag = function CloseTag() {
  return _react.default.createElement(Bracket, null, "/");
};

var Tag = function Tag(_ref) {
  var open = _ref.open,
      close = _ref.close,
      openclose = _ref.openclose,
      children = _ref.children;
  console.log({
    children: children
  });

  if (openclose) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StartTag, null), _react.default.createElement(TagName, null, children), _react.default.createElement(CloseTag, null), _react.default.createElement(EndTag, null));
  }

  if (open) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StartTag, null), _react.default.createElement(TagName, null, children), _react.default.createElement(EndTag, null));
  }

  if (close) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StartTag, null), _react.default.createElement(CloseTag, null), _react.default.createElement(TagName, null, children), _react.default.createElement(EndTag, null));
  }
};

var SourceViewer = function SourceViewer() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  var _useStore = (0, _useStore3.default)(),
      _useStore2 = _slicedToArray(_useStore, 1),
      componentList = _useStore2[0].components.componentList;

  var _componentList$ = componentList[0],
      content = _componentList$.content,
      children = _componentList$.children;

  var handleSetSource = function handleSetSource(e) {
    console.log(content); // setSource(componentString(content));
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    onClick: handleSetSource
  }, "Show source"), _react.default.createElement("div", {
    contentEditable: true
  }, source)); // return (
  //   <SourcePanel>
  //     <Textzone>
  //       {children.length === 0 ? (
  //         <>
  //           <Tag openclose>{content.name}</Tag>
  //           <br />
  //         </>
  //       ) : (
  //         <>
  //           <Tag open>{content.name}</Tag>
  //           {children.map(childId => {
  //             const childComponent = componentList.find(
  //               x => x.content.id === childId,
  //             );
  //             console.log({ childComponent });
  //             return (
  //               <>
  //                 <br />
  //                 <Tag openclose>{childComponent.content.name}</Tag>
  //               </>
  //             );
  //           })}
  //           <br />
  //           <Tag close>{content.name}</Tag>
  //           <br />
  //         </>
  //       )}
  //     </Textzone>
  //   </SourcePanel>
  // );
};

var _default = SourceViewer;
exports.default = _default;