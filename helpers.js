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

function splitTime(time) {
  const hourMinuteSecond = time.split(":");
  return hourMinuteSecond;
}

function converToSeconds(timeInput) {
  const splittedTime = splitTime(timeInput);
  console.log("Splitted Time:" + splittedTime);

  const seconds = Number(splittedTime[2]);
  const minuteToSecond = Number(splittedTime[1] * 60);
  const hourToSecond = Number(splittedTime[0] * 3600);

  return seconds + minuteToSecond + hourToSecond;
}
