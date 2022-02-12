import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from 'src/components/molecules/Header';

import { Center } from 'src/styles/pages/styles';

const Timer = dynamic(() => import('src/components/atoms/Timer'), {
  ssr: false,
});

function Home() {
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

export default Home;
