import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initTicketPage } from "../features/ticket/components/ticket.js";
import { hideLoading } from "../shared/components/loading.js";
import { handleTimer } from "../features/ticket/controllers/ticket.controller.js";

window.addEventListener('DOMContentLoaded', async () => {
    const timerElem = document.querySelector('.timer-out');

    await initTicketPage(getIdReservation());
    hideLoading();

    handleTimer(timerElem)
})
