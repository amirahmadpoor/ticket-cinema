import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initPaymentsPage } from "../controllers/pages/payments.page.controller.js";
import { paymentValidation } from "../validation/payment-validation.js";
window.addEventListener('DOMContentLoaded', async () => {
    await initPaymentsPage(getIdReservation());
    paymentValidation();
});
