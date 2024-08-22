<script setup>
import ConfettiExplosion from "vue-confetti-explosion";
import TitleHeader from './Header.vue'
const props = defineProps({
    winnerName: String,
})

</script>

<template>
    <span>
        <div v-if="winnerName" class="WinnerAlert">
            🎉 {{ winnerName }} wins! 🎉
            <ConfettiExplosion />
        </div>
        <div v-else class="WinnerWait">
            Cricket ScoreBoard
        </div>
    </span>
</template>

<style scoped>
.WinnerAlert {
    display: grid;
    padding: 20px;
    background-color: #4CAF50;
    place-content: center;
    place-self: center;
    color: white;
    text-align: center;
    font-size: 3rem;
    margin-top: 20px;
    border-start-start-radius: 5vw;
    border-start-end-radius: 5vw;
}

.WinnerWait {
    display: grid;
    padding: 20px;
    background-color: #247BA0;
    place-content: center;
    place-self: center;
    color: white;
    text-align: center;
    font-size: 3rem;
    margin-top: 20px;
    border-start-start-radius: 5vw;
    border-start-end-radius: 5vw;
}

@media (prefers-color-scheme: light) {
    .WinnerAlert {
        background-color: #94FBAB;
    }

    .WinnerWait {
        background-color: #B8D8BA;
        color: #0C120C;
    }
}
</style>