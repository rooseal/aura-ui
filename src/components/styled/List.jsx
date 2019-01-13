import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../css/themes/teal';

const StyledList = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 0 0 2px 2px;
  width: 100%;
  box-sizing: border-box;
`;

StyledList.propTypes = {
  theme: PropTypes.object,
};

StyledList.defaultProps = {
  theme: teal,
};

export default StyledList;
