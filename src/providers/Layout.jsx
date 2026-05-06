import {Link, Outlet} from 'react-router-dom'
import {Layout, Menu} from 'antd'

const { Header, Content, Footer, Sider } = Layout

export const CustomLayout = () => {
  const menuItems = [
    {
      label: <Link to="/">Home</Link>,
      key: '1',
    },
    {
      label: <Link to="/products">Products</Link>,
      key: '2',
    },
    {
      label: <Link to="/cart">Cart</Link>,
      key: '3',
    },
    {
      label: <Link to="/news">NewsPage</Link>,
      key: '4',
    },
    {
      label: <Link to="/v1products">V1Products</Link>,
      key: '5',
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: 'lightyellow' }}>
        <Menu
          style={{
            background: 'lightyellow',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ background: 'lightyellow' }}></Header>
        <Content>
          <Outlet />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}
