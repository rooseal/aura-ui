/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

// import {
//   ScopeProvider,
//   ScopeConsumer,
//   createScope,
//   addScope,
// } from './useScopeReducer';

import Store from '../store/Store';
import ComponentTree from './ComponentTree';

storiesOf('GUI Builder', module).add('Component Tree', () => (
  <div style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#666' }}>
    <Store>
      <div
        style={{
          border: '1px solid #ccc',
          width: '300px',
          padding: '20px',
          margin: '10px auto',
        }}
      >
        <h1>Scope Viewer</h1>
        <ComponentTree />
      </div>
    </Store>
  </div>
));
