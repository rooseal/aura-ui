/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledAnchor, Button, Anchor } from '.';

storiesOf('Anchors', module)
  .add('Styled Base', () => <StyledAnchor>Styled Base</StyledAnchor>)
  .add('Default Anchor', () => <Anchor>Default Anchor</Anchor>)
  .add('Default Button', () => <Button>Default Button</Button>);
