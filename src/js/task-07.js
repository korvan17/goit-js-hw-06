const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener('input', fontSizeChanger);

function fontSizeChanger(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = `${event.currentTarget.value}px`;
}
