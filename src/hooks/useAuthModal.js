import { useSetRecoilState } from 'recoil';

import isAuthModalShowAtom from 'src/recoil/isAuthModalShow';

function useAuthModal() {
  const setIsAuthModalShow = useSetRecoilState(isAuthModalShowAtom);
  const show = () => {
    setIsAuthModalShow(true);
  };
  const hide = () => {
    setIsAuthModalShow(false);
  };
  return { show, hide };
}

export default useAuthModal;
