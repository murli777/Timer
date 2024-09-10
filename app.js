import timerCallbacks from "./callbackEvents.js";
import Timer from "./Timer.js";

const durationInput = document.querySelector("#duration");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const toast = document.querySelector("#toast");

new Timer(durationInput, start, pause, reset, timerCallbacks);

export {toast};