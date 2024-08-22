<script setup>
// Define the emit function using defineEmits
const emit = defineEmits(['resetScores'])

const handleReset = () => {
    emit('resetScores')
}

</script>

<template>
    <div class="ResetButton">
        <button @click="handleReset">
            <span>Reset Scores</span>
        </button>
    </div>
</template>

<style scoped>

div {
    grid-template-rows: 1fr;
    display: grid;
}

.ResetButton {
    height: 7vh;
}

button {
    border-bottom-left-radius: 5vw;
    border-bottom-right-radius: 5vw;
    border-color: #1D3461;
    border-width: 5px;
    background-color: #1F487E;
}

button:hover {
    border-color: #344566;
    background-color: #3e597e;
}

button:active {
    border-color: #515968;
    background-color: #053577;
}

span {
    align-items: center;
    align-self: center;
    font-size: 2em;
    font-weight: bold;
}

@media (prefers-color-scheme: light) {
    button {
        background-color: #E8AEB7;
    }
}
</style>