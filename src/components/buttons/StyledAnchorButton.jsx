import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledAnchorButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  display: inline;
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  font-weight: bold;
  padding: 0;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.primaryDark};
  }
`;

StyledAnchorButton.propTypes = {
  theme: PropTypes.object,
};

StyledAnchorButton.defaultProps = {
  theme: teal,
};

export default StyledAnchorButton;
