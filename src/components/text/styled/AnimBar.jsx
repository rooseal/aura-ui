import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const AnimBar = styled.div`
  background-color: ${({ theme }) => theme.primary || 'royalblue'};
  height: 5px;
  position: absolute;
  transition: width 0.5s;
  z-index: 2;
  width: 0;

  &.active {
    width: 100%;
  }
`;

AnimBar.propTypes = {
  theme: PropTypes.object,
};

AnimBar.defaultProps = {
  theme: teal,
};

export default AnimBar;
