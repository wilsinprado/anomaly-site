import { Card, Col, Row, Timeline, Typography, Tag } from 'antd'

const { Title, Paragraph, Text } = Typography

type RaidDay = {
  day: string
  start: string
  end: string
  notes?: string
}

const raidSchedule: RaidDay[] = [
  { day: 'Terça', start: '21:00', end: '00:00', notes: 'Raid Mítica (progress)' },
  { day: 'Quarta', start: '21:00', end: '00:00', notes: 'Raid Mítica (progress)' }
]

export default function Horarios() {
  return (
    <>
      <Title level={2} style={{ marginTop: 0 }}>Horários</Title>
      <Paragraph type="secondary" style={{ marginTop: 0 }}>
        Agenda oficial da <Text strong>Anomaly</Text> — foco em Raid Mítica.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Raid Schedule</Title>

            <Timeline
              items={raidSchedule.map(r => ({
                children: (
                  <div>
                    <Text strong>{r.day}</Text> <Tag color="purple">{r.start} - {r.end}</Tag>
                    <div style={{ marginTop: 4 }}>
                      <Text type="secondary">{r.notes || '-'}</Text>
                    </div>
                  </div>
                )
              }))}
            />

            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              *Horários podem ser ajustados por tier/patch — sempre confirmamos no Discord.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Regras de presença</Title>
            <ul style={{ marginTop: 0, paddingLeft: 18 }}>
              <li><Text>Check-in no Discord (ou aviso de ausência)</Text></li>
              <li><Text>Consumíveis / encantos / gems em dia</Text></li>
              <li><Text>Logs ativos (WCL) pra review</Text></li>
            </ul>

            <Title level={4} style={{ marginTop: 18 }}>Extras</Title>
            <Paragraph style={{ marginBottom: 0 }}>
              <Tag color="purple">Mythic+</Tag> rola fora do horário de raid e em grupos variados.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  )
}