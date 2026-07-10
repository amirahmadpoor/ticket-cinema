import { getUserTicketsController } from "../../booking/controllers/reservation.controller.js";
import { getTicketInfoIdController } from "../../ticket/controllers/ticket.controller.js";
import { renderUserTickets } from "./ticket-view.js";

const showUserTickets = async () => {
    const ticketDetails = [];
    const dashboardContainer = document.querySelector('.main');
    try {
        const reservations = await getUserTicketsController();

        for (let reservation of reservations) {
            try {
                const ticketDetail = await getTicketInfoIdController(reservation.id);
                ticketDetail && ticketDetail.data && ticketDetails.push(ticketDetail.data);
            } catch (error) {
                console.error(`خطا در دریافت جزئیات بلیط ${reservation.id}:`, error);
            }
        }
        ticketDetails.length > 0
            ? dashboardContainer.innerHTML = renderUserTickets(ticketDetails)
            : dashboardContainer.innerHTML = '<p style="display:flex; justify-content:center; align-items:center; height:100%;">هیچ بلیطی برای نمایش وجود ندارد</p>';

    } catch (error) {
        console.error('خطا در دریافت بلیط‌ها:', error);
        dashboardContainer.innerHTML = '<p style="display:flex; justify-content:center; align-items:center; height:100%;">خطا در بارگذاری بلیط‌ها</p>';
    }
}

export default showUserTickets;