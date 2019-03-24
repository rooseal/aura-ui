import prettier from 'prettier/standalone';
import parser from 'prettier/parser-babylon';

import componentStartString from './componentOpen';
import componentEndString from './componentClose';
import componentStateString from './componentState';
import componentFunctionString from './componentFunction';
import componentRenderString from './componentRender';

export default ({
  name = 'Component',
  state = [],
  logic = [],
  render = [],
}) => {
  const str = `${componentStartString(name)}
  ${state
    .map(({ name: stateName, value }) => componentStateString(stateName, value))
    .join('\n')}
  ${logic
    .map(({ name: functionName, params: paramList, body: functionBody }) =>
      componentFunctionString(functionName, paramList, functionBody),
    )
    .join('\n')}
  ${componentRenderString(render)}${componentEndString()}`;

  return prettier.format(str, { parser: 'babylon', plugins: [parser] });
};
