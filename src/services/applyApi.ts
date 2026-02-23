export type ApplyForm = {
    characterName: string
    realm: string
    faction: 'Horde' | 'Alliance'
    class: string
    role: 'Tank' | 'Healer' | 'DPS'
    raiderio?: string
    warcraftlogs?: string
    discord: string
    about: string
  }
  
  export async function submitApply(payload: ApplyForm) {
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(text || 'Falha ao enviar apply')
    }
  
    return res.json().catch(() => ({}))
  }