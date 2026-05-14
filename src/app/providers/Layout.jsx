import {Link, Outlet} from 'react-router-dom'
import {Layout, Menu} from 'antd'

const { Header, Content, Footer, Sider } = Layout

export const CustomLayout = () => {
  const menuItems = [
    {
      label: (
        <Link style={{ color: 'brown', fontFamily: 'SpaceGrotesk' }} to="/">
          Home
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link
          style={{ color: 'brown', fontFamily: 'SpaceGrotesk' }}
          to="/products"
        >
          Products
        </Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link style={{ color: 'brown', fontFamily: 'SpaceGrotesk' }} to="/cart">
          Cart
        </Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link style={{ color: 'brown', fontFamily: 'SpaceGrotesk' }} to="/news">
          NewsPage
        </Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link
          style={{ color: 'brown', fontFamily: 'SpaceGrotesk' }}
          to="/v1products"
        >
          V1Products
        </Link>
      ),
      key: '5',
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: 'black' }}>
        <Menu
          style={{
            background: 'black',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ background: 'black' }}></Header>
        <Content style={{ background: 'brown' }}>
          <Outlet />
        </Content>
        <Footer style={{ background: 'black' }}></Footer>
      </Layout>
    </Layout>
  )
}
