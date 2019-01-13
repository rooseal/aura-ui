import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  font-weight: bold;
  padding: 0;

  :active {
    color: ${({ theme }) => theme.primaryDark};
  }

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.primaryDark};
  }

  :visited {
    color: ${({ theme }) => theme.primary};
  }
`;

StyledAnchor.propTypes = {
  theme: PropTypes.object,
};

StyledAnchor.defaultProps = {
  theme: teal,
};

export default StyledAnchor;
