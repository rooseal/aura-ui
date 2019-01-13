import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../../css/themes/teal';

const StyledOption = styled.div`
  background-color: white;
  border-radius: 2px;
  color: ${({ theme }) => theme.primary};
  font-family: Verdana;
  font-size: 14px;
  margin: 3px;
  padding: 10px;
  cursor: default;
  outline: none;

  &.selected::before {
    content: '✓';
    float: right;
    margin-right: 10px;
  }

  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

StyledOption.propTypes = {
  theme: PropTypes.object,
};

StyledOption.defaultProps = {
  theme: teal,
};

export default StyledOption;
