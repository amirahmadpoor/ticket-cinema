export function initBtnTicket(id) {

    const getTicketBtn = document.querySelector('.get-ticket');
    const token = localStorage.getItem('accessToken');
    getTicketBtn.addEventListener('click', () => {
        if (!token) {
            window.location.href = '/pages/signin-signup.html';
            return;
        } else {
            getTicketBtn.setAttribute('href', `cinema-selection.html?id-movie=${id}`);
        }
    })
}