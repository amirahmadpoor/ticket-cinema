import { getCinemaIdFromUrl } from "../../../utils/helpers/getIDCinema.js";
import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";
import { reservationController } from "../../booking/controllers/reservation.controller.js";
import { getShowTimeId } from "../../../utils/helpers/get-showtimeId.js";
import { getShowTimeIdController } from "../../booking/controllers/showtime.controller.js";
import { handleToastBox } from "../../../utils/helpers/show-toast.js";
import { getAllReservationByIdController } from "../controllers/reservation.controller.js";
import { reservationSeatsByReservationIdController } from "../controllers/reservation-seats.controller.js";

const seatsCinema = document.querySelector('.seats');
const amount = document.querySelector('.amount');
const countSeatsCounter = document.querySelector('.count-seats__counter');
const totalPrice = document.querySelector('.total-price');
const btnReserve = document.querySelector('.state-seats__add-cart');
const cinemaId = getCinemaIdFromUrl();
const movieId = getMovieIdFromUrl();
const showtime = await getShowTimeIdController(Number(getShowTimeId()));
let seatsSelected = [];


function checkReservation({ id, status }) {
    document.querySelectorAll('.chair')
        .forEach(chair => {
            id === Number(chair.dataset.id) && chair.classList.add('reserved');
        })
}

function generateSeat({ id }) {
    return `
    <span class="seat">
        <svg class="chair" data-id=${id}><use href="#icon-chair"></use></svg>
    </span>
    `
}

function createSeats(seats) {
    let seatsList = seats.map(generateSeat).join('');
    seatsCinema.innerHTML = seatsList;
}

function selectedSeat(seats) {
    seatsCinema.addEventListener('click', (e) => {

        let chair = e.target.closest('.chair');

        if (chair.classList.contains('reserved')) return;

        let chairId = Number(chair.dataset.id);
        let isSelect = seatsSelected.some(id => id === chairId);
        let reservation = seats.find(seat => seat.id === chairId);
        let seatIndex = seatsSelected.findIndex(id => id === chairId);

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
    return {
        user_id: localStorage.getItem('userId'),
        showtime_id: Number(getShowTimeId()),
        seat_ids: seatsSelected,
    }
}

async function handleReservedSeats() {
    const response = await reservationSeatsByReservationIdController(Number(getShowTimeId()));
    response.forEach(res => {
        res.status === 'reserved' && checkReservation(res);
    })
}

function handleStyleSeat(seat) {
    const maxSeatNumber = Math.max(...seat.map(seat => seat.seat_number));
    seatsCinema.style.gridTemplateColumns = `repeat(${maxSeatNumber}, 1fr)`;
    seatsCinema.style.gridTemplateRows = `repeat(${maxSeatNumber}, 1fr)`;
}

async function handlerSeats(seat) {
    createSeats(seat);
    handleStyleSeat(seat);
    await handleReservedSeats();
    selectedSeat(seat);

    btnReserve.addEventListener('click', async () => {
        if (!seatsSelected.length) {
            handleToastBox('حداقل یک صندلی باید انتخاب شود');
            return;
        }

        const response = await reservationController(getSeatsSelected());
        console.log(response);

        if (!response.success) {
            handleToastBox('خطا در رزرو');
            return;
        }
        location.href = `payment.html?id-movie=${movieId}&id-cinema=${cinemaId}&id-reservation=${response.data.id}`;
    })
}

export {
    handlerSeats
}