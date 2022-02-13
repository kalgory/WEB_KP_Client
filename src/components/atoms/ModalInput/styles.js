import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input`
  background: transparent;
  height: 56px;
  padding: 0 24px;
  margin: 12px 0;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 28px;
  font-size: 18px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
