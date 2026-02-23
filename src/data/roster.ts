export type Faction = 'Alliance' | 'Horde'
export type Role = 'Tank' | 'Healer' | 'DPS'

export type RosterMember = {
  name: string
  realm?: string
  faction: Faction
  className: string
  role: Role
  spec?: string
  raiderio?: string
  warcraftlogs?: string
  notes?: string
}

export const roster: RosterMember[] = [
  {
    name: 'Xuaistaiguer',
    realm: 'Azralon',
    faction: 'Horde',
    className: 'Warrior',
    role: 'DPS',
    spec: 'Fury',
    raiderio: 'https://raider.io/characters/us/azralon/Xuaistaiger',
    warcraftlogs: 'https://www.warcraftlogs.com/character/us/azralon/xuaistaiger'
  }
]