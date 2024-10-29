<template>
  <div class="container">
    <div>
      Name: {{ this.player.name }}
      Operative Count:
      <select v-model="operativeCount">
        <option v-for="number in range(5, 14)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </div>
    <div>
      Crit Ops: {{ this.player.score.totalCritOp }}
      <div v-for="(critOp, index) in [0, 1, 2]" :key="'critOp' + index">
        <select v-model="critOpValues[index]">
          <option v-for="number in range(0, 2)" :key="number" :value="number">
            {{ number }}
          </option>
        </select>
      </div>
    </div>
    <div>
      Tac Ops:{{ this.player.score.totalTacOp }}
      <div v-for="(tacOp, index) in [0, 1, 2]" :key="'tacOp' + index">
        <select v-model="tacOpValues[index]">
          <option v-for="number in range(0, 2)" :key="number" :value="number">
            {{ number }}
          </option>
        </select>
      </div>
    </div>
    <div>
      Kill Ops: {{ this.player.score.totalKillOp }}
      Kills:
      <select v-model="kills">
        <option v-for="number in range(0, 14)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </div>
    <div>
      primary:
      <select v-model="primary">
        <option v-for="pri in this.primariesArray" :key="pri" :value="pri">
          {{ pri }}
        </option>
      </select>
    </div>
    <div>TOTAL: {{ this.player.score.totalScore }}</div>
  </div>
</template>
<script>
import { PlayerModel } from '@/model/player-model'
import { usePlayerStore } from '@/stores/player-store'
import { primariesArray } from '@/constants'

export default {
  name: 'PlayerScore',
  props: {
    player: {
      type: PlayerModel,
      required: true
    },
    playerId: {
      type: String,
      required: true
    },
    enemyOperativeCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      primariesArray: primariesArray
    }
  },
  computed: {
    playerStore() {
      return usePlayerStore(this.playerId)
    },
    primary: {
      get() {
        return this.playerStore.player.score.primary
      },
      set(value) {
        this.playerStore.setPrimary(value)
      }
    },
    operativeCount: {
      get() {
        return this.playerStore.player.operativeCount
      },
      set(value) {
        this.playerStore.setOperativeCount(value)
      }
    },
    critOpValues: {
      get() {
        return this.playerStore.player.score.critOp
      },
      set(values) {
        values.forEach((value, index) => {
          this.playerStore.updateCritOp(index, value)
        })
      }
    },
    tacOpValues: {
      get() {
        return this.playerStore.player.score.tacOp
      },
      set(values) {
        values.forEach((value, index) => {
          this.playerStore.updateTacOp(index, value)
        })
      }
    },
    kills: {
      get() {
        return this.playerStore.player.score.kills
      },
      set(value) {
        this.playerStore.updateKills(value)
      }
    }
  },
  methods: {
    range(x, y) {
      return Array.from({ length: y - x + 1 }, (_, i) => x + i)
    }
  }
}
</script>
<style scoped>
.container {
  display: grid;
}
</style>
