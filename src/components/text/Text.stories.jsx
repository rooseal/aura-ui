/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextLine, TextArea } from '.';

const TextLineStory = () => {
  const [value, setValue] = useState('');

  function handleChange(value) {
    console.log('Text Line Change Event');

    setValue(value);
  }
  
  return (
    <TextLine label="Firstname" value={value} onChange={handleChange} />
  );
};

storiesOf('Text Input', module)
  .add('Text Line', () => <TextLineStory />)
  .add('Text Area', () => <TextArea />);
