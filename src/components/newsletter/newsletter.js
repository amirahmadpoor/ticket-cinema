import { newsletterController } from "../../controllers/components/newsletter.controller.js";
import { handleToastBox } from "../../utils/helpers/show-toast.js";
const form = document.querySelector('.cta__input-email');
const emailUser = document.querySelector('.cta__email');
const labelEmail = document.querySelector('.email__placeholder');
const message = document.querySelector('.cta__message');

function resetInput() {
    emailUser.value = '';
}

function toggleLabelEmail() {
    emailUser.addEventListener('blur', () => {
        if (emailUser.value.trim() !== '') {
            labelEmail.classList.add('hide');
        } else {
            labelEmail.classList.remove('hide');
        }
    })
}
toggleLabelEmail();

function validationEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


function validationInput() {
    const emailVal = emailUser.value.trim();
    message.innerHTML = '';
    if (!emailVal) {
        message.innerHTML = 'ایمیل خود را وارد کنید';
    } else if (!validationEmail(emailVal)) {
        message.innerHTML = 'ایمیل نامعتبر است';
    } else {
        return true;
    }
}

function getEmailUser() {
    let newUser = {
        email: emailUser.value.trim(),
    }
    return newUser;
}

async function handleNewsletter() {
    if (validationInput()) {
        await newsletterController(getEmailUser());
        resetInput();
        handleToastBox('درخواست شما ثبت شد');
    }
}

export function submitNewsletter() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNewsletter();
    })
}