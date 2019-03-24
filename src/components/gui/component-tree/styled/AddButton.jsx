import React from 'react';
import styled from 'styled-components';

import AddIcon from './AddIcon';

const AddButton = styled(({ text, ...props }) => (
  <button type="button" {...props}>
    <AddIcon /> {text}
  </button>
))`
  background-color: transparent;
  color: ${({ theme }) => theme.textDark};
  border: 0;
  cursor: pointer;
  outline: none;
  font-size: 0.8em;

  :hover {
    color: ${({ theme }) => theme.textLight};
  }
`;

export default AddButton;
