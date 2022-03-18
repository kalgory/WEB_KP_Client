import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import ModalBase from 'src/components/atoms/ModalBase';
import ModalInput from 'src/components/atoms/ModalInput';
import ModalButton from 'src/components/atoms/ModalButton';

import isAuthModalShowAtom from 'src/recoil/isAuthModalShow';

import { Form, Title } from './styles';

function AuthModal() {
  const [isAuthModalShow, setIsAuthModalShow] = useRecoilState(isAuthModalShowAtom);
  const mutation = useMutation(({ email, password }) =>
    axios.post('api/sign-in', { email, password }),
  );

  const signIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    mutation.mutate(data);
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
        <ModalInput type='email' placeholder='Email' autoFocus name='email' value='' />
        <ModalInput type='password' placeholder='Password' name='password' />
        <ModalButton type='submit'>Sign in</ModalButton>
      </Form>
    </ModalBase>
  );
}

export default AuthModal;
