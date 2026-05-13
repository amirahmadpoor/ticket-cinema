const loginForm = document.querySelector('#login-form');
const btnSubmit = document.querySelector('.submit');
const inputs = document.querySelectorAll('.login-form__input');
const emailUser = document.querySelector('#email');
const passwordUser = document.querySelector('#password');
const iconEye = document.querySelector('.icon-eye');
const showEye = document.querySelector('.use-icon');

let numberPhone;

function setEmptyInputs() {
    inputs.forEach(input => {
        input.value = '';
    })
}

async function checkUser() {
    const inputsValues = {
        email: emailUser.value,
        password: passwordUser.value,
    }
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputsValues)
    }
    );
    const data = response.json();
    data
        .then(res => console.log(res))
    // if (data) {
    //     // window.location = 'http://localhost/index.html';
    //     alert('true')
    // } else {
    //     alert('field');
    // }
}

function handlerLogin() {
    checkUser();
    setEmptyInputs();
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
})
btnSubmit.addEventListener('click', handlerLogin);