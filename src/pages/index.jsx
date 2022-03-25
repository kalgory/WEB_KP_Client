import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from '@/components/molecules/Header';
import Button from '@/components/atoms/Button';

import { Center } from '@/styles/pages/styles';

import { withSession } from '@/utils/session';

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
        <Button
          onClick={() => {}}
          disabled={false}
        >
          Start
        </Button>
      </Center>
    </>
  );
}

export const getServerSideProps = withSession();

export default Index;
