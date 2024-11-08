function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesCreating = {
  amount: document.querySelector('#controls>input'),
  boxContainer: document.querySelector('#boxes'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  createBoxes() {
    boxesCreating.boxContainer.innerHTML = '';
    if (boxesCreating.amount.value > 100 || boxesCreating.amount.value < 1) {
      boxesCreating.amount.value = 1;
      return;
    }
    const boxesHTML = [];
    for (let i = 1, size = 30; i <= boxesCreating.amount.value; i++, size += 10){
      const color = getRandomHexColor();
      boxesHTML.push(`<div style="background-color: ${color}; width: ${size}px; height: ${size}px"></div>`);
    }
    boxesCreating.boxContainer.insertAdjacentHTML("afterbegin", boxesHTML.join(''));
    boxesCreating.amount.value = 1;
  },
  destroyBoxes (){
    boxesCreating.boxContainer.innerHTML = '';
  }
}

boxesCreating.amount.value = 1;

boxesCreating.createButton.addEventListener('click', boxesCreating.createBoxes);
boxesCreating.destroyButton.addEventListener('click', boxesCreating.destroyBoxes);

