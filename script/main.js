const inputs = document.getElementsByClassName('input-text');
const icons = document.getElementsByClassName('error-icon');
const labels = document.getElementsByTagName('label');

// Patern to validate e-mail
const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//function to validate email
function emailIsValid(email) {
    if (email.checkValidity() && pattern.test(email.value.toLowerCase())) {
      return true;
    } else {
        return false;
    }
}

//remove the error message when the users changes anything in the input field
//Use the input event because focus conflicts to browser's error message itself
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
      inputs[i].classList.remove('input-error');
      icons[i].classList.remove('error-icon-error');
      labels[i].classList.remove('label-error');
    });
}

//show error message if any of input fields are empty or if the email is invalid
document.getElementById('submit-button').addEventListener('click', () => {
    for (let i in inputs) {
      let isValid = true;
      if (inputs[i].id == 'email') {
        isValid = emailIsValid(inputs[i]);
      }
      if (inputs[i].value == '' || !isValid) {
        inputs[i].classList.add('input-error');
        icons[i].classList.add('error-icon-error');
        labels[i].classList.add('label-error');
      }
    }
  });