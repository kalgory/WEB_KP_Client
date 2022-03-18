import dynamic from 'next/dynamic';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from 'src/styles/globalStyle';

const AuthModal = dynamic(() => import('src/components/molecules/AuthModal'), {
  ssr: false,
});

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AuthModal />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
