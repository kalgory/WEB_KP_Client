import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from '@/components/molecules/Header';
import NavigationButton from '@/components/atoms/NavigationButton';

import { Center } from '@/styles/common';

import fetcher from '@/utils/fetcher';

const Timer = dynamic(() => import('@/components/atoms/Timer'), {
  ssr: false,
});

function Index() {
  useEffect(() => {
    fetcher.get('/users/me').then(({ data }) => console.log(data));
  }, []);
  return (
    <>
      <Head>
        <title>KP</title>
      </Head>
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
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}

export default Index;
