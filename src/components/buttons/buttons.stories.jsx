/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledButton, Button, Submit, AnchorButton } from '.';

storiesOf('Buttons', module)
  .add('Styled Base', () => <StyledButton>Styled Base</StyledButton>)
  .add('Default Button', () => <Button>Default Button</Button>)
  .add('Default Submit', () => <Submit>Default Submit</Submit>)
  .add('Default Anchor', () => <AnchorButton>Default Anchor</AnchorButton>);
