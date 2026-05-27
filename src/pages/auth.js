import { postDataUserNewController } from "../controllers/pages/auth.controller.js";
import { getDataUserController } from "../controllers/pages/auth.controller.js";

const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const emailLoginUser = document.querySelector('#email-login');
const passwordLoginUser = document.querySelector('#password-login');
const nameRegisterUser = document.querySelector('#name-register');
const emailRegisterUser = document.querySelector('#email-register');
const passwordRegisterUser = document.querySelector('#password-register');
const phoneRegisterUser = document.querySelector('#phone-register');
const btnLoginFormRegister = document.querySelector('.login-form__register');
const btnRegisterFormLogin = document.querySelector('.register-form__login');
const formTitle = document.querySelector('.signin-signup__title');


function showForms() {
    registerForm.classList.toggle('show');
    loginForm.classList.toggle('show');
    if (registerForm.classList.contains('show')) {
        formTitle.innerHTML = 'ثبت نام';
    } else if (loginForm.classList.contains('show')) {
        formTitle.innerHTML = 'ورود';
    }
}

function validationInputUserNew() {
    const name = nameRegisterUser.value.trim();
    const email = emailRegisterUser.value.trim();
    const password = passwordRegisterUser.value.trim();
    const phone = phoneRegisterUser.value.trim();

    if (name && email && password && phone) {
        getInputUserNew(name, email, password, phone);
        return true;
    } else {
        return false;
    }
}

function validationInputUser() {
    const email = emailLoginUser.value.trim();
    const password = passwordLoginUser.value.trim();

    if (email && password) {
        getInputUser(email, password);
        return true;
    } else {
        return false;
    }
}

function getInputUser() {
    const userData = {
        email: emailLoginUser.value.trim(),
        password: passwordLoginUser.value.trim(),
    }
    return userData;
}

function getInputUserNew() {

    const userData = {
        name: nameRegisterUser.value.trim(),
        email: emailRegisterUser.value.trim(),
        password: passwordRegisterUser.value.trim(),
        phone: phoneRegisterUser.value.trim(),
    };

    return userData;
}

async function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
    
}

async function handleRegister(e) {
    e.preventDefault();
    if (validationInputUserNew()) {
        
        const response = await postDataUserNewController(getInputUserNew());
        
        console.log(response);
        
        if (response.success) {
            setEmptyInputs();
        }
        if (response.data.token) {
            setAccessToken(await response.data.token);
            window.location.href = '/index.html';
        } else {
            console.log('auth field');

        }
    }
}

async function handleLogin(e) {
    e.preventDefault();
    if (validationInputUser()) {

        const response = await getDataUserController(getInputUser());

        if (response.success) {
            setEmptyInputs();
        }
        if (!response.ok) {
            console.log('auth field');
        }
        window.location.href = '/index.html';
        setAccessToken(await response.data.token);
    }
}

function setEmptyInputs() {
    inputs.forEach(input => input.value = '');
}


registerForm.addEventListener('submit', handleRegister);
loginForm.addEventListener('submit', handleLogin);
btnLoginFormRegister.addEventListener('click', showForms);
btnRegisterFormLogin.addEventListener('click', showForms);