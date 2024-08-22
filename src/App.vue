<script setup>
import ScoreBoard from './components/ScoreBoard.vue'

</script>

<template>
  <div>
    <ScoreBoard />
  </div>
</template>

<style scoped>
div {
  height: 100%;
  width: 100%;
  justify-items: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
