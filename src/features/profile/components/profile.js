import { getProfileDataUserController } from "../../auth/controllers/auth.controller.js";
import { getTokenUser } from "../../../utils/get-token.js";
import { getWatchedMovieController } from "../../booking/controllers/reservation.controller.js";
import { getTicketInfoIdController } from "../../ticket/controllers/ticket.controller.js";
import { handleAnimationLoadedTop } from "../../../animations/animation-loaded.js";
import MyAccount from "./my-account.js";
import MyWatchList from "../../profile/components/my-watchlist.js";
import showUserTickets from "./ticket-view.event.js";
import { renderMyAccount } from "./my-account.event.js";
import { showMyAccount } from "./my-account.event.js";
import { showUserWatchList } from "./watch-list.event.js";

const initProfile = async () => {

    const userData = await getProfileDataUserController(getTokenUser());
    const sidebarMenu = document.querySelector('.sidebar__menu');
    const userName = document.querySelector('.sidebar__name');
    const userEmail = document.querySelector('.sidebar__email');
    const dashboardContainer = document.querySelector('.main');

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


    await renderMyAccount();

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

    userName.innerHTML = userData.data.name;
    userEmail.innerHTML = userData.data.email;
}

export default initProfile;