import { cinemas } from "../../data/cinemaData.js";
import { getCinemaIdFromUrl } from "../utils/getIdCinema.js";

const seatsCinema = document.querySelector('.seats');
const cinemaName = document.querySelector('.cinema-name');
const amount = document.querySelector('.amount');
const countSeatsCounter = document.querySelector('.count-seats__counter');
const totalPrice = document.querySelector('.total-price');

const cinemaId = getCinemaIdFromUrl();

let cinema = getCinema();

let seatsSelected = [];

function getCinema() {
    return cinemas.find(cinema => cinema.id === Number(cinemaId));
}

function createSeats(id) {
    return `<span class="seat">
    <svg class="chair" data-id=${id}>
    <use href="#icon-chair"></use>
    </svg>
    </span>`
}

function setCinemaName() {
    cinemaName.innerHTML = cinema.name;
}

function selectedSeat(chair, cinema) {
    const reservation = cinema.seats.find(seat => seat.id === chair.dataset.id)
    const checkReservation = seatsSelected.some(seat => seat.id === chair.dataset.id);

    if (!checkReservation) {
        reservation.booked = true;
        seatsSelected.push(reservation);
        chair.classList.toggle('active');
    } else {
        reservation.booked = false;
        const reRender = seatsSelected.filter(seat => seat.id !== chair.dataset.id);
        seatsSelected = reRender;
        chair.classList.toggle('active');
    }

    countSeats(seatsSelected);
    console.log(seatsSelected);

}

function countSeats(seatSelected) {
    let count = seatSelected.length
    countSeatsCounter.innerHTML = count;
    amount.innerHTML = count;
    total(count)
}

function total(count) {
    let sumPrice = cinema.price * count;
    totalPrice.innerHTML = `${sumPrice.toLocaleString()} تومان`;
}

getCinema();
setCinemaName();


seatsCinema.innerHTML = cinema.seats.map(seat => createSeats(seat.id)).join('');

seatsCinema.addEventListener('click', (e) => {
    let chair = e.target.closest('.chair');
    selectedSeat(chair, cinema);
})
