/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import Option from './Option';

const listData = [
  'Filter Coffee',
  'Espresso',
  'Latte Machiato',
  'Cappucino',
  'Hot Chocolat',
];

console.log({ React });

storiesOf('Select', module)
  .add('Select (simple list)', () => <Select list={listData} />)
  .add('Select (children list)', () => (
    <>
      <Select>
        {listData.map(item => (
          <Option>{item}</Option>
        ))}
      </Select>
    </>
  ));
