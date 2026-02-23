import { Card, Input, Select, Space, Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useMemo, useState } from 'react'
import { roster, type RosterMember, type Faction, type Role } from '../data/roster'

const { Title, Paragraph, Text } = Typography

export default function Roster() {
  const [q, setQ] = useState('')
  const [faction, setFaction] = useState<Faction | 'all'>('all')
  const [role, setRole] = useState<Role | 'all'>('all')

  const data = useMemo(() => {
    const query = q.trim().toLowerCase()
    return roster.filter(m => {
      const matchesQ =
        !query ||
        m.name.toLowerCase().includes(query) ||
        (m.className?.toLowerCase().includes(query)) ||
        (m.spec?.toLowerCase().includes(query))
      const matchesFaction = faction === 'all' || m.faction === faction
      const matchesRole = role === 'all' || m.role === role
      return matchesQ && matchesFaction && matchesRole
    })
  }, [q, faction, role])

  const columns: ColumnsType<RosterMember> = [
    {
      title: 'Player',
      dataIndex: 'name',
      render: (_, m) => (
        <Space direction="vertical" size={0}>
          <Text strong>{m.name}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>{m.realm || '-'}</Text>
        </Space>
      )
    },
    {
      title: 'Facção',
      dataIndex: 'faction',
      width: 120,
      render: (v: Faction) => (
        <Tag color="purple">{v}</Tag>
      )
    },
    {
      title: 'Classe / Spec',
      dataIndex: 'className',
      render: (_, m) => (
        <Space direction="vertical" size={0}>
          <Text>{m.className}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>{m.spec || '-'}</Text>
        </Space>
      )
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 110,
      render: (v: Role) => <Tag color="purple">{v}</Tag>
    },
    {
      title: 'Links',
      key: 'links',
      render: (_, m) => (
        <Space>
          {m.raiderio && <a href={m.raiderio} target="_blank" rel="noreferrer">Raider.IO</a>}
          {m.warcraftlogs && <a href={m.warcraftlogs} target="_blank" rel="noreferrer">Warcraft Logs</a>}
        </Space>
      )
    }
  ]

  return (
    <>
      <Title level={2} style={{ marginTop: 0 }}>Roster</Title>
      <Paragraph type="secondary" style={{ marginTop: 0 }}>
        Roster da <Text strong>Anomaly</Text> (Alliance + Horde) — foco em Raid Mítica.
      </Paragraph>

      <Card style={{ marginBottom: 16 }}>
        <Space wrap>
          <Input
            placeholder="Buscar player, classe ou spec"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ width: 260 }}
          />
          <Select
            value={faction}
            onChange={setFaction}
            style={{ width: 160 }}
            options={[
              { value: 'all', label: 'Todas facções' },
              { value: 'Alliance', label: 'Alliance' },
              { value: 'Horde', label: 'Horde' }
            ]}
          />
          <Select
            value={role}
            onChange={setRole}
            style={{ width: 140 }}
            options={[
              { value: 'all', label: 'Todas roles' },
              { value: 'Tank', label: 'Tank' },
              { value: 'Healer', label: 'Healer' },
              { value: 'DPS', label: 'DPS' }
            ]}
          />
        </Space>
      </Card>

      <Card>
        <Table
          rowKey={(m) => `${m.name}-${m.className}-${m.role}`}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </>
  )
}