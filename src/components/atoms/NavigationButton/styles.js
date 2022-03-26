import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 12px 16px;
  margin: 4px;
  font-size: 20px;
  font-family: 'Share Tech Mono', monospace;
  background-color: transparent;
  color: ${({ disabled }) => (disabled ? '#777777' : '#ffffff')};
  border-radius: 16px;
  border: 2px solid ${({ disabled }) => (disabled ? '#777777' : '#ffffff')};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'cursor')};
`;
