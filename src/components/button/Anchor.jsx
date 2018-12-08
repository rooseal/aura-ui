import React from 'react';
import PropTypes from 'prop-types';

import StyledAnchorButton from './StyledAnchorButton';

const Submit = ({ StyledComp, style, children, ...props }) => (
  <StyledComp style={style} {...props}>
    {children}
  </StyledComp>
);

Submit.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

Submit.defaultProps = {
  style: {},
  StyledComp: StyledAnchorButton,
};

export default Submit;
