const valueOfForm = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

function onFormSubmit(event) {
  event.currentTarget.value
    ? (text.textContent = event.currentTarget.value)
    : (text.textContent = 'Anonymous');
}

valueOfForm.addEventListener('input', onFormSubmit);
