import driver from "./driver.js";
import { convertFromSeconds } from "./helpers.js";

function createDigit(unitName, digitName) {
  const segments = ["a", "b", "c", "d", "e", "f", "g"];
  const containerName = `#${unitName}`;

  const container = document.querySelector(containerName);
  const digitContainer = document.createElement("section");
  digitContainer.classList.add("seven-segment", digitName);
  segments.forEach((segment) => {
    const segmentname = `seg_${segment}`;
    const segmentElement = document.createElement("div");
    segmentElement.classList.add(segmentname, "segment");
    digitContainer.appendChild(segmentElement);
  });
  container.appendChild(digitContainer);
}

function makeDisplay() {
  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  for (let i = 0; i < hours.length; i++) {
    const digitName = `hour${i}`;
    createDigit("hour", digitName);
  }
  for (let i = 0; i < minutes.length; i++) {
    const digitName = `minute${i}`;
    createDigit("minute", digitName);
  }
  for (let i = 0; i < seconds.length; i++) {
    const digitName = `second${i}`;
    createDigit("second", digitName);
  }
}

makeDisplay();

function driveDigits(time) {
  let { hours, minutes, seconds } = convertFromSeconds(time);

  hours = String(hours);
  minutes = String(minutes);
  seconds = String(seconds);

  for (let i = 0; i < hours.length; i++) {
    const digitName = `hour${i}`;
    driver(hours[i], digitName);
  }
  for (let i = 0; i < minutes.length; i++) {
    const digitName = `minute${i}`;
    driver(minutes[i], digitName);
  }
  for (let i = 0; i < seconds.length; i++) {
    const digitName = `second${i}`;
    driver(seconds[i], digitName);
  }
}

export default driveDigits;