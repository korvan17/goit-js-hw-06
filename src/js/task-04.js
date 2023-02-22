const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

function onClickDecrement() {
  document.querySelector('#value').textContent -= 1;
}
function onClickIncrement() {
  const num = Number(document.querySelector('#value').textContent);
  document.querySelector('#value').textContent = num + 1;
}

buttonDec.addEventListener('click', onClickDecrement);

buttonInc.addEventListener('click', onClickIncrement);
