import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({ style, onClick, children, ...props }) => (
  <button type="submit" style={style} onClick={onClick} {...props}>
    {children}
  </button>
);

Submit.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Submit.defaultProps = {
  style: {},
  onClick: () => {},
};

export default Submit;
