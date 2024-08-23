<script setup>

const scores = [20, 19, 18, 17, 16, 15, 'BE']

</script>

<template>
    <div class="ScoreBanner">
        <div class="header">
            <h2>Scores</h2>
        </div>
        <div class="scores">
            <div class="Cell" v-for="(item, index) in scores">
                <div class="Cell"><h1>{{ item }}</h1></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
}

.header {
    height: 100%;
    /* background-color: #612d2c; */
    background-image: linear-gradient(#247ba0, #605F5E);
}
.ScoreBanner {
    display: grid;
    border-color: rgb(9, 255, 0);
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    background-color: #605F5E;
    height: 100%;
    padding-bottom:0.6vh;
    /* margin-bottom: 11px; */
    /* background: linear-gradient(320deg, rgba(66,122,158,1) 0%, rgba(98,94,111,1) 23%, rgba(147,50,37,1) 100%); */
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
    /* font-size: 2rem; */
    text-align: center;
}

.scores {
    border-color: greenyellow;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    /* gap: 2vh; */
    row-gap: 2vh;
}

@media (prefers-color-scheme: light) {
    .ScoreBanner {
        background-color: #82ABA1;
    }
    .header {
        background-image: linear-gradient(#b8d8ba, #82ABA1);
    }
}

.ScoreBannerText {
    font-size: 5em;
}
</style>