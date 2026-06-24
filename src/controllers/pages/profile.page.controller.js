import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";
import { getReservationsByUserIdController } from "../../controllers/booking/reservation.controller.js";
import { getTicketInfoIdController } from "../../controllers/booking/ticket.controller.js";
import { renderUserTickets } from "../../components/booking/ticket-view.js";
import { handleAnimationLoadedTop } from "../../animations/animation-loaded.js";
import { MyAccount } from "../../components/MyAccount/MyAccount.js";
import { MyWatchList } from "../../components/MyWatchList/MyWatchList.js";
import { getWatchedMovieController } from "../../controllers/booking/reservation.controller.js";

export const initProfile = async () => {

    const userData = await getProfileDataUserController(getTokenUser());
    const sidebarMenu = document.querySelector('.sidebar__menu');
    const userName = document.querySelector('.sidebar__name');
    const userEmail = document.querySelector('.sidebar__email');
    const dashboardContainer = document.querySelector('.main');

    async function getCountReservationTickets() {
        const count = await getReservationsByUserIdController();
        if (count.length) {
            return count.length;
        }
        return 0;
    }

    function setSelected(item) {
        item.classList.add('sidebar__item--active');
    }

    function resetSelected() {
        document.querySelectorAll('.sidebar__item').forEach(item => item.classList.remove('sidebar__item--active'));
    }

    function handlerSelected(item) {
        resetSelected();
        setSelected(item);
    }


    async function renderMyAccount() {
        const countTicket = await getCountReservationTickets();
        const welcome = userData.data.name;

        const dashboardContainer = document.querySelector('.main');
        dashboardContainer.innerHTML = await MyAccount(countTicket, welcome);
    }
    await renderMyAccount();


    const showUserTickets = async () => {
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


    const showMyAccount = async (countTicket, welcome) => {
        try {
            const content = await MyAccount(countTicket, welcome);
            if (!content) return;
            dashboardContainer.innerHTML = content;

        } catch (err) {
            console.error(`خطا در دریافت جزئیات اکانت `, error);
        }
    }


    const showUserWatchList = async () => {
        try {
            const reservations = await getWatchedMovieController();
            dashboardContainer.innerHTML = reservations.map(MyWatchList);
        } catch (err) {
            console.error(err);
        }
    }

    sidebarMenu.addEventListener('click', async (e) => {
        const item = e.target.closest('.sidebar__item');

        e.preventDefault();
        handlerSelected(item);

        if (e.target.closest('.my-ticket')) {
            await showUserTickets();
        } else if (e.target.closest('.my-account')) {
            await renderMyAccount();
        } else if (e.target.closest('.my-watchlist')) {
            await showUserWatchList();
        }
        handleAnimationLoadedTop();
    })

    console.log(await getCountReservationTickets());
    userName.innerHTML = userData.data.name;
    userEmail.innerHTML = userData.data.email;
}