import { getMovieIdFromUrl } from "../../utils/helpers/getIDMovie.js";
const cinemaWrapperTicket = document.querySelector('.cinemas');
const movieId = getMovieIdFromUrl();

function createTicketCard({ id, name, address, facilities }, showtimes) {
    let item = showtimes.find(showtime => showtime.cinema_id === id && showtime.movie_id === Number(movieId))

    return `<div class="cinema hidden-elems-right" data-id-cinema="${id}">
        <div class="cinema__name-location">
        <div class="cinema__name-price">
        <span class="cinema__name">${name}</span>
        ${item ? `<span class="cinema__price">${Number(item.price).toLocaleString('fa-IR')} تومان</span>` : ''}
        </div >
    <a href="#" class="cinema__location">
        <svg><use href="#icon-location"></use></svg>
        <span>${address}</span>
    </a>
        </div >
    <form class="cinema__reservation">
        <span class="cinema__type">3D</span>
        <div class="cinema__footer">
            <span class="cinema__options">${JSON.parse(facilities)}</span>
            <a href="../pages/set-selection.html?id-movie=${movieId}&id-cinema=${id}&id_showtime=${item.id}" class="submit-time" data-id-cinema="${id}">
                <span>ادامه</span>
                <svg><use href="#arrow-left1"></use></svg>
            </a>
        </div >
    </div >
    </form >
    </div > `
}

function notTicketCard() {
    return `< p class="text-not-ticket" > سینمایی پیدا نشد!</ > `
}

export function initTicketCinema(cinemas, showtimes) {
    if (!cinemas.length) {
        cinemaWrapperTicket.innerHTML = notTicketCard();
    } else {
        cinemaWrapperTicket.innerHTML = cinemas.map(cinema => createTicketCard(cinema, showtimes)).join('');
    }
}