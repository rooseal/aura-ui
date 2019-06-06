import styled from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  line-height: 1;
  margin-bottom: 0.7em;
  padding: 0.5em 1em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.primary || 'royalblue'};
  outline: 0;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};

  :focus {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

Input.propTypes = {
  theme: PropTypes.object,
};

Input.defaultProps = {
  theme: teal,
};

export default Input;
