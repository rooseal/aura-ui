import React from 'react';
import PropTypes from 'prop-types';

import StyledAnchor from './StyledAnchor';

const Button = ({ StyledComp, target, rel, style, children, ...props }) => (
  <StyledComp
    style={style}
    rel={target === '_blank' && rel === undefined ? 'noopener noreferrer' : rel}
    target={target}
    {...props}
  >
    {children}
  </StyledComp>
);

Button.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  StyledComp: StyledAnchor,
};

export default Button;
