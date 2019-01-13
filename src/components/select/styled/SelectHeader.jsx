import PropTypes from 'prop-types';
import styled from 'styled-components';

import teal from '../../../css/themes/teal';

const StyledHeader = styled.button`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-bottom: ${({ open, theme }) =>
    open ? 0 : `1px solid ${theme.borderLight}`};
  border-radius: 2px 2px 0 0;
  display: block;
  width: 100%;
  margin: 0;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  font-family: Verdana;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;

  ::before {
    content: '⯆';
    float: right;
    margin-right: 10px;
  }
`;

StyledHeader.propTypes = {
  theme: PropTypes.object,
};

StyledHeader.defaultProps = {
  theme: teal,
};

export default StyledHeader;
