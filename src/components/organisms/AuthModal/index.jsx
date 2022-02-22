import { useRecoilState } from 'recoil';

import ModalBase from 'src/components/molecules/ModalBase';
import ModalInput from 'src/components/atoms/ModalInput';
import ModalButton from 'src/components/atoms/ModalButton';

import isAuthModalShowAtom from 'src/recoil/isAuthModalShow';

import { Form, Title } from './styles';

function AuthModal() {
  const [isAuthModalShow, setIsAuthModalShow] = useRecoilState(isAuthModalShowAtom);
  const signIn = (event) => {
    const formData = new FormData(event.target);
    // eslint-disable-next-line no-unused-vars
    const data = Object.fromEntries(formData);
    event.preventDefault();
  };

  return (
    <ModalBase
      isVisible={isAuthModalShow}
      onClose={() => {
        setIsAuthModalShow(false);
      }}
    >
      <Form onSubmit={signIn}>
        <Title>Welcome</Title>
        <ModalInput type='email' placeholder='Email' autoFocus name='email' />
        <ModalInput type='password' placeholder='Password' name='password' />
        <ModalButton type='submit'>Sign in</ModalButton>
      </Form>
    </ModalBase>
  );
}

export default AuthModal;
