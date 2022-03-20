import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from '@/components/molecules/Header';

import { Center } from '@/styles/pages/styles';

const Timer = dynamic(() => import('@/components/atoms/Timer'), {
  ssr: false,
});

function Index() {
  return (
    <>
      <Head>
        <title>KP</title>
      </Head>
      <Header />
      <Center>
        <Timer />
      </Center>
    </>
  );
}

export default Index;
