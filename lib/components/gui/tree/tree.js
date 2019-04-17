"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTree = isTree;
exports.isRoot = isRoot;
exports.findInTree = findInTree;
exports.printTree = printTree;
exports.tree = tree;
var treeSymbol = Symbol('tree');

function isTree(possibleTree) {
  return possibleTree.treeType !== undefined && possibleTree.treeType === treeSymbol;
}

function isRoot(inputTree) {
  return isTree(inputTree) && inputTree.parent === null;
}

function findInTree(inputTree, condition) {
  if (!isTree(inputTree)) return undefined;

  if (condition(inputTree.content)) {
    return inputTree;
  }

  var children = inputTree.getChildren();

  if (children.length === 0) {
    return undefined;
  }

  for (var i = 0; i < children.length; i++) {
    var childResult = findInTree(children[i], condition);

    if (childResult !== undefined) {
      return childResult;
    }
  }
}

function printTree(inputTree) {
  var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var printFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
    return x;
  };
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (!isTree(inputTree)) return console.log('The data structure is not a tree');
  console.log("".concat(Array.from({
    length: level
  }).map(function () {
    return indent;
  }).join(''), "%c").concat(printFn(inputTree.content)), 'border: 1px solid #aaa;padding: 5px');
  inputTree.getChildren().forEach(function (subTree) {
    return printTree(subTree, indent, printFn, level + 2);
  });
}

function tree(data) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = [];
  return {
    treeType: treeSymbol,
    content: data,
    parent: parent,
    children: children
  };
}