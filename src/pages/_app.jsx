import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import ModalProvider from '@/components/organisms/ModalProvider';

import GlobalStyle from '@/styles/globalStyle';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ModalProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
