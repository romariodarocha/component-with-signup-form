const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const submitButton = document.querySelector('button[type="submit"]');
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (firstName.value === '') {
        firstName.value = '';
        showErrorMessage(firstName, "First Name cannot be empty!")
    }

    if (lastName.value === '') {
        showErrorMessage(lastName, "Last Name cannot be empty!")
    }

    if (email.value === '') {
        showErrorMessage(email, "Looks like this is not an email!")
    } else if (!emailRegExp.test(email.value)) {
        showErrorMessage(email, "Looks like this is not an email!");
    }

    if (password.value === '') {
        showErrorMessage(password, "Password cannot be empty");
    }
});

function showErrorMessage(inputValue, message) {
    const inputControl = inputValue.parentElement;
    inputControl.classList.add('error');
    const errorMessage = inputControl.querySelector('.error-text');
    errorMessage.innerHTML = message;
}