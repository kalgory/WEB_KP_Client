import { Wrapper } from './styles';

function Button({ onClick, children }) {
  return (
    <Wrapper type='button' onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default Button;
