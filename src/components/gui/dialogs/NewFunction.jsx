import React, { useState } from 'react';
import PropTypes from 'prop-types';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Dialog from '../../dialog';
import Text from '../../Text';
import useStore from '../store/useStore';

import { addLogic } from '../store/components/actions';

const NewStateDialog = ({ setVisibility, component }) => {
  const [store, dispatch] = useStore();
  const [params, setParams] = useState([]);
  const [newParam, setNewParam] = useState('');
  const [body, setBody] = useState('');

  const updateParam = (value, index) => {
    setParams(params.map((p, i) => (i === index ? value : p)));
  };

  const addNewParam = () => {
    setParams([...params, newParam]);
    setNewParam('');
  };

  return (
    <Dialog>
      {([scopeDialogFields, setScopeDialogField]) => (
        <div>
          <h2>Add function for {component.content.name}</h2>

          <p>Function Name</p>
          <div style={{ width: '60%', minWidth: '300px' }}>
            <Text
              value={scopeDialogFields.name}
              onChange={e => setScopeDialogField('name', e.target.value)}
            />
          </div>
          <p>Function Parameters</p>
          {params.map((param, i) => (
            <div style={{ width: '60%', minWidth: '300px' }}>
              <Text
                value={param}
                onChange={e => updateParam(e.target.value, i)}
              />
            </div>
          ))}
          <p>Add parameter</p>
          <div style={{ width: '60%', minWidth: '300px' }}>
            <Text
              value={newParam}
              onChange={e => setNewParam(e.target.value)}
              onBlur={addNewParam}
            />
          </div>
          <p>Function body</p>
          <div style={{ height: '200px' }}>
            <AceEditor
              style={{ height: '100%' }}
              value={body}
              mode="javascript"
              theme="monokai"
              onChange={setBody}
              name="newFunction"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row-reverse',
              justifyContent: 'flex-start',
              marginTop: '20px',
            }}
          >
            <button
              type="button"
              style={{
                backgroundColor: 'teal',
                padding: '10px 20px',
                border: '0',
                color: 'white',
                margin: '5px',
              }}
              onClick={e => {
                dispatch(
                  addLogic(component.content.id, {
                    name: scopeDialogFields.name,
                    params,
                    body,
                  }),
                );
                setVisibility(false);
              }}
            >
              Add function
            </button>
            <button
              type="button"
              style={{
                backgroundColor: 'teal',
                padding: '10px 20px',
                border: '0',
                color: 'white',
                margin: '5px',
              }}
              onClick={e => {
                setVisibility(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

NewStateDialog.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  component: PropTypes.object.isRequired,
};

export default NewStateDialog;
