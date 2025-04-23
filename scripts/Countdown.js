export default class Countdown {
    constructor(containerId, onComplete) {
      this.container = document.getElementById(containerId); // The container where the countdown will be displayed
      this.onComplete = onComplete; // Callback function when the timer reaches 0
      this.minutes = 0;
      this.seconds = 0;
      this.interval = null;
  
      // Create the countdown display
      this.container.innerHTML = `
        <span id="countdown-minutes">00</span>:<span id="countdown-seconds">00</span>
      `;
      this.minutesElement = document.getElementById('countdown-minutes');
      this.secondsElement = document.getElementById('countdown-seconds');
    }
  
    // Set the countdown time in minutes and seconds
    setTime(minutes, seconds) {
      this.minutes = minutes;
      this.seconds = seconds;
      this.updateDisplay();
    }
  
    // Start the countdown
    start() {
      if (this.interval) {
        clearInterval(this.interval); // Clear any existing interval
      }
  
      this.interval = setInterval(() => {
        if (this.minutes === 0 && this.seconds === 0) {
          clearInterval(this.interval); // Stop the countdown
          if (this.onComplete) {
            this.onComplete(); // Trigger the onComplete callback
          }
          return;
        }
  
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
  
        this.updateDisplay();
      }, 1000);
    }
  
    // Stop the countdown
    stop() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  
    // Update the countdown display
    updateDisplay() {
      this.minutesElement.textContent = String(this.minutes).padStart(2, '0');
      this.secondsElement.textContent = String(this.seconds).padStart(2, '0');
    }
  }