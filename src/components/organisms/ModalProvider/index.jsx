import { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import ModalDispatchContext from '@/contexts/ModalDispatchContext';

const AuthModal = dynamic(() => import('@/components/molecules/AuthModal'), {
  ssr: false,
});

function ModalProvider({ children }) {
  const [modal, setModal] = useState({ isShow: false });
  const closeModal = () => setModal({ ...modal, isShow: false });

  return (
    <ModalDispatchContext.Provider value={setModal}>
      {modal.isShow && <AuthModal onClose={closeModal} />}
      {children}
    </ModalDispatchContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
