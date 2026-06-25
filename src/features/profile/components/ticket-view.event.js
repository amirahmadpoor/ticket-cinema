import { getReservationsByUserIdController } from "../../booking/controllers/reservation.controller.js";
import { getTicketInfoIdController } from "../../ticket/controllers/ticket.controller.js";
import { renderUserTickets } from "./ticket-view.js";

export const showUserTickets = async () => {
    const dashboardContainer = document.querySelector('.main');
    try {
        const reservations = await getReservationsByUserIdController();

        if (!reservations || reservations.length === 0) {
            ticketsContainer.innerHTML = '<p>هیچ بلیطی رزرو نشده</p>';
            return;
        }

        const ticketDetails = [];
        for (let reservation of reservations) {
            try {
                const ticketDetail = await getTicketInfoIdController(reservation.id);
                if (ticketDetail.data) {
                    ticketDetails.push(ticketDetail.data);
                }
            } catch (error) {
                console.error(`خطا در دریافت جزئیات بلیط ${reservation.id}:`, error);
            }
        }
        dashboardContainer.innerHTML = renderUserTickets(ticketDetails);

    } catch (error) {
        console.error('خطا در دریافت بلیط‌ها:', error);
        const ticketsContainer = document.getElementById('tickets-container');
        ticketsContainer.innerHTML = '<p>خطا در بارگذاری بلیط‌ها</p>';
    }
}