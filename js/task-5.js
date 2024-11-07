function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const body = document.querySelector('body');
const widget = {
  colorText: document.querySelector(".color"),
  changeButton: document.querySelector('.change-color'),
  changeBackgroundColor() {
    const color = getRandomHexColor()
    body.style.backgroundColor = color;
    widget.colorText.textContent = color;
  }
}

widget.changeButton.addEventListener('click', widget.changeBackgroundColor);