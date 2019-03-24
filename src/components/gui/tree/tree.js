const treeSymbol = Symbol('tree');

export function isTree(possibleTree) {
  return (
    possibleTree.treeType !== undefined && possibleTree.treeType === treeSymbol
  );
}

export function isRoot(inputTree) {
  return isTree(inputTree) && inputTree.parent === null;
}

export function findInTree(inputTree, condition) {
  if (!isTree(inputTree)) return undefined;

  if (condition(inputTree.content)) {
    return inputTree;
  }

  const children = inputTree.getChildren();

  if (children.length === 0) {
    return undefined;
  }

  for (let i = 0; i < children.length; i++) {
    const childResult = findInTree(children[i], condition);

    if (childResult !== undefined) {
      return childResult;
    }
  }
}

export function printTree(
  inputTree,
  indent = ' ',
  printFn = x => x,
  level = 0,
) {
  if (!isTree(inputTree))
    return console.log('The data structure is not a tree');

  console.log(
    `${Array.from({ length: level })
      .map(() => indent)
      .join('')}%c${printFn(inputTree.content)}`,
    'border: 1px solid #aaa;padding: 5px',
  );
  inputTree
    .getChildren()
    .forEach(subTree => printTree(subTree, indent, printFn, level + 2));
}

export function tree(data, parent = null) {
  const children = [];

  return {
    treeType: treeSymbol,
    content: data,
    parent,
    children,
  };
}
