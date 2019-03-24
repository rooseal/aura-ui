import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NewFunctionDialog from '../dialogs/NewFunction';

import { SectionContainer, AddButton } from './styled';

const Logic = ({ component }) => {
  const [showNewFunctionDialog, setShowNewFunctionDialog] = useState(false);

  return (
    <>
      {showNewFunctionDialog && (
        <NewFunctionDialog
          setVisibility={setShowNewFunctionDialog}
          component={component}
        />
      )}
      <SectionContainer>
        {component.content.logic.length === 0 ? (
          <p style={{ padding: '5px 5px 5px 5px', textAlign: 'center' }}>
            <AddButton
              onClick={() => setShowNewFunctionDialog(true)}
              text="Add Logic"
              style={{ fontSize: '1.2em' }}
            />
          </p>
        ) : (
          <div>
            {component.content.logic.map(currentLogic => (
              <div style={{ display: 'flex', padding: '2px 5px' }}>
                <div style={{ flex: '1' }}>{currentLogic.name}()</div>
                <div style={{ fontStyle: 'italic' }}>function</div>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
              }}
            >
              <AddButton
                onClick={() => setShowNewFunctionDialog(true)}
                text="Add Logic"
              />
            </div>
          </div>
        )}
      </SectionContainer>
    </>
  );
};

Logic.propTypes = {
  component: PropTypes.object.isRequired,
};

export default Logic;
