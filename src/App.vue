<template>
  <main>
    <PlayerScore
      :player="player1.player"
      player-id="player1"
      :enemy-operative-count="player2.player.operativeCount"
    />
    <PlayerScore
      :player="player2.player"
      player-id="player2"
      :enemy-operative-count="player1.player.operativeCount"
    />
  </main>
</template>

<script setup lang="ts">
import PlayerScore from './components/PlayerScore.vue'
import { usePlayerStore } from '@/stores/player-store'
const player1 = usePlayerStore('player1')
const player2 = usePlayerStore('player2')
</script>

<style scoped></style>
