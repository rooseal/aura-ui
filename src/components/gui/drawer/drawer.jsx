import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as dom from 'react-dom-factories';
import * as Aura from '../..';
import Panel from '../panel/Panel';
import Switch from '../../switch/Switch';

import useStore from '../store/useStore';
import { addElement } from '../store/components/actions';
import NewFunctionDialog from '../dialogs/NewElement';

console.log({ dom });

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 5px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Toggle = styled.p`
  font-size: 0.8em;
  margin-bottom: 0.3em;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.textLight};
    font-weight: bold;
  }
`;

const Preview = styled.div`
  position: relative;
  border: ${({ theme }) => theme.borderPrimary};
  padding: 1.5em;
  margin-bottom: 2em;
  text-align: right;
  cursor: grab;
  background-color: ${({ theme }) => theme.primaryLight};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
    z-index: 3;
  }

  :hover {
    background-color: rgba(230, 255, 230, 0.6);
  }
`;

const Drawer = ({ component, element }) => {
  const [elementTypesShown, setElementTypesShown] = useState(1);
  const [showNewElementDialog, setShowNewElementDialog] = useState(false);
  const [newElementType, setNewElementType] = useState(null);
  const [store, dispatch] = useStore();

  const domElements = Object.entries(dom);

  function closeNewElementDialog() {
    setShowNewElementDialog(false);
    setNewElementType(null);
  }

  return (
    <>
      {showNewElementDialog && (
        <NewFunctionDialog
          setVisibility={setShowNewElementDialog}
          element={newElementType}
        />
      )}
      <Container>
        <h1 style={{ fontSize: '1.1em' }}>Component Drawer</h1>
        <Switch
          options={[{ text: 'Aura', value: 1 }, { text: 'HTML', value: 2 }]}
          value={elementTypesShown}
          onChange={setElementTypesShown}
        />
        {elementTypesShown === 1 && (
          <div>
            {Object.entries(Aura).map(([name, Component]) => (
              <Panel>
                {([collapsed, setCollapsed]) => (
                  <div>
                    <Toggle onClick={() => setCollapsed(!collapsed)}>
                      {name}
                    </Toggle>
                    {!collapsed && (
                      <Preview
                        onClick={() => {
                          // dispatch(
                          //   addElement(component.content.id, element, {
                          //     name,
                          //     props:
                          //       Object.entries(Component.preview || {}).reduce(
                          //         (acc, [current, prop]) => {
                          //           if (current === 'children') return acc;

                          //           acc = [
                          //             ...acc,
                          //             {
                          //               propName: current,
                          //               propValue: prop,
                          //               propType:
                          //                 current === 'onChange' ||
                          //                 current === 'value'
                          //                   ? 'function'
                          //                   : typeof prop,
                          //             },
                          //           ];
                          //           return acc;
                          //         },
                          //         [],
                          //       ) || {},
                          //     children:
                          //       Component.preview !== undefined
                          //         ? Component.preview.children !== undefined
                          //           ? typeof Component.preview.children ===
                          //             'string'
                          //             ? Component.preview.children
                          //             : [] // Todo: Change for real implementation
                          //           : null
                          //         : null,
                          //   }),
                          // )
                          setNewElementType([name, Component.propTypes]);
                          setShowNewElementDialog(true);
                        }}
                      >
                        {Component.preview !== undefined ? (
                          <Component {...Component.preview} />
                        ) : (
                          <Component />
                        )}
                      </Preview>
                    )}
                  </div>
                )}
              </Panel>
            ))}
          </div>
        )}

        {elementTypesShown === 2 && (
          <div>
            {domElements.map(([name, fn]) => (
              <Panel>
                {([collapsed, setCollapsed]) => (
                  <div>
                    <Toggle onClick={() => setCollapsed(!collapsed)}>
                      {name}
                    </Toggle>
                    {!collapsed && (
                      <Preview
                        onClick={() =>
                          dispatch(
                            addElement(component.content.id, element, {
                              name,
                              props: [],
                              children: null,
                            }),
                          )
                        }
                      >
                        No Preview available
                      </Preview>
                    )}
                  </div>
                )}
              </Panel>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

Drawer.propTypes = {
  component: PropTypes.object.isRequired,
  element: PropTypes.any.isRequired,
};

export default Drawer;
