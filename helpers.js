function clearState() {
  const segLitElements = document.querySelectorAll(".segLit");
  segLitElements.forEach((element) => {
    element.classList.remove("segLit");
  });
}

function handleMessages(message, type, element) {
  element.className = "toast";
  element.textContent = message;
  element.classList.add(type);
  setTimeout(() => {
    element.textContent = "";
    element.classList.remove(type);
  }, 3000);
}

function checkForDigits(number) {
  if (number <= 0) {
    return "00";
  }
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

function convertFromSeconds(timeInSeconds) {
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  if (timeInSeconds < 60) {
    seconds = timeInSeconds;
  } else if (timeInSeconds < 3600 && timeInSeconds > 59) {
    minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    seconds = timeInSeconds - (minutes * 60 + hours * 3600);
  } else {
    hours = Math.floor(timeInSeconds / 3600);
    minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    seconds = timeInSeconds - (minutes * 60 + hours * 3600);
  }

  hours = checkForDigits(hours);
  minutes = checkForDigits(minutes);
  seconds = checkForDigits(seconds);

  return {
    hours,
    minutes,
    seconds,
  };
}
