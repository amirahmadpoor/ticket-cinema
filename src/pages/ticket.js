import { getIdReservation } from "../utils/helpers/getIDReservation.js";
import { initTicketPage } from "../controllers/pages/ticket.page.controller.js";

window.addEventListener('DOMContentLoaded', async() => {
    await initTicketPage(getIdReservation());
})
