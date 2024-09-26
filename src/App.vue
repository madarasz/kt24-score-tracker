<template>
  <main>
    <PlayerScore :player="player1.player" player-id="player1" />
    <PlayerScore :player="player2.player" player-id="player2" />
  </main>
</template>

<script setup lang="ts">
import PlayerScore from './components/PlayerScore.vue'
import { usePlayerStore } from '@/stores/player-store'
const player1 = usePlayerStore('player1')
const player2 = usePlayerStore('player2')
</script>

<style scoped></style>
