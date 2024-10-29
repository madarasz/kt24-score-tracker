import { HIDDEN_VALUE, killScoring, type primaryType } from '@/constants'

export class ScoreModel {
  constructor(
    public critOp: [number, number, number] = [0, 0, 0],
    public kills: number = 0,
    public tacOp: [number, number, number] = [0, 0, 0],
    public primary: primaryType = HIDDEN_VALUE,
    public enemyOperativeCount: number = 10,
    public enemyKillOp: number = 0
  ) {}

  get totalCritOp(): number {
    return this.critOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalTacOp(): number {
    return this.tacOp.reduce((acc, curr) => acc + curr, 0)
  }

  get totalKillOp(): number {
    const scoring: number[] = killScoring[this.enemyOperativeCount]
    console.log('array', scoring, this.kills)
    for (let i = 0; i < 5; i++) {
      if (scoring[i] >= this.kills && (scoring[i + 1] < this.kills || i == 5)) return i + 1
    }
    console.log('fail')
    return 0 // error handling
  }

  get killOpPlus(): number {
    if (this.totalKillOp > this.enemyKillOp) return 1
    return 0
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
    return (
      this.totalCritOp + this.totalTacOp + this.totalKillOp + this.primaryPlus + this.killOpPlus
    )
  }
}
