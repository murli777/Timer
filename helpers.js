function clearState() {
  const segLitElements = document.querySelectorAll(".segLit");
  segLitElements.forEach((element) => {
    element.classList.remove("segLit");
  });
}

handleMessages = ({ message, type }, element) => {
  // const { message, type } = args;
  element.className = "toast";
  element.textContent = message;
  element.classList.add(type);
  setTimeout(() => {
    element.textContent = "";
    element.classList.remove(type);
  }, 3000);
};
