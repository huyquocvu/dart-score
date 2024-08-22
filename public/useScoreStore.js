import { reactive } from 'vue';

export const useScoreStore = () => {
  const scores = reactive({
    Alice: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, BE: 0 },
    Bob: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, BE: 0 },
  });

  const resetScores = () => {
    Object.keys(scores).forEach(player => {
      Object.keys(scores[player]).forEach(score => {
        scores[player][score] = 0;
      });
    });
  };

  return { scores, resetScores };
};
