import { getMovieIdFromUrl } from "../../utils/helpers/getIDMovie.js";
const cinemaWrapperTicket = document.querySelector('.cinemas');
const movieId = getMovieIdFromUrl();

function createTicketCard({ id, name, address, price, facilities }) {
    return `<div class="cinema" data-id-cinema="${id}">
        <div class="cinema__name-location">
        <div class="cinema__name-price">
        <span class="cinema__name">${name}</span>
        <span class="cinema__price">${price.toLocaleString()} ریال</span>
        </div>
        <a href="#" class="cinema__location">
        <svg><use href="#icon-location"></use></svg>
        <span>${address}</span>
        </a>
        </div>
        <form class="cinema__reservation">
        <span class="cinema__type">3D</span>
        <div class="cinema__footer">
        <span class="cinema__options">${JSON.parse(facilities)}</span>
        <a href="../pages/set-selection.html?id-movie=${movieId}&id-cinema=${id}" class="submit-time" data-id-cinema="${id}">
        <span>ادامه</span>
        <svg><use href="#arrow-left1"></use></svg>
        </a>
        </div >
        </div >
        </form >
        </div > `
}

function notTicketCard() {
    return `<p class="text-not-ticket">سینمایی پیدا نشد!</p>`
}

export function initTicketCinema(cinemas) {
    cinemaWrapperTicket.innerHTML = '';
    if (!cinemas.length) {
        cinemaWrapperTicket.insertAdjacentHTML('beforeend', notTicketCard());
    } else {
        cinemas.forEach(cinema => {
            cinemaWrapperTicket.insertAdjacentHTML('beforeend', createTicketCard(cinema))
        })
    }
}