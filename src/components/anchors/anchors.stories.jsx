/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledAnchor, ButtonAnchor, Anchor } from '.';

storiesOf('Anchors', module)
  .add('Styled Base', () => <StyledAnchor>Styled Base</StyledAnchor>)
  .add('Default Anchor', () => <Anchor>Default Anchor</Anchor>)
  .add('Default Button', () => <ButtonAnchor>Default Button</ButtonAnchor>);
