let timerInterval;
let timerRunning = false;
let timeLeft = parseInt(document.getElementById('duration').value) * 60;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const durationSelect = document.getElementById('duration');

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    startButton.textContent = 'Pause';
    timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time\'s up!';
        startButton.disabled = true;
      }
    }, 1000);
  } else {
    timerRunning = false;
    startButton.textContent = 'Start';
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  startButton.textContent = 'Start';
  startButton.disabled = false;
  timeLeft = parseInt(durationSelect.value) * 60;
  timerDisplay.textContent = `${parseInt(durationSelect.value)}:00`;
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
durationSelect.addEventListener('change', resetTimer);