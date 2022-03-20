import { createPortal } from 'react-dom';

import useDelayedState from '@/hooks/useDelayedState';

import { Background, Content } from './styles';

function Modal({ onClose, isVisible, children }) {
  const delayedIsVisible = useDelayedState(isVisible, 150);

  return createPortal(
    delayedIsVisible && (
      <>
        <Background onClick={onClose} />
        <Content isVisible={isVisible}>{children}</Content>
      </>
    ),
    document.getElementById('modal'),
  );
}

export default Modal;
