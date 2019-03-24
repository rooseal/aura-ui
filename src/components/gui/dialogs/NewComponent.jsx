import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '../../dialog';
import Text from '../../Text';
import useStore from '../store/useStore';

import { addComponentTree } from '../store/components/actions';

const NewComponentDialog = ({ setVisibility, component }) => {
  const [store, dispatch] = useStore();

  return (
    <Dialog>
      {([scopeDialogFields, setScopeDialogField]) => (
        <div>
          <h2>Enter a name for your Component</h2>
          <div style={{ width: '80%', maxWidth: '500px' }}>
            <Text
              value={scopeDialogFields.name}
              onChange={e => setScopeDialogField('name', e.target.value)}
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
                dispatch(addComponentTree(scopeDialogFields.name, component));
                setVisibility(false);
              }}
            >
              Create Component
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

NewComponentDialog.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  component: PropTypes.object.isRequired,
};

export default NewComponentDialog;
