import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { transform } from '@babel/standalone';

import teal from '../../../css/themes/teal';
import componentToString from '../editor/snippets/componentToString';
import withScope from '../hocs/withScope';

import * as lib from '../..';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  overflow-y: auto;
`;

function parseComponent(obj) {
  // console.log({ transformed: transform(obj, { presets: ['react'] }) });
  // console.log({ lib: Object.entries(lib) });

  const entries = Object.entries(lib);
  const argNamestring = entries.map(x => x[0]).join(', ');
  const args = entries.map(x => x[1]);

  // console.log({ args });

  /* eslint no-new-func: 0 */
  return Function(
    argNamestring,
    `"use strict";return (${transform(obj, { presets: ['react'] }).code})`,
  )(...args);
}

const Designer = ({ component }) => {
  const componentString = componentToString(component.content);
  const ParsedComponent = withScope(parseComponent(componentString));

  return (
    <Container>
      <ThemeProvider theme={teal}>
        <ParsedComponent />
      </ThemeProvider>
    </Container>
  );
};

Designer.propTypes = {
  component: PropTypes.object.isRequired,
};

export default Designer;
