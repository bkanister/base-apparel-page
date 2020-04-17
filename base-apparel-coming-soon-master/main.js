const form = document.getElementsByTagName('form')[0];
const input = document.querySelector('.email-input');
const button = document.querySelector('button');
const feedback = document.querySelector('.feedback');
const dangerIcon = document.querySelector('.danger-icon');

form.addEventListener('submit', validateEmail);

function validateEmail(e) {
  e.preventDefault();
  let email = input.value;
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!pattern.test(email)) {
    feedback.style.display = 'block';
    input.classList.add('wrong-email');
    dangerIcon.style.display = 'block';
    button.classList.add('disabled');
  } else {
    input.value = '';
    // sendForm();
  }
}

input.addEventListener('keydown', function() {
  if (input.value === '') {
    feedback.style.display = 'none';
    input.classList.remove('wrong-email');
    dangerIcon.style.display = 'none';
    button.classList.remove('disabled');
  }
})