const durationInput = document.querySelector("#duration");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const toast = document.querySelector("#toast");

const timer = new Timer(durationInput, start, pause, reset, callbacks);
