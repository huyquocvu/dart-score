<script setup>
import ConfettiExplosion from "vue-confetti-explosion";
import TitleHeader from './Header.vue'
const props = defineProps({
    winnerName: String,
})

</script>

<template>
        <div v-if="winnerName" class="Title Alert">
            <p>
                🎉 {{ winnerName }} wins! 🎉
            </p>
            <div>
                <ConfettiExplosion />
            </div>
        </div>
        <div v-else class="Title Wait">
            <p>
                Cricket ScoreBoard
            </p>
        </div>
</template>

<style scoped>
.Title {
    /* place-content: center; */
    /* place-self:center; */
    color: white;
    text-align: center;
    font-size: 4ch;
    border-start-start-radius: 5vw;
    border-start-end-radius: 5vw;
    width: 100%;
    height: 6vh;
}

.Alert {
    background-color: #4CAF50;
}

.Wait {
    background-color: #247BA0;
}

@media (prefers-color-scheme: light) {
    .Alert {
        background-color: #94FBAB;
    }

    .Wait {
        background-color: #B8D8BA;
        color: #0C120C;
    }
}
</style>