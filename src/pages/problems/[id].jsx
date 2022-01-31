import { useRouter } from 'next/router';
import { Layout, PageHeader } from 'antd';

import styles from 'src/styles/pages/problem/styles.module.css';
import CodeTextarea from '../../components/atoms/CodeTextarea';

const { Header, Content, Footer } = Layout;

function Problem() {
  const router = useRouter();
  return (
    <Layout>
      <Header>
        <PageHeader onBack={() => router.back()} title='다리 건너기' subTitle='실버3' />
      </Header>
      <Content className={styles.content}>
        <div>problem content</div>
        <CodeTextarea />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default Problem;
