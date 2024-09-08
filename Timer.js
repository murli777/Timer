class Timer {
  constructor(durationInput, startBtn, pauseBtn, resetBtn, timerCallbacks) {
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

    if (timerCallbacks) {
      this.onStart = timerCallbacks.onStart;
      this.onTick = timerCallbacks.onTick;
      this.onReset = timerCallbacks.onReset;
    }
  }

  startTimer = () => {
    if (!this.TimeRemaininig) {
      this.setDuration();
    }
    this.runTimer();
    this.onTick({ time: this.TimeRemaininig });
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
    if (!this.durationInput.value) {
      this.onStart({
        message: "Please enter a number to start timer.",
        type: "error",
      });
    } else {
      this.converToSeconds(this.durationInput.value);
    }
  };

  emitTick() {
    if (!this.TimeRemaininig) {
      this.pauseTimer();
    } else {
      this.TimeRemaininig--;
      this.onTick({ time: this.TimeRemaininig });
    }
  }

  setStartAndPauseBtnState() {
    this.startBtn.disabled = this.isRunning;
    this.pauseBtn.disabled = !this.isRunning;
  }

  splitTime(time) {
    const hourMinuteSecond = time.split(":");
    return hourMinuteSecond;
  }

  converToSeconds(timeInput) {
    const splittedTime = this.splitTime(timeInput);
    console.log("Splitted Time:" + splittedTime);

    const seconds = Number(splittedTime[2]);
    const minuteToSecond = Number(splittedTime[1] * 60);
    const hourToSecond = Number(splittedTime[0] * 3600);

    this.TimeRemaininig = seconds + minuteToSecond + hourToSecond;
  }
}
