import { getCinemaIdFromUrl } from "../../utils/helpers/getIDCinema.js";
import { getCinemaIdController } from "../../controllers/components/cinema.controller.js";
import { reservationController } from "../../controllers/booking/reservation.controller.js";
import { getShowTimeId } from "../../utils/helpers/get-showtimeId.js";
import { getShowTimeIdController } from "../../controllers/booking/showtime.controller.js";

const seatsCinema = document.querySelector('.seats');
const cinemaName = document.querySelector('.cinema-name');
const cinemaAddress = document.querySelector('.cinema-address');
const amount = document.querySelector('.amount');
const countSeatsCounter = document.querySelector('.count-seats__counter');
const totalPrice = document.querySelector('.total-price');
const btnReserve = document.querySelector('.state-seats__add-cart');

let seatsSelected = [];

const cinemaId = getCinemaIdFromUrl();
const cinema = await getCinemaIdController(Number(cinemaId));
const showtimeId = getShowTimeId();
const showtime = await getShowTimeIdController(Number(showtimeId));


function checkReservation(seatsReserved) {
    const reserved = seatsReserved.filter(seat => seat.status === 'reserved');

    document.querySelectorAll('.chair')
        .forEach(chair => {
            reserved.forEach(seat => {
                if (seat.id === Number(chair.dataset.id)) {
                    chair.classList.add('reserved');
                }
            })
        })
}

function generateSeat({ id }) {
    return `<span class="seat">
    <svg class="chair" data-id=${id}>
    <use href="#icon-chair"></use>
    </svg>
    </span>`
}

function createSeats(seats) {
    let seatsList = seats.map(generateSeat).join('');
    seatsCinema.innerHTML = seatsList;
}

function selectedSeat(seats) {
    seatsCinema.addEventListener('click', (e) => {

        let chair = e.target.closest('.chair');
        let chairId = Number(chair.dataset.id);
        let isSelect = seatsSelected.some(id => id === chairId);
        let reservation = seats.find(seat => seat.id === chairId);
        let seatIndex = seatsSelected.findIndex(seat => seat.id === chairId);

        if (!isSelect) {
            seatsSelected.push(reservation.id);
            chair.classList.add('selected');
        } else {
            seatsSelected.splice(seatIndex, 1);
            chair.classList.remove('selected');
        }
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
    let sumPrice = showtime.price * count;
    totalPrice.innerHTML = `${sumPrice.toLocaleString('fa-IR')} تومان`;
}

function getSeatsSelected() {
    let infoReserve = {
        user_id: localStorage.getItem('userId'),
        showtime_id: Number(showtimeId),
        seat_ids: seatsSelected,
    }
    return infoReserve;
}

export function handlerSeats(seat) {
    cinemaName.innerHTML = cinema.name;
    cinemaAddress.innerHTML = cinema.address;

    createSeats(seat);
    checkReservation(seat);
    selectedSeat(seat);

    btnReserve.addEventListener('click', async (e) => {
        e.preventDefault();
        await reservationController(getSeatsSelected());
    })
}
