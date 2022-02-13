import { useState } from 'react';

import Logo from 'src/components/atoms/Logo';
import Button from 'src/components/atoms/Button';
import Modal from 'src/components/molecules/Modal';

import { Wrapper, Spacer } from './styles';

function Header() {
  const [isAuthModalShow, setIsAuthModalShow] = useState(true);

  return (
    <Wrapper>
      <Logo />
      <Spacer />
      <Button
        onClick={() => {
          setIsAuthModalShow(true);
        }}
      >
        Sign in
      </Button>
      {isAuthModalShow && (
        <Modal
          onClose={() => {
            setIsAuthModalShow(false);
          }}
        />
      )}
    </Wrapper>
  );
}

export default Header;
