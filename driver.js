const segment_array = {
  0: ["a", "b", "c", "d", "e", "f"],
  1: ["a", "b"],
  2: ["a", "c", "d", "f", "g"],
  3: ["a", "b", "c", "f", "g"],
  4: ["a", "b", "e", "g"],
  5: ["b", "c", "e", "f", "g"],
  6: ["b", "c", "d", "e", "f", "g"],
  7: ["a", "b", "f"],
  8: ["a", "b", "c", "d", "e", "f", "g"],
  9: ["a", "b", "c", "e", "f", "g"],
};

function driver(time) {
  clearState();

  const segments = segment_array[time];

  segments.forEach((segment) => {
    const segmentElement = document.querySelector(`.seg_${segment}`);
    segmentElement.classList.add("segLit");
  });
}
