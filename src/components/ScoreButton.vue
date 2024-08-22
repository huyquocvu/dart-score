<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
    name: String | Number,
    reset: Boolean
})

const emit = defineEmits(['updateCount'])

const count = ref(0)

const handleClick = () => {
    count.value = (count.value + 1) % 4;
    emit('updateCount', count.value)
}

// Watch for reset prop to reset count
watch(() => props.reset, (newValue) => {
    if (newValue) {
        count.value=0;
        emit('updateCount', count.value)
    }
})

const hitImage = computed(() => {
    switch (count.value) {
        case 1:
            return '/dart-score/single.svg';
        case 2:
            return '/dart-score/double.svg';
        case 3:
            return '/dart-score/triple.svg';
        default:
            return '';
    }
})
</script>

<template>
    <button class="PlayerScoreButtonComponent Cell" @click="handleClick"> 
        <img class="Cell" v-if="hitImage" :src="hitImage" alt="Hit Indicator"/>
    </button>
</template>

<style scoped>
button {
    border-width: 1vw;
}
.Cell {
  display: grid;
  place-self: center;
  place-content: center;
  place-items: center;
  width: 11vh;
  height: 11vh;
}

@keyframes fade {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.2; }
}

.PlayerScoreButtonComponent {
  display: grid;
  background-color: transparent;
  border-radius: 100px;
  width: 1fr;
  height: 1fr;
}

.PlayerScoreButtonComponent:hover {
  background-color: #09ff00;
}
</style>