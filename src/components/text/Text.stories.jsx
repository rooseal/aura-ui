/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextLine, TextArea } from '.';

storiesOf('Text Input', module)
  .add('Text Line', () => <TextLine label="Firstname" />)
  .add('Text Area', () => <TextArea />);
