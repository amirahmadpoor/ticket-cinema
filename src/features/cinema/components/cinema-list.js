import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";
const cinemaWrapperTicket = document.querySelector('.cinemas');
const movieId = getMovieIdFromUrl();

function createTicketCard(showTimes) {

    const time = showTimes.show_time.slice(0, 5);

    const persianTime = time.replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 1728));

    return (
        `<div class="cinema hidden-elems-right" data-id-cinema="${showTimes.id}">
        <div class="cinema__name-location">
            <div class="cinema__name-price">
                <span class="cinema__name">${showTimes.cinema_name}</span>
                ${Number(showTimes.price) ? `<span class="cinema__price">${Number(showTimes.price).toLocaleString('fa-IR')} تومان</span>` : 'تکمیل شد'}
            </div >
            <a href="#" class="cinema__location">
                <svg><use href="#icon-location"></use></svg>
                <span>${showTimes.cinema_address}</span>
            </a>
        </div >
        <form class="cinema__reservation">
            <span class="cinema__type">3D</span>
            <span> سانس: ${persianTime}</span>
            <div class="cinema__footer">
                <span class="cinema__options">${JSON.parse(showTimes.cinema_facilities)}</span>
                <a href="../pages/set-selection.html?id-movie=${movieId}&id-cinema=${showTimes.cinema_id}&id-showtime=${showTimes.id}" class="submit-time" data-id-cinema="${showTimes.id}">
                    <span>ادامه</span>
                    <svg><use href="#arrow-left1"></use></svg>
                </a>
            </div >
        </form >
    </div > `
    )
}

function notTicketCard() {
    return `<p class="text-not-ticket" > سینمایی پیدا نشد!</p> `
}

export function initTicketCinema(showTimes) {
    if (!showTimes.length) {
        cinemaWrapperTicket.innerHTML = notTicketCard();
    } else {
        const movieShowTimes = showTimes.filter(
            showtime => showtime.movie_id === Number(movieId)
        );

        cinemaWrapperTicket.innerHTML = movieShowTimes.map(cinema => createTicketCard(cinema)).join('');
    }
}