import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tabs from '../../tabs/Tabs';
import Tab from '../../tabs/Tab';

import useStore from '../store/useStore';

import List from '../../list/List';
import Designer from '../designer/Designer';
import SockDrawer from '../drawer/drawer';
import ComponentTree from '../component-tree/ComponentTree';
import Editor from '../editor/Editor';
import Store from '../store/Store';
import Switch, { Container as SwitchContainer } from '../../switch/Switch';

const DISPLAY_MODES = {
  VISUAL: Symbol('visual'),
  EDITOR: Symbol('editor'),
  SPLIT: Symbol('split'),
};

const Container = styled.div`
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Panel = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: white;
  border: ${({ theme }) => theme.borderPrimary};
`;

const ListItem = styled.button`
  background-color: white;
  color: dodgerblue;
  padding: 5px 20px;
  border: 0;
  display: block;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;

  :hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const FlexContainer = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

const MenuBar = styled.div`
  border-top: ${({ theme }) => theme.borderPrimary};
  border-bottom: ${({ theme }) => theme.borderPrimary};
  position: relative;
  background-color: ${({ theme }) => theme.primaryLight};
`;

const Workspace = props => {
  const [store, dispatch] = useStore();

  const [components, setComponents] = useState([
    store.components.componentList[0].content.id,
  ]);

  const [activeElementId, setActiveElementId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState(DISPLAY_MODES.VISUAL);

  const [showDrawer, setShowDrawer] = useState(true);
  const [showComponentTree, setShowComponentTree] = useState(true);

  function addComponent(component) {
    setComponents([...components, component.content.id]);
  }

  function removeComponent(component) {
    setComponents(
      components.filter(current => current.content.id !== component.content.id),
    );
  }

  function switchComponents(newIndex) {
    setActiveElementId(null);
    setActiveIndex(newIndex);
  }

  const componentObjects = useMemo(
    _ =>
      components.map(x =>
        store.components.componentList.find(
          current => current.content.id === x,
        ),
      ),
    [components, store],
  );

  return (
    <Container>
      <FlexRow style={{ overflow: 'hidden' }}>
        {showDrawer && (
          <Panel
            style={{
              width: '30%',
              minWidth: '250px',
              borderRight: '0',
            }}
          >
            <SockDrawer
              component={componentObjects[activeIndex]}
              element={activeElementId}
            />
          </Panel>
        )}
        <Panel
          style={{ borderRight: '0', display: 'flex', flexDirection: 'column' }}
        >
          <MenuBar style={{ border: '0' }}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 5px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowDrawer(!showDrawer)}
                  style={{
                    fontSize: '0.9em',
                    color: '#ccc',
                    border: '1px solid #aaa',
                    padding: '2px 4px',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ◀
                </button>
              </div>
              <div
                style={{
                  flexGrow: '1',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  padding: '0 20px',
                }}
              >
                <div style={{ maxWidth: '200px' }}>
                  <Switch
                    options={[
                      { text: '▣', value: DISPLAY_MODES.VISUAL },
                      {
                        text: '</>',
                        value: DISPLAY_MODES.EDITOR,
                      },
                      { text: '◫', value: DISPLAY_MODES.SPLIT },
                    ]}
                    value={mode}
                    onChange={value => setMode(value)}
                    styled={{
                      Container: styled(SwitchContainer)`
                        border: 0;
                        padding: 0 10px;
                      `,
                    }}
                  />
                </div>
                <div style={{ color: '#ccc', display: 'flex' }}>
                  <div
                    style={{
                      cursor: 'pointer',
                      margin: '0 5px',
                      padding: '5px 10px',
                      flex: '1',
                    }}
                  >
                    Save
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      margin: '0 5px',
                      padding: '5px 10px',
                      flex: '1',
                    }}
                  >
                    Compile
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      margin: '0 5px',
                      padding: '5px 10px',
                      flex: '1',
                    }}
                  >
                    Run
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      margin: '0 5px',
                      padding: '5px 10px',
                      flex: '1',
                    }}
                  >
                    Export
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      margin: '0 5px',
                      padding: '5px 10px',
                      flex: '1',
                    }}
                  >
                    Format
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 5px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowComponentTree(!showComponentTree)}
                  style={{
                    fontSize: '0.9em',
                    color: '#ccc',
                    border: '1px solid #aaa',
                    padding: '2px 4px',
                    background: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ▶
                </button>
              </div>
            </div>
          </MenuBar>
          <MenuBar>
            <Tabs updater={switchComponents} initial={0}>
              {componentObjects.map((currentComponent, i) => (
                <Tab value={i} active={i === activeIndex}>
                  {currentComponent.content.name}{' '}
                  <button
                    type="button"
                    style={{
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginLeft: '10px',
                      backgroundColor: 'transparent',
                      border: '0',
                      cursor: 'pointer',
                      color: 'white',
                    }}
                    onClick={e => {
                      removeComponent(currentComponent);
                    }}
                  >
                    x
                  </button>
                </Tab>
              ))}
              <Tab
                value={components.length}
                active={components.length === activeIndex}
              >
                ✺
              </Tab>
            </Tabs>
          </MenuBar>
          {components[activeIndex] !== undefined ? (
            <FlexContainer style={{ flex: '1' }}>
              {mode === DISPLAY_MODES.VISUAL || mode === DISPLAY_MODES.SPLIT ? (
                <Designer component={componentObjects[activeIndex]} />
              ) : null}
              {mode === DISPLAY_MODES.EDITOR || mode === DISPLAY_MODES.SPLIT ? (
                <Editor component={componentObjects[activeIndex]} />
              ) : null}
            </FlexContainer>
          ) : (
            <div
              style={{
                textAlign: 'center',
                width: '400px',
                margin: '100px auto',
              }}
            >
              <h1>Load a component</h1>
              <List
                list={store.components.componentList}
                onChange={addComponent}
                transform={(current, index) => (
                  <ListItem onClick={() => addComponent(current.item)}>
                    {current.item.content.name}
                  </ListItem>
                )}
              />
            </div>
          )}
        </Panel>
        {showComponentTree && (
          <Panel style={{ width: '20%', minWidth: '300px' }}>
            <ComponentTree
              setActiveElementId={setActiveElementId}
              activeElementId={activeElementId}
            />
          </Panel>
        )}
      </FlexRow>
    </Container>
  );
};

export default Workspace;
