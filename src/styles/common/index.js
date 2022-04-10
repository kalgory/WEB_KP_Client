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

export const FixedScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  background: ${({ backgroundColor, gradient }) => {
    if (gradient) {
      return 'linear-gradient(120deg, #7454f5 10%, #265e62 100%)';
    }
    return backgroundColor ?? '#1e1e1e';
  }};
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
