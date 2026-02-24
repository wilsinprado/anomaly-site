export async function handler(event) {
    // CORS (se seu front e função estiverem no MESMO domínio netlify, normalmente ok)
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }

    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 204, headers, body: '' }
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers, body: 'Method not allowed' }
    }

    let body
    try {
      body = JSON.parse(event.body || '{}')
      if (body.website && String(body.website).trim().length > 0) {
        return { statusCode: 400, headers, body: 'Bot detected' }
      }
    } catch {
      return { statusCode: 400, headers, body: 'Invalid JSON' }
    }

    const required = ['characterName', 'realm', 'faction', 'class', 'role', 'discord', 'about']
    const missing = required.filter((k) => !body?.[k])
    if (missing.length) {
      return { statusCode: 400, headers, body: `Missing fields: ${missing.join(', ')}` }
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!webhookUrl) {
      return { statusCode: 500, headers, body: 'Server misconfigured (missing webhook)' }
    }

    const embed = {
      title: '📩 Novo Apply — Anomaly',
      description: `**${body.characterName}** — ${body.class} (${body.role})`,
      color: 0x7B2CFF,
      fields: [
        { name: 'Realm', value: String(body.realm), inline: true },
        { name: 'Facção', value: String(body.faction), inline: true },
        { name: 'Discord', value: String(body.discord), inline: true },
        { name: 'Raider.IO', value: body.raiderio ? String(body.raiderio) : '-', inline: false },
        { name: 'WarcraftLogs', value: body.warcraftlogs ? String(body.warcraftlogs) : '-', inline: false },
        { name: 'Sobre', value: String(body.about).slice(0, 900), inline: false }
      ],
      footer: { text: 'Anomaly' }
    }

    const payload = {
      username: 'Anomaly Recruit Bot',
      embeds: [embed]
    }

    try {
      const r = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!r.ok) {
        return { statusCode: 502, headers, body: 'Discord error' }
      }

      return { statusCode: 200, headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true }) }
    } catch (err) {
      return { statusCode: 500, headers, body: 'Server error' }
    }
  }