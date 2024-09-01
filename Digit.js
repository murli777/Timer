class Digit {
  constructor(container) {
    this.segments = ["a", "b", "c", "d", "e", "f", "g"];
    this.container = container;
    this.createDigit();
  }

  createDigit() {
    const digitContainer = document.createElement("section");
    digitContainer.classList.add("seven-segment");
    this.segments.forEach((segment) => {
      const segmentname = `seg_${segment}`;
      const segmentElement = document.createElement("div");
      segmentElement.classList.add(segmentname, "segment");
      digitContainer.appendChild(segmentElement);
    });
    this.container.appendChild(digitContainer);
  }
}

const mainContainer = document.querySelector("#main-container");

const newDigit = new Digit(mainContainer);
