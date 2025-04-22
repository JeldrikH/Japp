class Timer {
    constructor() {
      this.startTime = null;
      this.endTime = null;
      this.elapsedTime = 0; // Time in milliseconds
    }
  
    // Start the timer
    startTimer() {
      this.startTime = Date.now();
      this.endTime = null; // Reset end time
      console.log("Timer started");
    }
  
    // Stop the timer and calculate elapsed time
    stopTimer() {
      if (!this.startTime) {
        console.error("Timer was not started!");
        return;
      }
      this.endTime = Date.now();
      this.elapsedTime = this.endTime - this.startTime;
      console.log(`Timer stopped. Elapsed time: ${this.elapsedTime} ms`);
      return this.elapsedTime; // Return elapsed time in milliseconds
    }
  
    // Get elapsed time in seconds
    getElapsedTimeInSeconds() {
      return (this.elapsedTime / 1000).toFixed(2); // Convert to seconds and format to 2 decimal places
    }
  }