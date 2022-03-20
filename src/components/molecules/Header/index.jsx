import Logo from '@/components/atoms/Logo';
import Button from '@/components/atoms/Button';

import useAuthModal from '@/hooks/useAuthModal';

import { Wrapper, Spacer } from './styles';

function Header() {
  const { show } = useAuthModal();

  return (
    <Wrapper>
      <Logo />
      <Spacer />
      <Button onClick={() => show()}>Sign in</Button>
    </Wrapper>
  );
}

export default Header;
