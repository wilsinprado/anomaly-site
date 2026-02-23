export async function getGuildProgress() {
    const res = await fetch('/api/progress')
    if (!res.ok) throw new Error('Falha ao carregar progress da guild')
    return res.json()
  }