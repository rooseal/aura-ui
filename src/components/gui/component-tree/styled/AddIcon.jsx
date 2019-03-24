import React from 'react';
import styled from 'styled-components';

const AddIcon = styled(props => <i {...props}>+</i>)`
  font-weight: bold;
  width: 1em;
  display: inline-block;
  padding: 1px 1px 0 0;
  margin-right: 1.2em;
  border: ${({ theme }) => theme.borderPrimary};
`;

export default AddIcon;
