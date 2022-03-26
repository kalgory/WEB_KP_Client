import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from '@/components/molecules/Header';
import NavigationButton from '@/components/atoms/NavigationButton';

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

export const getServerSideProps = withSession();

export default Index;
