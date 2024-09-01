const callbacks = {
  onStart({ message, type }) {
    handleMessages(message, type, toast);
  },
  onChange({ time }) {
    clearState();
    driver(time);
  },
  onReset() {
    clearState();
  },
};
