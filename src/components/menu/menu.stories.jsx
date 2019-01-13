/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Menu, ActionItem } from '.';

const StateComponent = ({ initial, children }) => {
  const stateHook = useState(initial);

  return children(stateHook);
};

storiesOf('Menu', module).add('Action Menu', () => (
  <StateComponent initial="None Pressed">
    {([pressed, setPressed]) => (
      <>
        <Menu header="Menu 1">
          <ActionItem
            action={() => {
              setPressed('Pressed One');
            }}
          >
            One
          </ActionItem>
          <ActionItem
            action={() => {
              setPressed('Pressed Two');
            }}
          >
            Two
          </ActionItem>
          <ActionItem
            action={() => {
              setPressed('Pressed Three');
            }}
          >
            Three
          </ActionItem>
          <ActionItem
            action={() => {
              setPressed('Pressed Four');
            }}
          >
            Four
          </ActionItem>
        </Menu>
        <h2
          style={{
            padding: '20px',
            border: '1px solid #eee',
            fontFamily: 'Verdana',
          }}
        >
          {pressed}
        </h2>
      </>
    )}
  </StateComponent>
));
// .add('Styled Select Base', () => <StyledSelect />);
// .add('List of Items', () => (
//   <div style={{ width: '300px' }}>
//     <ItemList storeValue="Cappucino" />
//   </div>
// ));
