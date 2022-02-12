import Logo from 'src/components/atoms/Logo';
import Button from 'src/components/atoms/Button';

import { Wrapper, Spacer } from './styles';

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Spacer />
      <Button>Sign in</Button>
    </Wrapper>
  );
}

export default Header;
