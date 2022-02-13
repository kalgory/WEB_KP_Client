import { createPortal } from 'react-dom';

import ModalInput from 'src/components/atoms/ModalInput';

import { Background, Content } from './styles';

function Modal({ onClose, onConfirm }) {
  return createPortal(
    <>
      <Background onClick={onClose} />
      <Content>
        <ModalInput />
        <ModalInput />
      </Content>
    </>,
    document.getElementById('modal'),
  );
}

export default Modal;
