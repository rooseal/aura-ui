import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primaryLight};
`;

const Tabs = ({ updater, children, initial }) => {
  const [activeIndex, setActiveIndex] = useState(initial);

  return (
    <TabsContainer>
      {React.Children.map(children, (child, i) => (
        <div style={{ marginRight: '1px' }}>
          {React.cloneElement(child, {
            active: i === activeIndex,
            setState: value => {
              updater(value);
              setActiveIndex(i);
            },
          })}
        </div>
      ))}
    </TabsContainer>
  );
};

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  updater: PropTypes.func.isRequired,
  initial: PropTypes.number,
};

Tabs.defaultProps = {
  initial: 0,
};

export default Tabs;
