import { MyAccount } from "./my-account.js";
import { getReservationsByUserIdController } from "../../booking/controllers/reservation.controller.js";
import { getProfileDataUserController } from "../../auth/controllers/auth.controller.js";
import { getTokenUser } from "../../../utils/get-token.js";

export const showMyAccount = async (countTicket, welcome) => {
    const dashboardContainer = document.querySelector('.main');

    try {
        const content = await MyAccount(countTicket, welcome);
        if (!content) return;
        dashboardContainer.innerHTML = content;

    } catch (err) {
        console.error(`خطا در دریافت جزئیات اکانت `, error);
    }
}

export const renderMyAccount = async () => {
    const dashboardContainer = document.querySelector('.main');
    const userData = await getProfileDataUserController(getTokenUser());

    const getCountReservationTickets = async () => {
        const count = await getReservationsByUserIdController();
        if (count.length) {
            return count.length;
        }
        return 0;
    }

    const countTicket = await getCountReservationTickets();
    const welcome = userData.data.name;
    
    dashboardContainer.innerHTML = await MyAccount(countTicket, welcome);
}