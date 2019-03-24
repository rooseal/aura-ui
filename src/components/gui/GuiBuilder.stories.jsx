/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import GuiBuilder from './GuiBuilder';

storiesOf('GUI Builder', module).add('Gui Builder App', () => (
  <div style={{ fontFamily: 'Verdana', fontSize: '12px', color: '#666' }}>
    <GuiBuilder />
  </div>
));
