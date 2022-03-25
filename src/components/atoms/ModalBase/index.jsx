import { createPortal } from 'react-dom';

import { Background, Content } from './styles';

function Modal({ onClose, children }) {
  return createPortal(
    <>
      <Background onClick={onClose} />
      <Content>{children}</Content>
    </>,
    document.getElementById('modal'),
  );
}

export default Modal;
