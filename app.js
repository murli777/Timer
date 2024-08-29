const durationInput = document.querySelector("#duration");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const toast = document.querySelector("#toast");

const timer = new Timer(durationInput, start, pause, reset, {
  onStart(message, type, time) {
    handleMessages(message, type, toast);
    clearState();
    driver(time);
  },
  onChange(time) {
    driver(time);
  },
});

handleMessages = (message, type, element) => {
  clearTimeout(this.toastTimeOut);
  element.className = "toast";
  element.textContent = message;
  element.classList.add(type);
  this.toastTimeOut = setTimeout(() => {
    element.textContent = "";
    element.classList.remove(type);
  }, 5000);
};
