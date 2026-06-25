import { createPayment } from "../features/payment/controllers/payments.controller.js";
import { getIdReservation } from "../utils/helpers/getIDReservation.js";

export const paymentValidation = (totalPrice) => {
    const btnPayment = document.querySelector('.payment__submit-btn');
    const cardNumber = document.querySelector('#card-number');
    const month = document.querySelector('#expiry-month');
    const year = document.querySelector('#expiry-year');
    const cvv2 = document.querySelector('#card-cvv2');

    if (!btnPayment || !cardNumber || !month || !year || !cvv2) return;

    const setError = (input, message) => {
        const field = input.closest('.payment__field');
        const wrapper = field.querySelector('.payment__input-wrapper');
        const error = field.querySelector('.message-validate');

        wrapper.classList.add('no-validate');
        error.textContent = message;
    };

    const clearError = (input) => {
        const field = input.closest('.payment__field');
        const wrapper = field.querySelector('.payment__input-wrapper');
        const error = field.querySelector('.message-validate');

        wrapper.classList.remove('no-validate');
        error.textContent = '';
    };

    btnPayment.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        const cardValue = cardNumber.value.trim().replace(/\s/g, '');
        const monthValue = month.value.trim();
        const yearValue = year.value.trim();
        const cvv2Value = cvv2.value.trim();

        if (!cardValue || cardValue.length !== 16 || isNaN(cardValue)) {
            setError(cardNumber, 'شماره کارت معتبر نیست');
            isValid = false;
        } else {
            clearError(cardNumber);
        }

        if (!monthValue || +monthValue < 1 || +monthValue > 12) {
            setError(month, 'ماه معتبر نیست');
            isValid = false;
        } else {
            clearError(month);
        }

        if (!yearValue || yearValue.length < 2 || isNaN(yearValue)) {
            setError(year, 'سال معتبر نیست');
            isValid = false;
        } else {
            clearError(year);
        }

        if (!cvv2Value || cvv2Value.length < 3 || cvv2Value.length > 4 || isNaN(cvv2Value)) {
            setError(cvv2, 'CVV2 معتبر نیست');
            isValid = false;
        } else {
            clearError(cvv2);
        }

        if (!isValid) return;

        const newPayment = {
            reservation_id: Number(getIdReservation()),
        }

        createPayment(newPayment);
        console.log('اطلاعات کارت معتبر است');
    });
};
