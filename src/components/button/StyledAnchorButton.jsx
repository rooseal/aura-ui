import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledAnchorButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  display: inline;
  font-weight: bold;

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
