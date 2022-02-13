import ModalInput from 'src/components/atoms/ModalInput';

import { Background, Content } from './styles';

function Modal({ onClose, onConfirm }) {
  return (
    <>
      <Background onClick={onClose} />
      <Content>
        <ModalInput />
        <ModalInput />
      </Content>
    </>
  );
}

export default Modal;
