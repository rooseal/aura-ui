import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledMenu = styled.ul`
  background-color: transparent;
  position: ${props => (props.nested ? 'absolute' : 'relative')};
  width: 100%;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
`;

StyledMenu.propTypes = {
  theme: PropTypes.object,
  nested: PropTypes.bool,
};

StyledMenu.defaultProps = {
  theme: teal,
  nested: false,
};

export default StyledMenu;
