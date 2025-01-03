interface TimerState {
  time: number;
  isRunning: boolean;
  intervalId: NodeJS.Timeout | null;
}

const timerState: TimerState = $state({ time: 0, isRunning: false, intervalId: null });

const startTimer = () => {
  if (!timerState.isRunning) {
    timerState.intervalId = setInterval(() => {
      timerState.time += 0.1;
    }, 100);
    timerState.isRunning = true;
  }
}

const stopTimer = () => {
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
  }
}

const resetTimer = () => {
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerState.time = 0;
  }
}

const restartTimer = () => {
  resetTimer();
  startTimer();
}

export { timerState, startTimer, stopTimer, resetTimer, restartTimer };
