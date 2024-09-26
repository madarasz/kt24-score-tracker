import { defineStore } from 'pinia'
import { PlayerModel } from '@/model/player-model'
import { type primaryType } from '@/constants'

export const usePlayerStore = (id: string) =>
  defineStore(id, {
    state: () => ({
      player: new PlayerModel()
    }),
    actions: {
      updateCritOp(index: number, score: number) {
        this.player.score.critOp[index] = score
      },
      updateKills(score: number) {
        this.player.score.kills = score
      },
      updateTacOp(index: number, score: number) {
        this.player.score.tacOp[index] = score
      },
      updateCp(diff: number) {
        let newCp = this.player.cp + diff
        if (newCp < 0) newCp = 0
        this.player.cp = newCp
      },
      setPrimary(primary: primaryType) {
        this.player.score.primary = primary
      },
      setTacop(mission: string) {
        this.player.tacOpMission = mission
      },
      setName(name: string) {
        this.player.name = name
      },
      setFaction(faction: string) {
        this.player.faction = faction
      },
      setOperativeCount(count: number) {
        this.player.operativeCount = count
      }
    }
  })()
