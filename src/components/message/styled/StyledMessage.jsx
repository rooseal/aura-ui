import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const StyledMessage = styled.div`
  color: ${props => props.theme.textPrimary};
  /* background-image: linear-gradient(to left, #ffffff, #efefef); */
  background-color: #fafafa;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 20px 30px;
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 10px;
`;

StyledMessage.propTypes = {
  theme: PropTypes.object,
  nested: PropTypes.bool,
};

StyledMessage.defaultProps = {
  theme: teal,
  nested: false,
};

export default StyledMessage;
