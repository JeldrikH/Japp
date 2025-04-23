export default class Countdown {
  constructor(elementId, onComplete) {
    this.element = document.getElementById(elementId);
    this.onComplete = onComplete;
    this.totalTime = 0; // Total countdown time in seconds
    this.remainingTime = 0; // Remaining time in seconds
    this.interval = null;
  }

  setTime(minutes, seconds) {
    this.totalTime = minutes * 60 + seconds;
    this.remainingTime = this.totalTime;
    this.updateDisplay();
  }

  start() {
    this.interval = setInterval(() => {
      this.remainingTime--;
      this.updateDisplay();

      if (this.remainingTime <= 0) {
        clearInterval(this.interval);
        if (this.onComplete) this.onComplete();
      }
    }, 1000);
  }

  updateDisplay() {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    const percentage = (this.remainingTime / this.totalTime) * 100;

    // Update the countdown text
    const countdownText = document.getElementById('countdown-text');
    countdownText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update the circular progress bar
    const circle = document.querySelector('.circle');
    circle.style.background = `conic-gradient(#007BFF ${percentage}%, #ddd ${percentage}%)`;
  }
}