import { dehydrate, QueryClient } from 'react-query';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import NavigationButton from '@/components/atoms/NavigationButton';
import Header from '@/components/molecules/Header';

import { Center, FixedScreen } from '@/styles/common';

import fetcher from '@/utils/fetcher';

import { useUsersMe } from '@/hooks/queries/user';

const Timer = dynamic(() => import('@/components/atoms/Timer'), {
  ssr: false,
});

function Index() {
  const { data } = useUsersMe();
  console.log(data);

  return (
    <>
      <Head>
        <title>KP</title>
      </Head>
      <FixedScreen
        gradient
        flexDirection='column'
      >
        <Header />
        <Center>
          <Timer />
          <NavigationButton
            href='/problems/1'
            disabled={false}
          >
            Start
          </NavigationButton>
        </Center>
      </FixedScreen>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['users/me'], async () => {
    const { data } = await fetcher.get('/api/users/me');
    return data;
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
