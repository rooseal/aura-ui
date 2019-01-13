import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const LinkItem = ({ _ref, action, children }) => {
  console.log({ childType: typeof children });

  return (
    <Styled.Item>
      <Styled.Button>{children}</Styled.Button>
    </Styled.Item>
  );
};

LinkItem.propTypes = {
  children: PropTypes.any.isRequired,
};

LinkItem.defaultProps = {};

export default LinkItem;
