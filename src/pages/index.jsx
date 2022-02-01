import { Layout } from 'antd';

import HeaderMenu from 'src/components/atoms/HeaderMenu';

const { Header, Content } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
        <HeaderMenu />
      </Header>
      <Content>home</Content>
    </Layout>
  );
}

export default Home;
