import React from 'react';

import StyledButtonAnchor from './StyledButtonAnchor';
import Anchor from './Anchor';

const ButtonAnchor = props => (
  <Anchor StyledComp={StyledButtonAnchor} {...props} />
);

export default ButtonAnchor;
