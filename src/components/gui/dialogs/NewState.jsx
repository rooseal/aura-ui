import React, { useState } from 'react';
import PropTypes from 'prop-types';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Dialog from '../../dialog';
import Text from '../../Text';
import useStore from '../store/useStore';

import { addState } from '../store/components/actions';

const NewStateDialog = ({ setVisibility, component }) => {
  const [store, dispatch] = useStore();

  return (
    <Dialog>
      {([scopeDialogFields, setScopeDialogField]) => (
        <div>
          <h2 style={{ marginBottom: '50px' }}>
            Add state for {component.content.name}
          </h2>

          <p>State Name</p>
          <div style={{ width: '80%', maxWidth: '500px' }}>
            <Text
              value={scopeDialogFields.name}
              onChange={e => setScopeDialogField('name', e.target.value)}
            />
          </div>
          <p>Initial Value</p>
          <div style={{ width: '80%', maxWidth: '500px' }}>
            <Text
              value={scopeDialogFields.initial}
              onChange={e => setScopeDialogField('initial', e.target.value)}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row-reverse',
              justifyContent: 'flex-start',
              marginTop: '50px',
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
                  addState(component.content.id, {
                    name: scopeDialogFields.name,
                    initialValue: scopeDialogFields.initial,
                  }),
                );
                setVisibility(false);
              }}
            >
              Add state
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
