import Logo from '@/components/atoms/Logo';
import HeaderButton from '@/components/atoms/HeaderButton';

import useModal from '@/hooks/useModal';

import { Wrapper, Spacer } from './styles';

function Header() {
  const { show } = useModal();

  return (
    <Wrapper>
      <Logo />
      <Spacer />
      <HeaderButton onClick={() => show()}>Sign in</HeaderButton>
    </Wrapper>
  );
}

export default Header;
