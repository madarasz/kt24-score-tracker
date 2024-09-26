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
      <select v-model="critOpTp2">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <select v-model="critOpTp3">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <select v-model="critOpTp4">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </div>
    <div>
      Tac Ops:{{ this.player.score.totalTacOp }}
      <select v-model="tacOpTp2">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <select v-model="tacOpTp3">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <select v-model="tacOpTp4">
        <option v-for="number in range(0, 2)" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
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
    critOpTp2: {
      get() {
        return this.playerStore.player.score.critOp[0]
      },
      set(value) {
        this.playerStore.updateCritOp(0, value)
      }
    },
    critOpTp3: {
      get() {
        return this.playerStore.player.score.critOp[1]
      },
      set(value) {
        this.playerStore.updateCritOp(1, value)
      }
    },
    critOpTp4: {
      get() {
        return this.playerStore.player.score.critOp[2]
      },
      set(value) {
        this.playerStore.updateCritOp(2, value)
      }
    },
    tacOpTp2: {
      get() {
        return this.playerStore.player.score.tacOp[0]
      },
      set(value) {
        this.playerStore.updateTacOp(0, value)
      }
    },
    tacOpTp3: {
      get() {
        return this.playerStore.player.score.tacOp[1]
      },
      set(value) {
        this.playerStore.updateTacOp(1, value)
      }
    },
    tacOpTp4: {
      get() {
        return this.playerStore.player.score.tacOp[2]
      },
      set(value) {
        this.playerStore.updateTacOp(2, value)
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
