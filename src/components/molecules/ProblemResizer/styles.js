import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: col-resize;

  &:hover > div {
    box-shadow: -0px 0 6px 0 #555555;
  }
`;

export const Divider = styled.div`
  flex-grow: 1;
  width: 1px;
  background-color: #333333;
`;
