import { Wrapper } from './styles';

function Button({ children }) {
  return <Wrapper type='button'>{children}</Wrapper>;
}

export default Button;
