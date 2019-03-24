import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/jsx';
import 'brace/theme/monokai';

import componentString from './snippets/componentToString';

const Editor = ({ div, component }) => {
  const [source, setSource] = useState(componentString(component.content));

  useEffect(
    () => {
      console.log('Component List has Changed');
      setSource(componentString(component.content));
    },
    [component],
  );

  return component !== undefined ? (
    <AceEditor
      style={{ width: '100%', height: '100%' }}
      value={source}
      mode="jsx"
      theme="monokai"
      showPrintMargin={false}
      onChange={setSource}
      name={div}
      tabSize={2}
      editorProps={{ $blockScrolling: true }}
      onInput={e => console.log('Typing... ', e)}
    />
  ) : (
    <div>No Component loaded!</div>
  );
};

Editor.propTypes = {
  div: PropTypes.string,
  component: PropTypes.object.isRequired,
};

Editor.defaultProps = {
  div: 'editor',
};

export default Editor;
