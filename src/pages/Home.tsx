import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getGuildProgress } from '../services/raiderio'
import logo from '../assets/guild-logo.jpg'
import { ProgressTypes } from 'antd/es/progress/progress'

const { Title, Paragraph, Text } = Typography


type ProgressState = any

// const RAID_SLUG = 'latest' // vamos ajustar abaixo

export default function Home() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState<ProgressState>({ status: 'loading' })

    useEffect(() => {
        let alive = true
        getGuildProgress()
            .then((data) => alive && setProgress({ status: 'success', data }))
            .catch(() => alive && setProgress({ status: 'error', data: 'Erro' }))
        return () => { alive = false }
    }, [])
    const raid = progress.data?.raid_progression?.['manaforge-omega']


  return (
    <div>
      {/* HERO */}
      <Card
        style={{
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.10)',
          background:
            'radial-gradient(900px 420px at 20% 10%, rgba(123, 44, 255, 0.30), transparent 55%),' +
            'radial-gradient(700px 380px at 90% 30%, rgba(123, 44, 255, 0.18), transparent 55%),' +
            '#0f0f18'
        }}
        bodyStyle={{ padding: 24 }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} lg={16}>
            <Space direction="vertical" size={10} style={{ width: '100%' }}>
              <Space wrap size={8}>
                <Tag color="purple">Cross-faction</Tag>
                <Tag color="purple">Mythic Raid</Tag>
                <Tag color="purple">Progression</Tag>
              </Space>

              <Title level={1} style={{ margin: 0, lineHeight: 1.1 }}>
                Anomaly
              </Title>

              <Paragraph style={{ margin: 0, fontSize: 16, color: 'rgba(255,255,255,0.78)' }}>
                Guild focada em <Text strong>Raid Mítica</Text>, com cultura de evolução contínua,
                comunicação clara e ambiente leve — <Text strong>Alliance + Horde</Text>.
              </Paragraph>

              <Space wrap size={10} style={{ marginTop: 6 }}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => navigate('/apply')}
                >
                  Apply Now
                </Button>

                <Button size="large" onClick={() => navigate('/roster')}>
                  Ver Roster
                </Button>
              </Space>

              <Text type="secondary">
                *Apply cai direto no nosso Discord. Resposta rápida por lá.
              </Text>
            </Space>
          </Col>

          <Col xs={24} lg={8} style={{ textAlign: 'right' }}>
            <img
              src={logo}
              alt="Anomaly"
              className="brand-glow"
              style={{
                width: 160,
                height: 160,
                borderRadius: 18,
                objectFit: 'cover',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            />
          </Col>
        </Row>
      </Card>

      {/* HIGHLIGHTS */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Progress</Title>
            <Paragraph style={{ marginBottom: 6 }}>
                {raid?.summary && (
                    <>
                        <Text strong>{raid.summary}</Text>{' '}
                        <Text type="secondary">Manaforge Omega</Text>
                    </>
                )}
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Horários</Title>
            <Paragraph style={{ marginBottom: 6 }}>
              <Text strong>Ter/Qua • 21:00–00:00</Text>
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Recruiting</Title>
            {/* <Paragraph style={{ marginBottom: 6 }}>
              <Tag color="purple">Healer</Tag> <Tag color="purple">Ranged DPS</Tag>
            </Paragraph> */}
            <Text type="secondary">
              Não estamos recrutando no momento
            </Text>
          </Card>
        </Col>
      </Row>

      {/* SEÇÃO "POR QUE A ANOMALY" */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Cultura</Title>
            <Text type="secondary">
              Ambiente leve, sem ego, com responsabilidade. Foco em consistência e evolução.
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Progress</Title>
            <Text type="secondary">
              Review de fights, logs e ajustes objetivos. Melhorar toda semana.
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Comunicação</Title>
            <Text type="secondary">
              Call limpa no Discord, preparação antes da raid e alinhamento claro de estratégia.
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  )
}