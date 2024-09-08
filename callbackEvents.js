const timerCallbacks = {
  onStart({ message, type }) {
    handleMessages(message, type, toast);
    // convertFromSeconds(time);
  },
  onTick({ time }) {
    clearState();
    driveDigits(time);
  },
  onReset() {
    clearState();
  },
};
