/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Landing from './landing';

storiesOf('GUI Builder', module).add('Landing Page', () => (
  <div style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#666' }}>
    <Landing />
  </div>
));
