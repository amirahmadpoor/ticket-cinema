import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initPaymentsPage } from "../features/payment/components/payments.js";
import { paymentValidation } from "../validation/payment-validation.js";
import { hideLoading } from "../shared/components/loading.js";

window.addEventListener('DOMContentLoaded', async () => {
    await initPaymentsPage(getIdReservation());
    paymentValidation();
    hideLoading();
});
