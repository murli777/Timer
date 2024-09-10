import driveDigits from "./Digit.js";
import { clearState, handleMessages } from "./helpers.js";
import { toast } from "./app.js";

const timerCallbacks = {
  onStart({ message, type }) {
    handleMessages(message, type, toast);
  },
  onTick({ time }) {
    clearState();
    driveDigits(time);
  },
  onReset() {
    clearState();
  },
};

export default timerCallbacks;