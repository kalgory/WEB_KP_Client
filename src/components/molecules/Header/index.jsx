import Logo from '@/components/atoms/Logo';
import Button from '@/components/atoms/Button';

import useModal from '@/hooks/useModal';

import { Wrapper, Spacer } from './styles';

function Header() {
  const { show } = useModal();

  return (
    <Wrapper>
      <Logo />
      <Spacer />
      <Button onClick={() => show()}>Sign in</Button>
    </Wrapper>
  );
}

export default Header;
