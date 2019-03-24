import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import dark from '../../css/themes/dark';
import teal from '../../css/themes/teal';

import Store from './store/Store';
import WorkSpace from './workspace/workspace';
import Landing from './landing/landing';

window.React = React;

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      /* border-radius: 10px; */
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${({ theme }) => theme.primaryDark};
    }

    ::-webkit-scrollbar-thumb {
      /* border-radius: 10px; */
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      background-color: ${({ theme }) => theme.backgroundHighlight};
    }

    ::-webkit-scrollbar-thumb:hover {
      
    }
`;

const GuiBuilder = props => {
  const [activeProject, setActiveProject] = useState(undefined);

  return (
    <ThemeProvider theme={dark}>
      <>
        <GlobalStyle />
        {activeProject === undefined ? (
          <Landing setProjectName={setActiveProject} />
        ) : (
          <Store projectName={activeProject}>
            <WorkSpace />
          </Store>
        )}
      </>
    </ThemeProvider>
  );
};

export default GuiBuilder;
