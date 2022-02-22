import dynamic from 'next/dynamic';
import { RecoilRoot } from 'recoil';

import GlobalStyle from 'src/styles/globalStyle';

const AuthModal = dynamic(() => import('src/components/organisms/AuthModal'), {
  ssr: false,
});

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <AuthModal />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
