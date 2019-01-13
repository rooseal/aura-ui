import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

const Option = forwardRef(
  (
    {
      id,
      isActive,
      isSelected,
      isDisabled,
      list,
      value,
      onFocus,
      children,
      Styled: { Option: StyledOption },
      ...props
    },
    ref,
  ) => {
    const getClassnames = () => {
      const extraClassnames = [];

      if (isActive) extraClassnames.push('active');
      if (isSelected) extraClassnames.push('selected');
      if (isDisabled) extraClassnames.push('disabled');

      if (extraClassnames.length > 0) {
        return extraClassnames.join(' ');
      }

      return '';
    };

    return (
      <StyledOption
        ref={ref}
        className={getClassnames()}
        tabIndex="-1"
        role="option"
        onClick={() => list.setValue(value)}
        onMouseOver={() => list.setActive(id)}
        onFocus={onFocus}
        {...props}
      >
        {children}
      </StyledOption>
    );
  },
);

Option.propTypes = {
  list: PropTypes.shape({
    setActive: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  isSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  Styled: PropTypes.shape({
    Option: PropTypes.any,
  }),
  isDisabled: PropTypes.bool,
  onFocus: PropTypes.func,
};

Option.defaultProps = {
  Styled: {
    Option: Styled.Option,
  },
  isDisabled: false,
  onFocus: () => {},
};

export default Option;
