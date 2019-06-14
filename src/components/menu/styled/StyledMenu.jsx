import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledMenu = styled.ul`
  background-color: transparent;
  ${'' /* background-color: ${({ theme }) => theme.secondaryLight}; */}
  position: absolute;
  max-width: 250px;
  min-width: 120px;
  right: 5px;
  top: calc(100% - 5px);
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  z-index: 50;
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
