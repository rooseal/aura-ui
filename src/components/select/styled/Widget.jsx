import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledWidget = styled.div`
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
`;

StyledWidget.propTypes = {
  theme: PropTypes.object,
};

StyledWidget.defaultProps = {
  theme: teal,
};

export default StyledWidget;
