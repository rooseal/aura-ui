/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Drawer from './drawer';

storiesOf('GUI Builder', module).add('Component Drawer', () => (
  <div style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#666' }}>
    <Drawer />
  </div>
));
