import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledItem = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.textPrimary};
  font-family: Verdana;
  font-size: 0.8em;
  padding: 10px 24px;
  width: 100%;
  display: block;

  :active {
    transform: translateX(0px) translateY(1px);
  }

  :focus {
    outline: none;
    color: white;
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

StyledItem.propTypes = {
  theme: PropTypes.object,
};

StyledItem.defaultProps = {
  theme: teal,
};

export default StyledItem;
