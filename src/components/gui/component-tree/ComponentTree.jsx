import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NewComponentDialog from '../dialogs/NewComponent';
import useStore from '../store/useStore';
import Panel from '../panel/Panel';
import { Menu, ActionItem } from '../../menu';

import Logic from './Logic';
import State from './State';
import Elements from './Elements';

/* eslint no-use-before-define: 0 */

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
  padding: 0;
`;

const Icon = styled.i`
  width: 25px;
  display: inline-block;
  font-style: normal;
  cursor: ${props => (props.onClick !== undefined ? 'pointer' : 'arrow')};
  color: ${props => props.color || '#666'};
`;

const ComponentTitle = styled.div`
  position: relative;
  cursor: pointer;
  padding: 2px;
  padding-left: ${props => `${(props.level - 1) * 25}px`};
  outline: none;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ComponentName = styled.span`
  color: dodgerblue;
`;

const ComponentAttribute = styled.div`
  color: ${({ theme }) => theme.textPrimary};
`;

const MenuBar = styled.div`
  border-top: ${({ theme }) => theme.borderPrimary};
  border-bottom: ${({ theme }) => theme.borderPrimary};
  position: relative;
  background-color: ${({ theme }) => theme.primaryLight};
`;

const Components = ({
  component,
  level = 1,
  componentList,
  activeElementId,
  setActiveElementId,
}) => {
  const [show, setShow] = useState(false);
  const [newComponentDialog, setNewComponentDialog] = useState(false);

  return (
    <>
      {newComponentDialog && (
        <NewComponentDialog
          setVisibility={setNewComponentDialog}
          component={component}
        />
      )}
      <ComponentTitle
        level={level}
        onClick={e => {
          setShow(!show);
        }}
      >
        {show ? <Icon>⏷</Icon> : <Icon>⏵</Icon>}
        <Icon color="red">֎</Icon>
        <ComponentName style={{ color: 'royalblue' }}>
          {component.content.name}
        </ComponentName>
        <div style={{ position: 'absolute', right: '0', top: '0' }}>
          <Icon
            color="royalblue"
            onClick={e => {
              e.stopPropagation();
              setNewComponentDialog(true);
            }}
          >
            +
          </Icon>
        </div>
      </ComponentTitle>
      {show && (
        <div>
          <ComponentAttribute>
            <Panel>
              {([collapsed, setCollapsed]) => (
                <>
                  <ComponentTitle
                    role="button"
                    onKeyDown={e =>
                      e.key === 'Enter' && setCollapsed(!collapsed)
                    }
                    tabIndex="0"
                    style={{ paddingLeft: `${level * 25}px` }}
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <Icon>⛁</Icon>State
                  </ComponentTitle>
                  {!collapsed && <State component={component} />}
                </>
              )}
            </Panel>
          </ComponentAttribute>
          <ComponentAttribute>
            <Panel>
              {([collapsed, setCollapsed]) => (
                <>
                  <ComponentTitle
                    role="button"
                    onKeyDown={e =>
                      e.key === 'Enter' && setCollapsed(!collapsed)
                    }
                    tabIndex="0"
                    style={{ paddingLeft: `${level * 25}px` }}
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <Icon color="green">⚙</Icon>Logic
                  </ComponentTitle>
                  {!collapsed && <Logic component={component} />}
                </>
              )}
            </Panel>
          </ComponentAttribute>
          <ComponentAttribute>
            <Panel>
              {([collapsed, setCollapsed]) => (
                <>
                  <ComponentTitle
                    role="button"
                    onKeyDown={e =>
                      e.key === 'Enter' && setCollapsed(!collapsed)
                    }
                    tabIndex="0"
                    style={{ paddingLeft: `${level * 25}px` }}
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <Icon color="gold">♨</Icon>Elements
                  </ComponentTitle>
                  {!collapsed && (
                    <Elements
                      component={component}
                      setActiveElementId={setActiveElementId}
                      activeElementId={activeElementId}
                    />
                  )}
                </>
              )}
            </Panel>
          </ComponentAttribute>
          <ComponentAttribute>
            <ComponentTitle style={{ paddingLeft: `${level * 25}px` }}>
              <Icon color="dodgerblue">⚛</Icon>Components
            </ComponentTitle>
          </ComponentAttribute>
          {printChildScopes(
            component,
            level,
            componentList,
            setActiveElementId,
            activeElementId,
          )}
        </div>
      )}
    </>
  );
};

const ComponentTree = ({
  component,
  level,
  activeElementId,
  setActiveElementId,
}) => {
  const [
    {
      components: { componentList },
    },
  ] = useStore();

  return (
    <Container>
      <MenuBar style={{ borderTop: '0' }}>
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <div>
            <Menu
              header={
                <i
                  style={{
                    padding: '4px 10px 5px 10px',
                    fontSize: '1em',
                    display: 'inline-block',
                    color: '#ccc',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  ⋯
                </i>
              }
            >
              <ActionItem action={() => console.log('You die hard')}>
                Push me!
              </ActionItem>
              <ActionItem action={() => console.log('You die harder')}>
                No, push me!
              </ActionItem>
            </Menu>
          </div>
        </div>
      </MenuBar>
      <Components
        component={componentList[0]}
        level={1}
        componentList={componentList}
        setActiveElementId={setActiveElementId}
        activeElementId={activeElementId}
      />
    </Container>
  );
};

ComponentTree.propTypes = {
  component: PropTypes.shape({
    content: PropTypes.any.isRequired,
    children: PropTypes.array.isRequired,
  }),
  level: PropTypes.number,
  activeElementId: PropTypes.any.isRequired,
  setActiveElementId: PropTypes.func.isRequired,
};

ComponentTree.defaultProps = {
  component: undefined,
  level: 1,
};

function printChildScopes(
  scope,
  level,
  scopes,
  setActiveElementId,
  activeElementId,
) {
  // console.log({ printChildScope: scope });
  if (scope.children.length === 0) {
    return null;
  }

  return scope.children.map(currentChild => (
    <Components
      component={scopes.find(
        currentScope => currentScope.content.id === currentChild,
      )}
      level={level + 1}
      componentList={scopes}
      activeElementId={activeElementId}
      setActiveElementId={setActiveElementId}
    />
  ));
}

export default ComponentTree;
