class Timer {
  constructor(durationInput, startBtn, pauseBtn, resetBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    this.resetBtn = resetBtn;
    this.TimeRemaininig = 0;
    this.pauseBtn.disabled = true;

    this.durationInput.addEventListener("change", this.setDuration);
    this.startBtn.addEventListener("click", this.startTimer);
    this.pauseBtn.addEventListener("click", this.pauseTimer);
    this.resetBtn.addEventListener("click", this.resetTimer);

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onChange = callbacks.onChange;
      this.onReset = callbacks.onReset;
    }
  }

  startTimer = () => {
    if (!this.TimeRemaininig) {
      this.setDuration();
    }
    this.runTimer();
    this.onChange({ time: this.TimeRemaininig });
    this.isRunning = true;
    this.setStartAndPauseBtnState();
  };

  pauseTimer = () => {
    clearInterval(this.interval);
    this.isRunning = false;
    this.setStartAndPauseBtnState();
  };

  resumeTimer = () => {
    this.runTimer();
    this.isRunning = true;
    this.setStartAndPauseBtnState();
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.durationInput.value = "";
    this.TimeRemaininig = 0;
    this.isRunning = false;
    this.setStartAndPauseBtnState();
    this.onReset();
  };

  runTimer() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.emitTick();
    }, 1000);
  }

  setDuration = () => {
    if (!(this.durationInput.value <= 0)) {
      this.TimeRemaininig = this.durationInput.value;
      this.onStart({
        message: `Timer started for ${this.durationInput.value} seconds`,
        type: "message",
      });
      return;
    }
    this.onStart({
      message: "Please enter a number to start timer.",
      type: "error",
    });
  };

  emitTick() {
    if (!this.TimeRemaininig) {
      this.pauseTimer();
    } else {
      this.TimeRemaininig--;
      this.onChange({ time: this.TimeRemaininig });
    }
  }

  setStartAndPauseBtnState() {
    this.startBtn.disabled = this.isRunning;
    this.pauseBtn.disabled = !this.isRunning;
  }
}
