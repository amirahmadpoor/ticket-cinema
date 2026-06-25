import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initTicketPage } from "../features/ticket/components/ticket.page.controller.js";

window.addEventListener('DOMContentLoaded', async() => {
    await initTicketPage(getIdReservation());
})
