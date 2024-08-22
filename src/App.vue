<script setup>
import ScoreBoard from './components/ScoreBoard.vue'
import Footnote from './components/Footer.vue'
</script>

<template>
  <div >
    <ScoreBoard />
    <Footnote />
  </div>
</template>

<style scoped>
.main {
  justify-items: center;
  height: 100%;
  width: 100%;
}
</style>
