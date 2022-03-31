import { useContext } from 'react';

import ModalDispatchContext from '@/contexts/ModalDispatchContext';

function useModal() {
  const setModal = useContext(ModalDispatchContext);
  const show = () => setModal({ isShow: true });
  const hide = () => setModal({ isShow: false });
  return { show, hide };
}

export default useModal;
