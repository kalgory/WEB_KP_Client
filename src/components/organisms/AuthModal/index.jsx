import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';

import ModalInput from 'src/components/atoms/ModalInput';
import ModalButton from 'src/components/atoms/ModalButton';

import isAuthModalShowAtom from 'src/recoil/isAuthModalShow';

const ModalBase = dynamic(() => import('src/components/molecules/ModalBase'), {
  ssr: false,
});

function AuthModal() {
  const [isAuthModalShow, setIsAuthModalShow] = useRecoilState(isAuthModalShowAtom);
  return (
    <ModalBase
      isVisible={isAuthModalShow}
      onClose={() => {
        setIsAuthModalShow(false);
      }}
    >
      <ModalInput />
      <ModalInput />
      <ModalButton />
    </ModalBase>
  );
}

export default AuthModal;
