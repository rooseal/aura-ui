import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../../css/themes/teal';

const StyledHeader = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  display: block;
  width: 100%;
  border-radius: ${props => (props.open ? '2px 2px 0 0' : '2px')};
  color: white;
  font-family: Verdana;
  font-size: 0.8em;
  padding: 10px 24px;

  /* :active {
    transform: translateX(1px) translateY(1px);
  } */

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
  }
`;

StyledHeader.propTypes = {
  theme: PropTypes.object,
};

StyledHeader.defaultProps = {
  theme: teal,
};

export default StyledHeader;
