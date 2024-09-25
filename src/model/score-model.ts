import { HIDDEN_VALUE } from '@/constants'

export type primaryType = 'Crit Op' | 'Kill Op' | 'Tac Op' | typeof HIDDEN_VALUE

export class ScoreModel {
  constructor(
    public critOp: [number, number, number] = [0, 0, 0],
    public killOp: number = 0,
    public tacOp: [number, number, number] = [0, 0, 0],
    public primary: primaryType = HIDDEN_VALUE
  ) {}

  get totalCritOp(): number {
    return this.critOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalTacOp(): number {
    return this.tacOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalScore(): number {
    let total = this.totalCritOp + this.totalTacOp + this.killOp
    switch (this.primary) {
      case 'Crit Op':
        total += Math.ceil(this.totalCritOp / 2)
        break
      case 'Kill Op':
        total += Math.ceil(this.killOp / 2)
        break
      case 'Tac Op':
        total += Math.ceil(this.totalTacOp / 2)
        break
      default:
        // If primary is 'hidden' or any other value, no score is modified
        break
    }
    return total
  }
}
