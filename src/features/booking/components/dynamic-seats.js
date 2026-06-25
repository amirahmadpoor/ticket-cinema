import { getCinemaIdFromUrl } from "../../../utils/helpers/getIDCinema.js";
import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";
import { reservationController } from "../../booking/controllers/reservation.controller.js";
import { getShowTimeId } from "../../../utils/helpers/get-showtimeId.js";
import { getShowTimeIdController } from "../../booking/controllers/showtime.controller.js";
import { handleToastBox } from "../../../utils/helpers/show-toast.js";

const seatsCinema = document.querySelector('.seats');

const amount = document.querySelector('.amount');
const countSeatsCounter = document.querySelector('.count-seats__counter');
const totalPrice = document.querySelector('.total-price');
const btnReserve = document.querySelector('.state-seats__add-cart');

let seatsSelected = [];

const cinemaId = getCinemaIdFromUrl();
const movieId = getMovieIdFromUrl();
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
    let infoReserve = {
        user_id: localStorage.getItem('userId'),
        showtime_id: Number(showtimeId),
        seat_ids: seatsSelected,
    }
    return infoReserve;
}

export function handlerSeats(seat) {
    createSeats(seat);
    checkReservation(seat);
    selectedSeat(seat);

    btnReserve.addEventListener('click', async () => {
        const response = await reservationController(getSeatsSelected());

        if (!response.success && !seatsSelected.length) {
            handleToastBox('حداقل یک صندلی باید انتخاب شود');
            return;
        }
        console.log(response);
        
        location.href = `payment.html?id-movie=${movieId}&id-cinema=${cinemaId}&id-reservation=${response.data.id}`;
    })
}