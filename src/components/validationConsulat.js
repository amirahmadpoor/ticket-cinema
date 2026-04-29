import { handleModal } from "./modal.js";
import { setCookie } from "../utils/setCookieConsilat.js";

export function handleValidation() {
    const btnSubmit = document.querySelector('.form-consultation__submit');

    const userName = document.querySelector('input[name="name"]');
    const topic = document.querySelector('input[name="topic"]');
    const phone = document.querySelector('input[name="phone"]');

    const userNameLabel = document.querySelector('label[for="name"]');
    const topicLabel = document.querySelector('label[for="topic"]');
    const phoneLabel = document.querySelector('label[for="phone"]');

    const toastNotification = document.querySelector('.toast-notification');
    const toastNotificationText = document.querySelector('.toast-notification__text');
    const toastNotificationTimer = document.querySelector('.toast-notification__timer');

    let isValid = true;
    function isEmpty(input) {
        return input === '';
    }

    function isLengthValid(topicValue, minLength) {
        return topicValue.length >= minLength;
    }

    function isValidPhoneNumber(phone) {
        const phonePattern = /^(\+98|0)?9\d{9}$/;
        return phonePattern.test(phone);
    }

    function isValidName(userNameValue) {
        if (isEmpty(userNameValue)) {
            userNameLabel.innerHTML = 'پر کردن فیلد اجباری است';
            isValid = false;
        }
    }

    function isValidTopic(topicValue) {
        if (isEmpty(topicValue)) {
            topicLabel.innerHTML = 'پر کردن فیلد اجباری است';
            isValid = false;
        } else if (!isLengthValid(topicValue, 4)) {
            topicLabel.innerHTML = 'ورودی باید حداقل 4 کارکتر باشد';
            isValid = false;
        }
    }

    function isValidPhone(phoneValue) {
        if (!isValidPhoneNumber(phoneValue)) {
            phoneLabel.innerHTML = "شماره وارد شده نامعتبر است";
            isValid = false;
        }
    }

    function resetInputs() {
        userName.value = '';
        topic.value = '';
        phone.value = '';
    }

    function disableSubmit() {
        // btnSubmit.disabled = true
        btnSubmit.classList.add('disable');
    }

    function sendNotif() {
        let width = 100;
        toastNotification.classList.add('show');
        toastNotificationText.innerHTML = 'درخواست موفقیت آمیز بود.';
        const setTime = setInterval(() => {
            width--;
            toastNotificationTimer.style.width = `${width}%`;
            if (width === 0) {
                toastNotification.classList.remove('show');
                clearInterval(setTime);
            }
        }, 50)
    }

    function isFormValid() {
        let userNameValue = userName.value.trim();
        let topicValue = topic.value.trim();
        let phoneValue = phone.value.trim();
        userNameLabel.innerHTML = '';
        topicLabel.innerHTML = '';
        phoneLabel.innerHTML = '';

        isValidName(userNameValue);
        isValidTopic(topicValue);
        isValidPhone(phoneValue);

        if (isValid) {
            sendNotif();
            handleModal();
            disableSubmit();
            setCookie('consultation', topicValue);
        }
        resetInputs();
    }
    isFormValid()
}