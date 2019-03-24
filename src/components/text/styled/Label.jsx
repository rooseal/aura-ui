import styled from 'styled-components';

const Label = styled.label`
  color: #666;
  position: absolute;
  transition: font-size 0.5s, top 0.5s, left 0.5s;
  left: 0.7em;
  top: 0.35em;

  &.active {
    font-size: 0;
    left: 0;
    top: 0;
  }
`;

export default Label;
