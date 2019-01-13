import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledSelect = styled.div`
  background-color: transparent;
  position: relative;
  width: 100%;
  max-width: 600px;
`;

StyledSelect.propTypes = {
  theme: PropTypes.object,
};

StyledSelect.defaultProps = {
  theme: teal,
};

export default StyledSelect;
