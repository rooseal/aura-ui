import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ style, onClick, children, ...props }) => (
  <button type="button" style={style} onClick={onClick} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  onClick: () => {},
};

export default Button;
