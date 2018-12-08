import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

const Submit = ({ StyledComp, style, children, ...props }) => (
  <StyledComp type="submit" style={style} {...props}>
    {children}
  </StyledComp>
);

Submit.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

Submit.defaultProps = {
  style: {},
  StyledComp: StyledButton,
};

export default Submit;
