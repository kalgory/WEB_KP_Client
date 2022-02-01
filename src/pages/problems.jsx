import { Layout } from 'antd';

import ProblemTable from 'src/components/molecules/ProblemList';
import HeaderMenu from 'src/components/atoms/HeaderMenu';

import styles from 'src/styles/pages/problems/styles.module.css';

const { Content, Header } = Layout;

function Home() {
  return (
    <Layout className='layout'>
      <Header>
        <HeaderMenu />
      </Header>
      <Content className={styles.content}>
        <ProblemTable />
      </Content>
    </Layout>
  );
}

export default Home;
