import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const TabContainer = styled.button`
  color: white;
  background-color: ${({ active, theme }) =>
    active ? theme.secondaryDark : theme.primaryLight};
  padding: 0.8em;
  border: 0;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};
  outline: none;
  font-size: 1em;
  height: 35px;
  line-height: 1;

  :hover {
    background-color: ${({ active, theme }) =>
      active ? theme.secondaryDark : theme.secondary};
  }
`;

TabContainer.propTypes = {
  theme: PropTypes.object,
};

TabContainer.defaultProps = {
  theme: teal,
};

const Tab = ({ children, setState, value, active }) => (
  <TabContainer active={active} onClick={() => setState(value)}>
    {children}
  </TabContainer>
);

Tab.propTypes = {
  children: PropTypes.any.isRequired,
  setState: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
