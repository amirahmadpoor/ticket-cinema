import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initTicketPage } from "../features/ticket/components/ticket.js";
import { hideLoading } from "../shared/components/loading.js";

window.addEventListener('DOMContentLoaded', async () => {
    await initTicketPage(getIdReservation());
    hideLoading();
    setTimeout(() => {
        location.pathname = 'index.html';
    }, 2000);
})
