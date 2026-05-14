function createTicketCard({ id, name, address, price, city, facilities }) {
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
        <a href="../pages/set-selection.html?id-cinema=${id}" class="submit-time" data-id-cinema="${id}">
        <span>ادامه</span>
        <svg><use href="#arrow-left1"></use></svg>
        </a>
        </div>
        </div>
        </form>
        </div>`
}

export function initTicketCinema(cinemas) {
    const cinemaWrapperTicket = document.querySelector('.cinemas')

    cinemas.forEach(cinema => {
        cinemaWrapperTicket.insertAdjacentHTML('beforeend', createTicketCard(cinema))
    })
    // function resetAllCinemas() {
    //     document.querySelectorAll('.cinema').forEach(cinema => {
    //         cinema.querySelectorAll('.time').forEach(t => t.classList.remove('selected'));
    //         cinema.querySelector('.submit-time')?.classList.remove('enable');
    //     });
    // }

    // //checked selected one time ticket cinema
    // function checkSelected(targetTimeEl) {
    //     const cinemaEl = targetTimeEl.closest('.cinema');
    //     if (!cinemaEl) return;

    //     const times = cinemaEl.querySelectorAll('.time');
    //     const continueBtn = cinemaEl.querySelector('.submit-time');

    //     const isSelected = targetTimeEl.classList.contains('selected');

    //     resetAllCinemas();

    //     if (!isSelected) {
    //         times.forEach(btn => btn.classList.remove('selected'));
    //         targetTimeEl.classList.add('selected');
    //         continueBtn.classList.add('enable');
    //     }
    // }



    // cinemaWrapperTicket.addEventListener('click', (e) => {
    //     const targetTimeEl = e.target.closest('.time');
    //     if (!targetTimeEl) return;

    //     checkSelected(targetTimeEl);
    // })
}