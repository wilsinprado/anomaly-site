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

const REALM = 'Azralon'
const FACTION: Faction = 'Horde'

export const roster: RosterMember[] = [
  // Group 1
  { name: 'Hidrax', realm: REALM, faction: FACTION, className: 'Monk', role: 'Tank', spec: 'Brewmaster', notes: 'Group 1' },
  { name: 'Jojo', realm: REALM, faction: FACTION, className: 'Warrior', role: 'Tank', spec: 'Protection', notes: 'Group 1' },
  { name: 'Soretz', realm: REALM, faction: FACTION, className: 'Paladin', role: 'Healer', spec: 'Holy', notes: 'Group 1' },
  { name: 'Riesa', realm: REALM, faction: FACTION, className: 'Paladin', role: 'Healer', spec: 'Holy', notes: 'Group 1' },
  { name: 'Zhran', realm: REALM, faction: FACTION, className: 'Evoker', role: 'Healer', spec: 'Preservation', notes: 'Group 1' },

  // Group 2
  { name: 'Kvx', realm: REALM, faction: FACTION, className: 'Druid', role: 'Healer', spec: 'Restoration', notes: 'Group 2' },
  { name: 'Cris', realm: REALM, faction: FACTION, className: 'Priest', role: 'Healer', spec: 'Discipline', notes: 'Group 2' },
  { name: 'Eryon', realm: REALM, faction: FACTION, className: 'Monk', role: 'Healer', spec: 'Mistweaver', notes: 'Group 2' },
  { name: 'Bira', realm: REALM, faction: FACTION, className: 'Evoker', role: 'DPS', spec: 'Augmentation', notes: 'Group 2' },
  { name: 'Dragonquel', realm: REALM, faction: FACTION, className: 'Evoker', role: 'DPS', spec: 'Augmentation', notes: 'Group 2' },

  // Group 3
  { name: 'Exu', realm: REALM, faction: FACTION, className: 'Shaman', role: 'DPS', spec: 'Elemental', notes: 'Group 3' },
  { name: 'Jeff', realm: REALM, faction: FACTION, className: 'Shaman', role: 'DPS', spec: 'Enhancement', notes: 'Group 3' },
  { name: 'Grilo', realm: REALM, faction: FACTION, className: 'Shaman', role: 'DPS', spec: 'Enhancement', notes: 'Group 3' },
  { name: 'Lego', realm: REALM, faction: FACTION, className: 'Warrior', role: 'DPS', spec: 'Fury', notes: 'Group 3' },
  { name: 'Ryda', realm: REALM, faction: FACTION, className: 'Warrior', role: 'DPS', spec: 'Fury', notes: 'Group 3' },

  // Group 4
  { name: 'Xalxa', realm: REALM, faction: FACTION, className: 'Warlock', role: 'DPS', spec: 'Demonology', notes: 'Group 4' },
  { name: 'Selfmade', realm: REALM, faction: FACTION, className: 'Warlock', role: 'DPS', spec: 'Demonology', notes: 'Group 4' },
  { name: 'Wizars', realm: REALM, faction: FACTION, className: 'Warlock', role: 'DPS', spec: 'Demonology', notes: 'Group 4' },
  { name: 'Guguinha', realm: REALM, faction: FACTION, className: 'Demon Hunter', role: 'DPS', spec: 'Devourer', notes: 'Group 4' },
  { name: 'Maik', realm: REALM, faction: FACTION, className: 'Demon Hunter', role: 'DPS', spec: 'Havoc', notes: 'Group 4' },

  // Group 5
  { name: 'Ada', realm: REALM, faction: FACTION, className: 'Death Knight', role: 'DPS', spec: 'Unholy', notes: 'Group 5' },
  { name: 'Meth', realm: REALM, faction: FACTION, className: 'Death Knight', role: 'DPS', spec: 'Unholy', notes: 'Group 5' },
  { name: 'Hark', realm: REALM, faction: FACTION, className: 'Druid', role: 'DPS', spec: 'Balance', notes: 'Group 5' },
  { name: 'Liu', realm: REALM, faction: FACTION, className: 'Priest', role: 'DPS', spec: 'Shadow', notes: 'Group 5' },
  { name: 'Veledar', realm: REALM, faction: FACTION, className: 'Hunter', role: 'DPS', spec: 'Marksmanship', notes: 'Group 5' },

  // Group 6
  { name: 'Malb', realm: REALM, faction: FACTION, className: 'Mage', role: 'DPS', spec: 'Arcane', notes: 'Group 6' },
  { name: 'Tabata', realm: REALM, faction: FACTION, className: 'Mage', role: 'DPS', spec: 'Arcane', notes: 'Group 6' },
  { name: 'Darkpirate', realm: REALM, faction: FACTION, className: 'Mage', role: 'DPS', spec: 'Arcane', notes: 'Group 6' },
  { name: 'Behindyou', realm: REALM, faction: FACTION, className: 'Rogue', role: 'DPS', spec: 'Subtlety', notes: 'Group 6' },
  { name: 'Xzg', realm: REALM, faction: FACTION, className: 'Rogue', role: 'DPS', spec: 'Outlaw', notes: 'Group 6' }
]
