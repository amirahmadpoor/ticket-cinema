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
    <svg class="chair" data-id=${id.row}/${id.column}>
    <use href="#icon-chair"></use>
    </svg>
    </span>`
}

function setCinemaName() {
    cinemaName.innerHTML = cinema.name;
}

function selectedSeat(seat) {
    seat.classList.toggle('active');
    // if (seat.classList.contains('active')) {
    //     seatsSelected.push(seat.dataset.id);
    // }
    
    console.log(seatsSelected);

    countSeats(seatsSelected);
}

function countSeats(seatSelected) {
    let count = seatSelected.length
    console.log(count);

}

getCinema();
setCinemaName();


seatsCinema.innerHTML = cinema.seats.map(seat => createSeats(seat.id)).join('');

seatsCinema.addEventListener('click', (e) => {
    let chair = e.target.closest('.chair');
    selectedSeat(chair);
})
