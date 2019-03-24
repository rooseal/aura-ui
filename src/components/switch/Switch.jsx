import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  border: ${({ theme }) => theme.borderPrimary};
  padding: 3px 20px;
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.primaryLight};
`;

export const Option = styled.button`
  border: 0;
  color: ${({ theme }) => theme.textPrimary};
  padding: 5px 10px;
  border: 0;
  background-color: transparent;
  outline: none;
  flex-grow: 1;
  font-size: 1em;

  &.active {
    color: ${({ theme }) => theme.textLight};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const Switch = ({ options, value, onChange, styled: Styled }) => (
  <Styled.Container>
    {options.map(({ value: cValue, text: cText }) => (
      <Option
        className={value === cValue ? 'active' : ''}
        onClick={() => onChange(cValue)}
      >
        {cText}
      </Option>
    ))}
  </Styled.Container>
);

Switch.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  styled: PropTypes.shape({
    Container: PropTypes.func,
  }),
};

Switch.defaultProps = {
  styled: {
    Container,
  },
};

export default Switch;
