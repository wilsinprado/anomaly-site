import { Grid, Layout, Menu, Space, Typography } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/guild-logo.jpg'
import type { MenuProps } from 'antd'

const { Header, Content, Footer } = Layout
const { Title } = Typography
const { useBreakpoint } = Grid

const items: MenuProps['items'] = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/apply', label: <Link to="/apply">Apply</Link> },
    { key: '/roster', label: <Link to="/roster">Roster</Link> },
    { key: '/horarios', label: <Link to="/horarios">Horários</Link> },
    { key: '/sobre', label: <Link to="/sobre">Sobre</Link> }
  ]

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const screens = useBreakpoint()
  const isMobile = !screens.md
  const selectedKey = items?.some(i => (i as any)?.key === location.pathname)
  ? location.pathname
  : '/'

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <Space size={12} align="center">
          <img
            src={logo}
            alt="Guild Logo"
            width={60}
            height={60}
            className="brand-glow"
            style={{ borderRadius: 10, objectFit: 'cover', marginTop: '24px' }}
          />
          {!isMobile && (
                <div style={{ lineHeight: 1.1 }}>
                    <Title level={4} style={{ margin: 0 }}>Anomaly</Title>
                </div>
            )}
        </Space>

        <div style={{ flex: 1 }} />

        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[selectedKey]}
          items={items}
          style={{
            minWidth: 220,
            background: 'transparent',
            borderBottom: 'none'
          }}
        />
      </Header>

      <Content style={{ padding: '28px 18px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>{children}</div>
      </Content>

      <Footer style={{ textAlign: 'center', background: 'transparent', color: 'rgba(255,255,255,0.45)' }}>
        © {new Date().getFullYear()} Guild — Anomalia
      </Footer>
    </Layout>
  )
}