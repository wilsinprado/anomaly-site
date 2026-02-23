export async function handler() {
    const headers = {
      'Content-Type': 'application/json',
      // cache no CDN por 10 min (ajuda a não martelar o Raider.IO)
      'Cache-Control': 'public, max-age=0, s-maxage=600'
    }
  
    const region = 'us'
    const realm = 'azralon'
    const guildName = 'Anomaly'
  
    if (!region || !realm || !guildName) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Missing env vars: RIO_REGION, RIO_REALM, RIO_GUILD_NAME' })
      }
    }
  
    const params = new URLSearchParams({
      region,
      realm,
      name: guildName,
      fields: 'raid_progression,raid_rankings'
    })
  
    const url = `https://raider.io/api/v1/guilds/profile?${params.toString()}`
  
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'AnomalyGuildSite/1.0 (Netlify Function)'
        }
      })
  
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        return { statusCode: 502, headers, body: JSON.stringify({ error: 'Raider.IO error', details: text }) }
      }
  
      const data = await res.json()
  
      // `raid_progression` normalmente vem como um map com raids e dificuldades
      // Exemplo típico: data.raid_progression[raidSlug].mythic_bosses_killed / total_bosses
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
      }
    } catch (e) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error' }) }
    }
  }