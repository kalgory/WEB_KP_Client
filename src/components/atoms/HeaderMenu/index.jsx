import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

function HeaderMenu() {
  const router = useRouter();

  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[router.route]}>
      <Menu.Item key='/' icon={<MailOutlined />}>
        <Link href='/'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='/problems' icon={<MailOutlined />}>
        <Link href='/problems'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Problems</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default HeaderMenu;
