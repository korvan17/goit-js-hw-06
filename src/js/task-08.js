const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  const data = {};
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((val, name) => {
    data[name] = val;
    if (val === '') {
      window.alert('всі поля повинні бути заповнені');
    }
  });
  form.reset();
  console.log(data);
}
