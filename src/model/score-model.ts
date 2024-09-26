import { HIDDEN_VALUE, type primaryType } from '@/constants'

export class ScoreModel {
  constructor(
    public critOp: [number, number, number] = [0, 0, 0],
    public kills: number = 0,
    public tacOp: [number, number, number] = [0, 0, 0],
    public primary: primaryType = HIDDEN_VALUE
  ) {}

  get totalCritOp(): number {
    return this.critOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalTacOp(): number {
    return this.tacOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalKillOp(): number {
    return this.kills // TODO: update
  }

  get primaryPlus(): number {
    switch (this.primary) {
      case 'Crit Op':
        return Math.ceil(this.totalCritOp / 2)
      case 'Kill Op':
        return Math.ceil(this.totalKillOp / 2)
      case 'Tac Op':
        return Math.ceil(this.totalTacOp / 2)
      default:
        // If primary is 'hidden' or any other value, no score is modified
        return 0
    }
  }

  get totalScore(): number {
    return this.totalCritOp + this.totalTacOp + this.totalKillOp + this.primaryPlus
  }
}
