import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

const Button = ({ StyledComp, style, children, ...props }) => (
  <StyledComp type="button" style={style} {...props}>
    {children}
  </StyledComp>
);

Button.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  StyledComp: StyledButton,
};

Button.preview = {
  children: 'Sample Button',
};

export default Button;
