"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _buttons.Button;
  }
});
Object.defineProperty(exports, "AnchorButton", {
  enumerable: true,
  get: function get() {
    return _buttons.AnchorButton;
  }
});
Object.defineProperty(exports, "Anchor", {
  enumerable: true,
  get: function get() {
    return _anchors.Anchor;
  }
});
Object.defineProperty(exports, "ButtonAnchor", {
  enumerable: true,
  get: function get() {
    return _anchors.ButtonAnchor;
  }
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: function get() {
    return _menu.Menu;
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _select.Select;
  }
});
Object.defineProperty(exports, "TextLine", {
  enumerable: true,
  get: function get() {
    return _text.TextLine;
  }
});
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function get() {
    return _text.TextArea;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _tabs.Tabs;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _tabs.Tab;
  }
});
exports.PanelDisplay = exports.PanelSelector = exports.Subtitle = exports.TitleSecond = exports.GradientDiv = exports.Header = exports.Column2 = exports.Column1 = exports.ColumnList = exports.Flex = exports.Intro = exports.Title = exports.Page = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buttons = require("./buttons");

var _anchors = require("./anchors");

var _menu = require("./menu");

var _select = require("./select");

var _Panel = _interopRequireDefault(require("./gui/panel/Panel"));

var _text = require("./text");

var _tabs = require("./tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 100px;\n\n  border: ", ";\n\n  & > div {\n    flex: 1;\n    padding: 20px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(to bottom, #ce9ffc, #7367f0);\n  margin: -20px -20px -20px 0;\n  flex: 0.5 !important;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: #333;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #333;\n  margin: 20px 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: #333;\n  margin: 20px 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #333;\n  margin: 20px 50px;\n  font-style: italic;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #aaa;\n  font-size: 1.5em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: dodgerblue;\n  font-size: 3em;\n  margin-top: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: dodgerblue;\n  font-size: 3em;\n  text-align: center;\n  margin: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  padding: 20px;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);\n  max-width: 900px;\n  margin: 10px auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var panel = '';

var setPanel = function setPanel() {}; // Sample comps for gui


var introtext = 'Borealis is a visual tool for building React applications with minimal knowledge of javascript. It heavily uses drag-and-drop (at least in the future ;)) for inituitive interactions. You can add custom functionality and state right in the GUI.';
var column1 = "Sed suscipit elit id augue rhoncus, quis sagittis mi mattis. Etiam ultricies metus ac felis elementum, sit amet porta nisl luctus. Praesent accumsan, neque quis vestibulum sodales, orci quam consequat metus, et ullamcorper augue neque at dui. Integer nec elementum sapien, iaculis eleifend arcu. Sed tempor, justo nec condimentum tempus, quam magna facilisis ligula, a tristique arcu ipsum in magna. Vestibulum sed metus aliquam, mattis ante pulvinar, pretium odio. Praesent sit amet odio nec augue iaculis auctor. Nulla eget viverra leo. Sed porttitor viverra arcu.\n\nNunc a risus eget tellus tristique pharetra. Nam at suscipit erat, quis interdum est. Phasellus varius rhoncus dolor, quis maximus lectus posuere ut. Praesent efficitur ipsum mi, varius bibendum quam tempus ac. Quisque nulla elit, sodales finibus tincidunt non, varius in mi. Curabitur sed nibh posuere, accumsan nibh eu, varius magna. Aenean non vehicula ante. Proin non massa vitae nisi porttitor suscipit. Sed sed molestie lacus, gravida elementum lacus. Aenean purus est, bibendum a elementum at, pretium sit amet urna. Duis tempus ac mauris non accumsan. Mauris in odio sed velit fermentum gravida sit amet vitae nulla. Sed in arcu vitae magna semper hendrerit a quis lacus. Nulla nunc leo, luctus vitae eleifend ac, malesuada sed dolor. In sit amet ex vitae nisl volutpat tincidunt id eget dui.\n\nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae eros eu ante tincidunt lobortis. Sed vel nisl at sem bibendum iaculis ac at tortor. Cras dolor dolor, sagittis eget lectus vel, aliquet tincidunt sem. Suspendisse nibh quam, varius et tristique quis, imperdiet non nisi. Quisque purus tellus, dapibus in diam nec, tempor pulvinar lorem. Curabitur commodo sapien sed semper dapibus. Sed vel nulla a leo convallis maximus. Sed nisl nibh, posuere sit amet quam at, vulputate sollicitudin sapien. Mauris commodo dui vel magna consectetur malesuada. Morbi eget nisl libero. Donec pretium a tellus sit amet ornare. Integer lobortis semper enim.";
var column2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum purus ac sapien accumsan malesuada. Aliquam semper quam eu vestibulum pretium. Vestibulum consectetur nunc augue, et porta quam lobortis quis. Vestibulum nunc erat, sollicitudin at tellus ullamcorper, semper pretium leo. Sed non mauris id dui luctus porta. Cras ultricies mi et risus tempus, et semper nulla bibendum. Nulla facilisi. Nulla facilisi. Etiam quis porta libero, sed volutpat enim. In sed pretium elit. Cras iaculis enim ut tortor volutpat, nec dapibus sem pretium. Sed in elit ligula. Proin vel feugiat orci. Phasellus mollis quam nec consectetur tempor.";

var Page = _styledComponents.default.div(_templateObject());

exports.Page = Page;
var Title = (0, _styledComponents.default)(function (x) {
  return React.createElement("h1", x, "Borealis Demo");
})(_templateObject2());
exports.Title = Title;
var TitleSecond = (0, _styledComponents.default)(function (x) {
  return React.createElement("h1", x, "Aurora unleashed");
})(_templateObject3());
exports.TitleSecond = TitleSecond;
var Subtitle = (0, _styledComponents.default)(function (x) {
  return React.createElement("h2", x, "Build flows even faster");
})(_templateObject4());
exports.Subtitle = Subtitle;
var Intro = (0, _styledComponents.default)(function (x) {
  return React.createElement("p", x, introtext);
})(_templateObject5());
exports.Intro = Intro;
var Column1 = (0, _styledComponents.default)(function (x) {
  return React.createElement("div", null, React.createElement("p", x, column1));
})(_templateObject6());
exports.Column1 = Column1;
var Column2 = (0, _styledComponents.default)(function (x) {
  return React.createElement("div", null, React.createElement("p", x, column2));
})(_templateObject7());
exports.Column2 = Column2;

var PanelSelector = function PanelSelector(props) {
  return React.createElement(_select.Select, props);
};

exports.PanelSelector = PanelSelector;
PanelSelector.preview = {
  value: 'panel',
  onChange: 'setPanel',
  list: [1, 2, 3]
};

var PanelDisplay = function PanelDisplay(props) {
  return React.createElement("p", null, '{panel}');
};

exports.PanelDisplay = PanelDisplay;

var Header = function Header(props) {
  return React.createElement("div", {
    style: {
      backgroundImage: 'url(http://www.enriquepacheco.com/wp-content/uploads/2012/01/Aurora-10.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '300px',
      margin: '-20px'
    }
  });
};

exports.Header = Header;
var ColumnList = (0, _styledComponents.default)(function (x) {
  return React.createElement("div", {
    style: {
      margin: '80px 0'
    }
  }, React.createElement("ul", null, React.createElement("li", null, "Fusce non augue in enim egestas sollicitudin non ac augue."), React.createElement("li", null, "Curabitur a felis at augue semper consequat."), React.createElement("li", null, "Cras eget elit ac quam varius porttitor."), React.createElement("li", null, "Curabitur commodo nisi eu maximus rutrum."), React.createElement("li", null, "Sed euismod dolor eleifend dignissim sodales."), React.createElement("li", null, "Quisque maximus elit non ligula accumsan suscipit."), React.createElement("li", null, "Mauris fermentum libero tempus neque porta pellentesque."), React.createElement("li", null, "Nulla molestie risus nec turpis pellentesque iaculis.")));
})(_templateObject8());
exports.ColumnList = ColumnList;

var GradientDiv = _styledComponents.default.div(_templateObject9());

exports.GradientDiv = GradientDiv;

var Flex = _styledComponents.default.div(_templateObject10(), function (_ref) {
  var children = _ref.children;
  console.log({
    childrenInFlex: children
  });
  return children === null || children === undefined || children.length === 0 ? '1px dashed pink' : '0';
});

exports.Flex = Flex;