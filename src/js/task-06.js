const input = document.querySelector('#validation-input');

function onBlurEvent(event) {
  event.currentTarget.value.length === Number(input.getAttribute('data-length'))
    ? (input.className = 'valid')
    : (input.className = 'invalid');
}

input.addEventListener('blur', onBlurEvent);
