import { Button, Card, Col, Form, Input, Row, Select, Typography, message } from 'antd'
import { useState } from 'react'

const { Title, Paragraph, Text } = Typography

type ApplyForm = {
  characterName: string
  realm: string
  faction: 'Horde' | 'Alliance'
  class: string
  role: 'Tank' | 'Healer' | 'DPS'
  raiderio?: string
  warcraftlogs?: string
  discord: string
  about: string

  // honeypot (anti-bot)
  website?: string
}

const wowClasses = [
  'Death Knight', 'Demon Hunter', 'Druid', 'Evoker', 'Hunter', 'Mage',
  'Monk', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'
]

export default function Apply() {
  const [form] = Form.useForm<ApplyForm>()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (values: ApplyForm) => {
    // Honeypot: se bot preencher, bloqueia silenciosamente
    if (values.website && values.website.trim().length > 0) {
      message.error('Não foi possível enviar sua apply.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/.netlify/functions/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `Falha ao enviar apply (HTTP ${res.status})`)
      }

      message.success('Apply enviada! Te chamamos no Discord em breve.')
      form.resetFields()
    } catch (e: any) {
      message.error(e?.message || 'Não foi possível enviar sua apply.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Title level={2} style={{ marginTop: 0 }}>Apply</Title>
      <Paragraph type="secondary" style={{ marginTop: 0 }}>
        Preencha pra gente avaliar teu perfil e te chamar no Discord.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card>
            <Form form={form} layout="vertical" onFinish={onSubmit}>
              {/* Honeypot hidden field */}
              <Form.Item name="website" style={{ display: 'none' }}>
                <Input autoComplete="off" tabIndex={-1} />
              </Form.Item>

              <Row gutter={12}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="characterName"
                    label="Nome do personagem"
                    rules={[{ required: true, message: 'Informe o nome do personagem' }]}
                  >
                    <Input placeholder="Ex: Arcanus" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="realm"
                    label="Realm"
                    rules={[{ required: true, message: 'Informe o realm' }]}
                  >
                    <Input placeholder="Ex: Azralon" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="faction"
                    label="Facção"
                    rules={[{ required: true, message: 'Selecione a facção' }]}
                  >
                    <Select
                      placeholder="Selecione"
                      options={[
                        { value: 'Horde', label: 'Horde' },
                        { value: 'Alliance', label: 'Alliance' }
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="class"
                    label="Classe"
                    rules={[{ required: true, message: 'Selecione a classe' }]}
                  >
                    <Select
                      showSearch
                      placeholder="Selecione"
                      options={wowClasses.map(c => ({ value: c, label: c }))}
                      optionFilterProp="label"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: 'Selecione a role' }]}
                  >
                    <Select
                      placeholder="Selecione"
                      options={[
                        { value: 'Tank', label: 'Tank' },
                        { value: 'Healer', label: 'Healer' },
                        { value: 'DPS', label: 'DPS' }
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="discord"
                    label="Discord"
                    rules={[
                      { required: true, message: 'Informe teu Discord' },
                      { min: 3, message: 'Discord inválido' }
                    ]}
                  >
                    <Input placeholder="Ex: @nick ou nick#0000" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item name="raiderio" label="Raider.IO (opcional)">
                    <Input placeholder="Link do perfil" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item name="warcraftlogs" label="WarcraftLogs (opcional)">
                    <Input placeholder="Link do perfil" />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="about"
                    label="Conta um pouco sobre você"
                    rules={[{ required: true, message: 'Fale um pouco sobre você' }]}
                  >
                    <Input.TextArea
                      rows={5}
                      placeholder="Experiência, objetivos (M+, Raid), disponibilidade, etc."
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Button type="primary" htmlType="submit" block loading={submitting} disabled={submitting}>
                Enviar Apply
              </Button>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>O que avaliamos</Title>
            <ul style={{ marginTop: 0, paddingLeft: 18 }}>
              <li><Text>Disponibilidade (Raid/M+)</Text></li>
              <li><Text>Experiência e histórico</Text></li>
              <li><Text>Compromisso e comunicação</Text></li>
              <li><Text>Fit com o time</Text></li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  )
}