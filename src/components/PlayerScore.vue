<script setup>
import { ref } from 'vue'
import PlayerScoreButton from './ScoreButton.vue'


const props = defineProps({
    playerName: {
        type: String,
        default: "test"
    },
    reset: {
        type: Boolean,
        default: false
    },
    onWin: Function
})

const emit = defineEmits(['update:playerName']);

const isNameSubmitted = ref(false);

// Scores for the player
const scores = [20, 19, 18, 17, 16, 15, 'BE'];

// Track hit counts for each score
const hitCounts = ref(Array(scores.length).fill(0));

// Update hit count when a score button is clicked
const updateHitCount = (index, newCount) => {
    hitCounts.value[index] = newCount
    checkForWin()
}

// Check if the player has won
const checkForWin = () => {
    if (hitCounts.value.every(count => count >= 3)) {
        props.onWin(props.playerName)
    }
}

// Function to handle player name change
const handleNameChange = (event) => {
    emit('update:playerName', event.target.value)
}

// Function to handle submitting the name
const handleSubmit = () => {
    if (props.playerName.trim() !== '') {
        isNameSubmitted.value = true
    }
}
</script>

<template>
    <div class="PlayerScoreBanner">
        <!-- Input field to enter player name, shown only if the name has not been submitted -->
        <div class="header">
            <div v-if="!isNameSubmitted" class="submit">
                <input @input="handleNameChange" type="text" :placeholder="playerName" class="nameInput" />
                <button class="nameSubmit" @click="handleSubmit"><span>Enter</span></button>
            </div>
            <div v-else class="name">
                <h1>{{ playerName }}</h1>
            </div>
        </div>
        <!-- Use a key attribute to help Vue track elements -->
        <div class="scoreCard">
            <div class="Cell" v-for="(item, index) in scores" :key="index">
                <PlayerScoreButton class="Cell" :name="item" :reset="reset"
                    @updateCount="newCount => updateHitCount(index, newCount)" />
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    background-color: white;
    color: black;
    font-weight: bold;
}

.PlayerScoreBanner {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    background-color: #A22522;
    /* width: fit-content; */
    height: 100%;
    margin-bottom: 10px;
}

.header {
    display: grid;
    place-items: center;
    place-content: center;
    /* width: fit-content; */
    height: 100%;
    /* background-color: #612d2c; */
    background-image: linear-gradient(#247ba0, #a22522);
    
}

.scoreCard {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: 100%;
    /* Adjust this to match ScoreBanner layout */
    gap: 2vh;
    /* Adjust spacing between score cells */
    justify-items: center;
    background: #A22522;
}

.submit {
    display: flex;
    /* padding: 10px; */
    /* margin-top: 2vh; */
}

.name {
    display: flex;
    place-items: center;
    place-content: center;
}

.nameInput {
    width: 20vw;
    /* padding: 1vh; */
    font-size: 1em;
    align-content: center;
    align-items: center;
    border-start-start-radius: 2vw;
    border-bottom-left-radius: 0.8vw;
}

.nameSubmit {
    width: 100%;
    font-size: 1em;
    border-top-right-radius: 0.8vw;
    border-end-end-radius: 2vw;
}

.Cell {
    display: grid;
    place-self: center;
    place-content: center;
    place-items: center;
    width: 9vh;
    height: 9vh;
}

h1 {
    font-size: 2.3em;
    font-style: italic;
    text-align: center;
}

@media (prefers-color-scheme: light) {
    .PlayerScoreBanner {
        background-color: #B8E1FF;
    }

    .scoreCard {
        background-color: #b8e1ff;
    }

    .header {
        background-image: linear-gradient(#b8d8ba, #b8e1ff);
    }
}
</style>