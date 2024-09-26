import { HIDDEN_VALUE } from '@/constants'
import { ScoreModel } from './score-model'

export class PlayerModel {
  constructor(
    public score: ScoreModel = new ScoreModel(),
    public cp: number = 3,
    public tacOpMission: string = HIDDEN_VALUE,
    public name: string = 'Player',
    public faction: string = 'Unknown',
    public operativeCount: number = 10
  ) {}
}
