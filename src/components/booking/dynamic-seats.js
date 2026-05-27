import { getCinemaIdFromUrl } from "../../utils/helpers/getIDCinema.js";
import { getCinemaIdController } from "../../controllers/components/cinema.controller.js";

const seatsCinema = document.querySelector('.seats');
const cinemaName = document.querySelector('.cinema-name');
const cinemaAddress = document.querySelector('.cinema-address');
const amount = document.querySelector('.amount');
const countSeatsCounter = document.querySelector('.count-seats__counter');
const totalPrice = document.querySelector('.total-price');

const cinemaId = getCinemaIdFromUrl();
const cinema = await getCinemaIdController(Number(cinemaId));


let seatsSelected = [];

// function checkReservation(seatsReserved) {
//     document.querySelectorAll('.chair')
//         .forEach(chair => {
//             seatsReserved.forEach(seat => {
//                 if (seat.id === chair.dataset.id) {
//                     chair.classList.add('reserved');
//                 }
//             })
//         })
// }

function generateSeat({ id }) {
    return `<span class="seat">
    <svg class="chair" data-id=${id}>
    <use href="#icon-chair"></use>
    </svg>
    </span>`
}

function createSeats(seats) {
    console.log(seats);
    let seatsList = seats.map(generateSeat).join('');
    seatsCinema.innerHTML = seatsList;
}

function selectedSeat(seats) {
    seatsCinema.addEventListener('click', (e) => {

        let chair = e.target.closest('.chair');
        let isSelect = seatsSelected.some(seat => seat.id === Number(chair.dataset.id));
        let reservation = seats.find(seat => seat.id === Number(chair.dataset.id));
        let seatIndex = seats.findIndex(seat => seat.id === Number(chair.dataset.id));

        if (!isSelect) {
            reservation.status = 'reserved';
            seatsSelected.push(reservation);
            console.log(reservation);
            console.log(seatsSelected);
        } else {
            reservation.status = 'available';
            seatsSelected.splice(seatIndex, 1);
            console.log(reservation);
            console.log(seatsSelected);
        }
        chair.classList.toggle('selected');
        countSeats(seatsSelected);
    })
}

function countSeats(seatsSelected) {
    let count = seatsSelected.length;
    amount.innerHTML = count;
    countSeatsCounter.innerHTML = count;
    total(count);
}

function total(count) {
    let sumPrice = 120000 * count;
    totalPrice.innerHTML = `${sumPrice.toLocaleString()} تومان`;
}

export function handlerSeats(seat) {
    cinemaName.innerHTML = cinema.name;
    cinemaAddress.innerHTML = cinema.address;
    // checkReservation(seat);
    createSeats(seat);
    selectedSeat(seat);
}
