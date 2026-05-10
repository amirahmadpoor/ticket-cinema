const inputNumberPhone = document.querySelector('#phone');
const btnSubmit = document.querySelector('.submit');
const inputLabel = document.querySelectorAll('.login-form__label');
const inputs = document.querySelectorAll('.login-form__input');
const iconEye = document.querySelector('.icon-eye');
const showEye = document.querySelector('.use-icon');

let numberPhone;

function addClass(index) {
    inputLabel[index].classList.add('focus');
}
function removeClass(input, index) {
    if (input.value === '') {
        inputLabel[index].classList.remove('focus');
    }
}
function setEmptyInputs() {
    inputs.forEach(input => {
        input.value = '';
    })
}

inputs.forEach((input, index) => {
    input.addEventListener('focus', () => {
        addClass(index);
    })
    input.addEventListener('blur', () => {
        removeClass(input, index);
    })
})


btnSubmit.addEventListener('click', setEmptyInputs);