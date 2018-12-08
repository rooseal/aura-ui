import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 24px;
  border-radius: 2px;

  :active {
    transform: translateX(1px) translateY(1px);
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
  }
`;

StyledButton.propTypes = {
  theme: PropTypes.object,
};

StyledButton.defaultProps = {
  theme: teal,
};

export default StyledButton;
