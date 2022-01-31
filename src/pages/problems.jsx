import { Layout } from 'antd';

import ProblemTable from 'src/components/molecules/ProblemList';

import styles from 'src/styles/pages/problems/styles.module.css';

const { Content } = Layout;

function Home() {
  return (
    <Layout className='layout'>
      <Content className={styles.content}>
        <ProblemTable />
      </Content>
    </Layout>
  );
}

export default Home;
