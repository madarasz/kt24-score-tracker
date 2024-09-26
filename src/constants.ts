export const tacOps = [
  {
    name: 'Recon',
    ops: ['Confirm Kill', 'Recover Items', 'Plant Beacons']
  },
  {
    name: 'Seek & Destroy',
    ops: ['Overrun', 'Storm Objectives', 'Champion']
  },
  {
    name: 'Security',
    ops: ['Contain', 'Take Ground', 'Secure Center']
  },
  {
    name: 'Infiltration',
    ops: ['Surveillance', 'Implant', 'Wiretap']
  }
]

export const HIDDEN_VALUE = 'hidden'

export const primariesArray = ['Crit Op', 'Kill Op', 'Tac Op', HIDDEN_VALUE] as const
export type primaryType = (typeof primariesArray)[number]

interface teamData {
  name: string
  operativeCount: number
}
export const teams: teamData[] = [
  {
    name: 'Blooded',
    operativeCount: 14
  },
  {
    name: 'Brood Brothers',
    operativeCount: 13
  },
  {
    name: 'Corsair Voidscarred',
    operativeCount: 9
  },
  {
    name: 'Hernkyn Yaegir',
    operativeCount: 10
  }
]

export function range(x: number, y: number): number[] {
  return Array.from({ length: y - x + 1 }, (_, i) => x + i)
}
