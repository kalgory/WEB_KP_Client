import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: col-resize;
  font-size: 24px;
  color: #666666;
`;

export const Divider = styled.div`
  flex-grow: 1;
  width: 1px;
  background-color: #333333;
  margin: 24px 0;
`;
