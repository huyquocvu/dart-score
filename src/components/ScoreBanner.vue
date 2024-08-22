<script setup>

const scores = [20, 19, 18, 17, 16, 15, 'BE']

</script>

<template>
    <div class="ScoreBanner Column">
        <h1>Scores</h1>
        <div class="scores">
            <div class="Cell" v-for="(item, index) in scores">
                <div class="ScoreBannerText Cell">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
}

.ScoreBanner {
    display: grid;
    border-color: rgb(9, 255, 0);
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    background-color: #605F5E;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
}

.Cell {
    display: grid;
    place-self: center;
    place-content: center;
    place-items: center;
    width: 9vh;
    height: 9vh;
}

.scores {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 10px;
}

h1 {
    font-size: 2em;
    text-align: center;
}

@media (prefers-color-scheme: light) {
    .ScoreBanner {
        background-color: #82ABA1;
    }
}

.ScoreBannerText {
    font-size: 5em;
}
</style>