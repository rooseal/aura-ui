function renderOpenCloseTag({ name, props }) {
  // console.log({ props });

  return `<${name} ${props
    .map(
      ({ propName, propValue, propType = 'string' }) =>
        `${propName}=${
          propType === 'string'
            ? `"${propValue}"`
            : `{${JSON.stringify(propValue)}}`
        }`,
    )
    .join(' ')} />`;
}

function renderOpenTag({ name, props }) {
  return `<${name}${props.length === 0 ? '' : ' '}${props
    .map(
      ({ propName, propValue, propType }) =>
        `${propName}=${
          propType === 'string' ? `"${propValue}"` : `{${propValue}}`
        }`,
    )
    .join(' ')}>`;
}

function renderCloseTag({ name }) {
  return `</${name}>`;
}

function renderElement(elementId, elementArray, depth = 0) {
  const element = elementArray.find(
    currentElement => currentElement.id === elementId,
  );

  if (element === undefined) {
    return elementId;
  }

  // console.log({ children: element.children });

  return element.children === null || element.children.length === 0
    ? renderOpenCloseTag(element)
    : `
    ${renderOpenTag(element)}
      ${
        typeof element.children === 'string'
          ? element.children
          : element.children
              .map(currentElement =>
                renderElement(currentElement, elementArray, depth + 2),
              )
              .join('')
      }  
    ${renderCloseTag(element)}
  `;
}

export default (renderArray = []) => {
  if (renderArray.length === 0) {
    return `return null;`;
  }

  const topLevelElements = renderArray.filter(
    currentElement => currentElement.parent === null,
  );

  // console.log({ onlyElement: renderArray[0] });
  // console.log({ topLevelElements });

  if (topLevelElements.length === 1) {
    return `
      return (${renderElement(topLevelElements[0].id, renderArray)})
    `;
  }
  return `
      return (
        <React.Fragment>
          ${topLevelElements
            .map(currentElement =>
              renderElement(currentElement.id, renderArray),
            )
            .join('')}
        </React.Fragment>
      )
    `;
};

// render element

// if (children length > 0)
// add open tag to string
// map children to render element with each child
// add close tag to string
// else
// print openclose tag
