import React from 'react';
import PropTypes from 'prop-types';

import StyledAnchorButton from './StyledAnchorButton';

const AnchorButton = ({ StyledComp, style, children, ...props }) => (
  <StyledComp style={style} {...props}>
    {children}
  </StyledComp>
);

AnchorButton.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

AnchorButton.defaultProps = {
  style: {},
  StyledComp: StyledAnchorButton,
};

AnchorButton.preview = {
  children: 'Clickable Text',
};

export default AnchorButton;
