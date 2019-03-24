import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer } from './styled';

const Elements = ({ component, activeElementId, setActiveElementId }) => (
  <>
    <SectionContainer>
      {component.content.render.length === 0 ? (
        <p style={{ padding: '5px 5px 5px 5px', textAlign: 'center' }}>
          No Elements in Component yet.
        </p>
      ) : (
        <div>
          {component.content.render.map(currentElement => (
            <div style={{ display: 'flex', padding: '2px 5px' }}>
              <div
                onClick={() => {
                  setActiveElementId(currentElement.id);
                }}
                role="button"
                tabIndex="0"
                onKeyDown={e =>
                  e.key === 'Enter' && setActiveElementId(currentElement.id)
                }
                style={{
                  flex: '1',
                  cursor: 'pointer',
                  fontWeight:
                    activeElementId === currentElement.id ? 'bold' : 'normal',
                }}
              >
                {currentElement.name}
              </div>
              {activeElementId === currentElement.id && (
                <div style={{ fontStyle: 'italic' }}>active</div>
              )}
            </div>
          ))}
        </div>
      )}
    </SectionContainer>
  </>
);

Elements.propTypes = {
  component: PropTypes.object.isRequired,
};

export default Elements;
