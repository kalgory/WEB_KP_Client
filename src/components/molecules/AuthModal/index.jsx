import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import axios from 'axios';

import ModalBase from '@/components/atoms/ModalBase';
import ModalInput from '@/components/atoms/ModalInput';
import ModalButton from '@/components/atoms/ModalButton';

import { Form, Title } from './styles';

function AuthModal({ onClose }) {
  const { mutate, isLoading } = useMutation(
    ({ email, password }) => axios.post('api/sign-in', { email, password }),
    {
      onSuccess: () => onClose(),
    },
  );

  const signIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    mutate(data);
  };

  return (
    <ModalBase onClose={onClose}>
      <Form onSubmit={signIn}>
        <Title>Welcome</Title>
        <ModalInput
          type='email'
          placeholder='Email'
          autoFocus
          name='email'
        />
        <ModalInput
          type='password'
          placeholder='Password'
          name='password'
        />
        <ModalButton
          type='submit'
          isLoading={isLoading}
        >
          Sign in
        </ModalButton>
      </Form>
    </ModalBase>
  );
}

AuthModal.propTypes = {
  onClose: PropTypes.func,
};

AuthModal.defaultProps = {
  onClose: () => {},
};

export default AuthModal;
