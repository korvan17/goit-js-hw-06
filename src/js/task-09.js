function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
button.addEventListener('click', changeColor);

function changeColor(event) {
  color.style.backgroundColor = getRandomHexColor();
  console.log(event);
}
