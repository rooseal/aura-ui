import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NewStateDialog from '../dialogs/NewState';

import { SectionContainer, AddButton } from './styled';

const State = ({ component }) => {
  const [showNewStateDialog, setShowNewStateDialog] = useState(false);

  return (
    <>
      {showNewStateDialog && (
        <NewStateDialog
          setVisibility={setShowNewStateDialog}
          component={component}
        />
      )}
      <SectionContainer>
        {component.content.state.length === 0 ? (
          <p style={{ padding: '5px 5px 5px 5px', textAlign: 'center' }}>
            <AddButton
              onClick={() => setShowNewStateDialog(true)}
              text="Add State"
              style={{ fontSize: '1.2em' }}
            />
          </p>
        ) : (
          <div>
            {component.content.state.map(currentState => {
              console.log(currentState);
              return (
                <div style={{ display: 'flex', padding: '2px 5px' }}>
                  <div style={{ flex: '1', fontWeight: 'bold' }}>
                    {currentState.name}
                  </div>
                  <div style={{ flex: '1', fontStyle: 'italic' }}>
                    {currentState.value}
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
              }}
            >
              <AddButton
                onClick={() => setShowNewStateDialog(true)}
                text="Add State"
              />
            </div>
          </div>
        )}
      </SectionContainer>
    </>
  );
};

State.propTypes = {
  component: PropTypes.object.isRequired,
};

export default State;
