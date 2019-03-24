import React from 'react';
import PropTypes from 'prop-types';

import StyledAnchor from './StyledAnchor';

const Anchor = ({ StyledComp, target, rel, style, children, ...props }) => (
  <StyledComp
    style={style}
    rel={target === '_blank' && rel === undefined ? 'noopener noreferrer' : rel}
    target={target}
    {...props}
  >
    {children}
  </StyledComp>
);

Anchor.propTypes = {
  style: PropTypes.object,
  StyledComp: PropTypes.func,
};

Anchor.defaultProps = {
  style: {},
  StyledComp: StyledAnchor,
};

Anchor.preview = {
  children: 'Link Text',
};

export default Anchor;
