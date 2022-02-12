import dynamic from 'next/dynamic';
import Head from 'next/head';

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
      <Center>
        <Timer />
      </Center>
    </>
  );
}

export default Home;
