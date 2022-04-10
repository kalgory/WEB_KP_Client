import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import ModalProvider from '@/components/organisms/ModalProvider';

import GlobalStyle from '@/styles/globalStyle';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line react/prop-types */}
      <Hydrate state={pageProps.dehydratedState}>
        <ModalProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ModalProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
