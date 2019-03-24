import styled from 'styled-components';

const AnimBar = styled.div`
  background-color: teal;
  height: 5px;
  position: absolute;
  transition: width 0.5s;
  z-index: 2;
  width: 0;

  &.active {
    width: 100%;
  }
`;

export default AnimBar;
