function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const getData = document.querySelector('input');
const box = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  addBox(getData.value);
}

function addBox(amount) {
  const arrDiv = [];
  for (let i = 0; i < amount; i += 1) {
    const withHeight = `${3 + i}0px`;
    const smallBox = document.createElement('div');
    smallBox.style.width = withHeight;
    smallBox.style.height = withHeight;
    smallBox.style.backgroundColor = getRandomHexColor();
    arrDiv.push(smallBox);
  }
  box.append(...arrDiv);
}

function destroyBoxes() {
  box.innerHTML = '';
}
