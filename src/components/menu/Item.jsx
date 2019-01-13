import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const Item = ({ action, children }, ref) => (
  // console.log({ childType: typeof children });

  <Styled.Item tabIndex="-1" onClick={action}>
    {children}
  </Styled.Item>
);
Item.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
};

Item.defaultProps = {};

export default Item;
