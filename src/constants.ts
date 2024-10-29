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

export const killScoring: number[][] = [
  [0, 0, 0, 0, 0], // 0, should not be possible
  [0, 0, 0, 0, 0], // 1, should not be possible
  [0, 0, 0, 0, 0], // 2, should not be possible
  [0, 0, 0, 0, 0], // 3, should not be possible
  [0, 0, 0, 0, 0], // 4, should not be possible
  [1, 2, 3, 4, 5], // 5
  [1, 2, 4, 5, 6], // 6
  [1, 3, 4, 6, 7], // 7
  [2, 3, 5, 6, 8], // 8
  [2, 4, 5, 7, 9], // 9
  [2, 4, 6, 8, 10], // 10
  [2, 4, 7, 9, 11], // 11
  [2, 5, 7, 10, 12], // 12
  [3, 5, 8, 10, 13], // 13
  [3, 6, 8, 11, 14] // 14
]
