import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '../../dialog';
import Text from '../../Text';
import useStore from '../store/useStore';

import { addElement } from '../store/components/actions';

const NewComponentDialog = ({ setVisibility, element }) => {
  const [store, dispatch] = useStore();

  return (
    <Dialog>
      {([scopeDialogFields, setScopeDialogField]) => (
        <div>
          <h2>Configure your Element</h2>
          <div style={{ width: '80%', maxWidth: '500px' }}>
            {JSON.stringify(element, null, 2)}
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
                // dispatch(addComponentTree(scopeDialogFields.name, component));
                setVisibility(false);
              }}
            >
              Add Element
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
  element: PropTypes.object.isRequired,
};

export default NewComponentDialog;
