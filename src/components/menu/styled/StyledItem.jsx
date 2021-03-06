import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledItem = styled.li`
  background-color: ${({ theme }) => theme.background};
  position: relative;
  display: block;
  border: 0;
  border-left: 2px solid ${({ theme }) => theme.primary};
  border-right: 2px solid ${({ theme }) => theme.primary};
  padding: 2px;

  :last-child {
    border-radius: 0 0 5px 5px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

StyledItem.propTypes = {
  theme: PropTypes.object,
};

StyledItem.defaultProps = {
  theme: teal,
};

export default StyledItem;
