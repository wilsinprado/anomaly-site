import { Card, Col, Row, Tag, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

export default function Sobre() {
  return (
    <>
      <Title level={2} style={{ marginTop: 0 }}>Sobre a Anomaly</Title>
      <Paragraph type="secondary" style={{ marginTop: 0 }}>
        Guild cross-faction (Alliance + Horde) com foco em progressão de Raid Mítica.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Foco</Title>
            <Paragraph style={{ marginBottom: 10 }}>
              Progressão consistente, comunicação clara e um ambiente leve — sem abrir mão da performance.
            </Paragraph>

            <Title level={4} style={{ marginTop: 18 }}>O que fazemos</Title>
            <div style={{ marginBottom: 12 }}>
              <Tag color="purple">Mythic Raid</Tag>
              <Tag color="purple">Progress</Tag>
              <Tag color="purple">Logs & Review</Tag>
              <Tag color="purple">Mythic+</Tag>
            </div>

            <Title level={4} style={{ marginTop: 18 }}>Regras rápidas</Title>
            <ul style={{ marginTop: 0, paddingLeft: 18 }}>
              <li><Text>Respeito acima de tudo</Text></li>
              <li><Text>Compromisso com horários (raiders)</Text></li>
              <li><Text>Aprendizado contínuo (review de fights/logs)</Text></li>
            </ul>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>Dual-faction</Title>
            <Paragraph style={{ marginBottom: 0 }}>
              A Anomaly joga com membros de <Text strong>Alliance</Text> e <Text strong>Horde</Text>.
            </Paragraph>
            <Paragraph type="secondary" style={{ marginTop: 8 }}>
              O apply te direciona pro fluxo certo dentro do Discord.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  )
}