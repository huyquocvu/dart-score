<script setup>
import { ref } from 'vue'
import PlayerScore from './PlayerScore.vue'
import ScoreBanner from './ScoreBanner.vue'
import Reset from './ResetButton.vue';
import Winner from './Winner.vue'

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const reset = ref(false)
var winner = ref('')

const handleGameStart = () => {
    // Start game when both players have been entered
}

const handleResetScores = () => {
    reset.value = true;
    winner.value = '';

    // Reset the reset value after a short delay to ensure it can be triggered again
    setTimeout(() => {
        reset.value = false;
    }, 0);
}

// Handle when a player wins
const handleWin = (playerName) => {
    winner.value = playerName;
}

const p1 = ref('Player 1')
const p2 = ref('Player 2')

</script>

<template>
    <div class="main">
        <Winner :winnerName="winner" />
        <div class="ScoreBoard">
            <PlayerScore v-model:playerName="p1" :reset="reset" :onWin="handleWin" @updateName="handleNameChange" />
            <ScoreBanner />
            <PlayerScore v-model:playerName="p2" :reset="reset" :onWin="handleWin" @updateName="handleNameChange" />
        </div>
        <Reset @resetScores="handleResetScores" />
    </div>
</template>

<style scoped>

.main {
    min-width: 500px;
    align-items: center;
    justify-content: center;
    /* margin: 1rem; */
}
.ScoreBoard {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 100%;
}
</style>