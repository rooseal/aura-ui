/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// import {
//   ScopeProvider,
//   ScopeConsumer,
//   createScope,
//   addScope,
// } from './useScopeReducer';

import Store from '../store/Store';
import SourceViewer from './SourceViewer';

import useStore from '../store/useStore';

storiesOf('GUI Builder', module).add('Source Viewer', () => (
  <div style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#666' }}>
    <Store>
      <div>
        <SourceViewer />
      </div>
    </Store>
  </div>
));
