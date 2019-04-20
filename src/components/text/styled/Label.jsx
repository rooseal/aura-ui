import styled, { css } from 'styled-components';

const Label = styled.label`
  color: #666;
  transition: font-size 0.5s, top 0.5s, left 0.5s;
  left: 1em;
  top: 0.5em;
  position: absolute;
  cursor: text;
  font-family: ${({ theme }) => theme.fontFamily || 'Verdana'};

  ${({ active }) => active && css`
    font-size: 0;
    left: 0;
    top: 0;
  `}
`;

export default Label;
