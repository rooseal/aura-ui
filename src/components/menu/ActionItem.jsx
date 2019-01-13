import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const ActionItem = forwardRef(
  ({ children, action, setActive, onFocus, ...rest }, ref) => (
    // console.log({ childType: typeof children });
    // console.log({ props: rest });

    <Styled.Item>
      <Styled.Button
        ref={ref}
        tabIndex="-1"
        onClick={action}
        onFocus={onFocus}
        onMouseOver={setActive}
        {...rest}
      >
        {children}
      </Styled.Button>
    </Styled.Item>
  ),
);

ActionItem.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
};

ActionItem.defaultProps = {};

export default ActionItem;
