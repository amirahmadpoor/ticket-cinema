export function initBtnTicket(id) {
    const getTicketBtn = document.querySelector('.get-ticket');
    getTicketBtn.setAttribute('href', `cinema-selection.html?id-movie=${id}`);
}