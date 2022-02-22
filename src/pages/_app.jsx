import { RecoilRoot } from 'recoil';

import AuthModal from 'src/components/organisms/AuthModal';

import GlobalStyle from 'src/styles/globalStyle';

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
