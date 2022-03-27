import styled from 'styled-components';

export const Center = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

export const Full = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: ${({ flexGrow }) => flexGrow};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
`;
