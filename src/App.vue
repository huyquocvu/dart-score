<script setup>
import TitleHeader from './components/Header.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import Confetti from './components/Winner.vue'

</script>

<template>
  <div>
    <ScoreBoard />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
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
