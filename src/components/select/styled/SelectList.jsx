import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../../css/themes/teal';

const StyledList = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-top: 0;
  border-radius: 0 0 2px 2px;
  width: 100%;
  box-sizing: border-box;

  ::before {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    border-bottom: 1px solid ${({ theme }) => theme.borderLight};
    margin: 0 auto;
  }
`;

StyledList.propTypes = {
  theme: PropTypes.object,
};

StyledList.defaultProps = {
  theme: teal,
};

export default StyledList;
