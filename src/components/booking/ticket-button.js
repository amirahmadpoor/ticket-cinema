import { getTokenUser } from "../../utils/get-token.js";

export function initBtnTicket(id) {

    const getTicketBtn = document.querySelector('.get-ticket');
    getTicketBtn.addEventListener('click', () => {
        if (!getTokenUser()) {
            window.location.href = '/pages/signin-signup.html';
            return;
        } else {
            getTicketBtn.setAttribute('href', `cinema-selection.html?id-movie=${id}`);
        }
    })
}