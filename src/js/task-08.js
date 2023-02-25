const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  const data = {};
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((val, name) => {
    data[name] = val;
    if (val === '') {
      return window.alert('всі поля повинні бути заповнені');
    }
  });
  if (data.email !== '' && data.password !== '') {
    console.log(data);
    form.reset();
  }
}
