import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Layout className='layout'>
      <Header>
        <Menu mode='horizontal'>
          <Menu.Item>problems</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>©2021 Created by Kalgory</Footer>
    </Layout>
  );
}

export default MyApp;
