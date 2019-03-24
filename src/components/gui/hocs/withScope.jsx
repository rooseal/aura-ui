import React from 'react';
import styled from 'styled-components';

const ScopeContainer = styled.div`
  border: 1px solid pink;
  box-shadow: 1px 1px 2px rgba(rgb(233, 30, 99, 0.4));
  padding: 5px;
  margin: 5px;
  min-height: 200px;
`;

const withScope = Component => props => (
  <ScopeContainer>
    <Component {...props} />
  </ScopeContainer>
);

export default withScope;
