import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";
import { getReservationsByUserIdController } from "../../controllers/booking/reservation.controller.js";

export const initProfile = async () => {
    const userData = await getProfileDataUserController(getTokenUser());
    const sidebarMenu = document.querySelector('.sidebar__menu');
    const userName = document.querySelector('.sidebar__name');
    const userEmail = document.querySelector('.sidebar__email');
    const welcome = document.querySelector('.welcome__title');
    const countTicket = document.querySelector('.count-ticket');

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


    sidebarMenu.addEventListener('click', e => {
        const item = e.target.closest('.sidebar__item');
        handlerSelected(item);
    })

    console.log(await getCountReservationTickets());
    userName.innerHTML = userData.data.name;
    userEmail.innerHTML = userData.data.email;
    welcome.innerHTML = `خوش اومدی ${userData.data.name}`;
    countTicket.innerHTML = await getCountReservationTickets();
}