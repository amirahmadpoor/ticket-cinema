import { cinemas } from "../../data/cinemaData.js";

//create cards ticket cinema
function createTicketCard(cinema) {
    return `<div class="cinema" data-id-cinema="${cinema.id}">
        <div class="cinema__name-location">
        <div class="cinema__name-price">
        <span class="cinema__name">${cinema.name}</span>
        <span class="cinema__price">${cinema.price} تومان</span>
        </div>
        <a href="#" class="cinema__location">
        <svg><use href="#icon-location"></use></svg>
        <span>${cinema.location}</span>
        </a>
        </div>
        <form class="cinema__reservation">
        <span class="cinema__type">${cinema.type}</span>
        <div class="cinema__options">${cinema.options.map(option => `<span>${option}</span>`).join(' ، ')}</div>
        <div class="cinema__play-times">
        <div class="cinema__time">
        ${cinema.playTimes.map(time => `<span class="time">${time}</span>`).join('')}
        </div>
        <button type="button" class="submit-time" data-id-cinema="${cinema.id}">
        <span>ادامه</span>
        <svg><use href="#arrow-left"></use></svg>
        </button>
        </div>
        </form>
        </div>`
}

export function initTicketCinema() {
    const cinemaWrapperTicket = document.querySelector('.cinemas')

    function resetAllCinemas() {
        document.querySelectorAll('.cinema').forEach(cinema => {
            cinema.querySelectorAll('.time').forEach(t => t.classList.remove('selected'));
            cinema.querySelector('.submit-time')?.classList.remove('enable');
        });
    }

    //checked selected one time ticket cinema
    function checkSelected(targetTimeEl) {
        const cinemaEl = targetTimeEl.closest('.cinema');
        if (!cinemaEl) return;

        const times = cinemaEl.querySelectorAll('.time');
        const continueBtn = cinemaEl.querySelector('.submit-time');

        const isSelected = targetTimeEl.classList.contains('selected');

        resetAllCinemas();

        if (!isSelected) {
            times.forEach(btn => btn.classList.remove('selected'));
            targetTimeEl.classList.add('selected');
            continueBtn.classList.add('enable');
        }
    }


    cinemas.forEach(cinema => {
        cinemaWrapperTicket.insertAdjacentHTML('beforeend', createTicketCard(cinema))
    })

    cinemaWrapperTicket.addEventListener('click', (e) => {
        const targetTimeEl = e.target.closest('.time');
        if (!targetTimeEl) return;

        checkSelected(targetTimeEl);
    })
}