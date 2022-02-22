import { createPortal } from 'react-dom';

import { Background, Content } from './styles';

function Modal({ onClose, isVisible, children }) {
  return createPortal(
    isVisible && (
      <>
        <Background onClick={onClose} />
        <Content>{children}</Content>
      </>
    ),
    document.getElementById('modal'),
  );
}

export default Modal;
