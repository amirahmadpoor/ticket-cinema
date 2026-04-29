import { handleValidation } from "./validationConsulat.js";
import { checkCookie } from "../utils/checkCookie.js";
import { deleteCookie } from "../utils/deleteCookie.js";

const btnModal = document.querySelector('.btn-modal');
const modalBox = document.querySelector('.modal');
const overlay = document.querySelector('.overlay-modal');
const btnSubmit = document.querySelector('.form-consultation__submit');
const btnAgain = document.querySelector('.form-consultation__again');

function openModal() {
    modalBox.classList.toggle('open');
}

function activeOverlay() {
    overlay.classList.toggle('active');
}

export function handleModal() {
    isSetCookie();  
    openModal();
    activeOverlay();
}

function submitForm() {
    handleValidation();
}

function requestAgain() {
    btnAgain.classList.remove('active');
    btnSubmit.classList.remove('disable');
    btnSubmit.disabled = false;
    deleteCookie('consultation');
}

function isSetCookie() {
    if (checkCookie('consultation')) {
        btnAgain.classList.add('active');
        btnSubmit.classList.add('disable');
        btnSubmit.disabled = true;
    }
}

btnModal.addEventListener('click', handleModal);
btnSubmit.addEventListener('click',submitForm);
btnAgain.addEventListener('click', requestAgain);
overlay.addEventListener('click', handleModal);