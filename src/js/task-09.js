function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
button.addEventListener('click', changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `- ${getRandomHexColor()}`;
  console.log(event);
}
