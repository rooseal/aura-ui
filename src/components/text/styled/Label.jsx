import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import teal from '../../../css/themes/teal';

const Label = styled.label`
  color: #666;
  transition: font-size 0.5s, top 0.5s, left 0.5s;
  left: 1em;
  top: 0.5em;
  position: absolute;
  cursor: text;
  font-family: ${({ theme }) => theme.fontFamily || 'Verdana'};

  ${({ active }) =>
    active &&
    css`
      font-size: 0;
      left: 0;
      top: 0;
    `}
`;

Label.propTypes = {
  theme: PropTypes.object,
};

Label.defaultProps = {
  theme: teal,
};

export default Label;
