import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Panel = ({ initial, children }) => {
  const [collapsed, setCollapsed] = useState(initial);

  return children([collapsed, setCollapsed]);
};

Panel.propTypes = {
  initial: PropTypes.bool,
  children: PropTypes.func,
};

Panel.defaultProps = {
  initial: true,
};

export default Panel;
