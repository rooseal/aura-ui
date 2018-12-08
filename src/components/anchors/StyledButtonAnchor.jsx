import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledButton = styled.a`
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 2px;
  color: white;
  cursor: default;
  display: inline-block;
  font-family: Verdana;
  font-size: 0.8em;
  padding: 10px 24px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */

  :active {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateX(1px) translateY(1px);
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }

  :visited {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

StyledButton.propTypes = {
  theme: PropTypes.object,
};

StyledButton.defaultProps = {
  theme: teal,
};

export default StyledButton;
