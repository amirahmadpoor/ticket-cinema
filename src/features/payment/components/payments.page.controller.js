import { getMovieIdService } from "../../movie/services/movie.service.js";
import { getCinemaIdService } from "../../cinema/services/cinema.service.js";
import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";
import { getCinemaIdFromUrl } from "../../../utils/helpers/getIDCinema.js";
import { reservationSeatsController,getReservationByIdController } from "../../booking/controllers/reservation-seats.controller.js";
import { initReadInfo } from "../../movie/components/movie-info.js";
import { getReservationByIdService } from "../../booking/services/reservation.service.js";
import { getShowTimesIdService } from "../../booking/services/showtimes.service.js";
import { convertDateToPersian } from "../../../utils/helpers/convert-time.js";

export const initPaymentsPage = async (reservationId) => {
    const btnSubmitPayment = document.querySelector('.payment__submit-btn');
    const seatsNumber = document.querySelector('.payment__seats-number');
    const totalPrice = document.querySelector('.payment__total-price');
    const paymentSummary = document.querySelector('.payment__summary-item');
    const time = document.querySelector('.time__info');
    const date = document.querySelector('.date__info');

    const reservationDetails = await getReservationByIdController(reservationId);
    const reservationSeats = await reservationSeatsController(reservationId);
    const showtimeId = await getReservationByIdService(reservationId);
    const infoShowTime = await getShowTimesIdService(showtimeId.data.showtime_id);

    const movieId = getMovieIdFromUrl();
    const cinemaId = getCinemaIdFromUrl();

    const [infoMovie, infoCinema] = await Promise.all([
        getMovieIdService(movieId),
        getCinemaIdService(cinemaId)
    ]);

    initReadInfo({
        ...infoMovie,
        ...infoCinema
    });

    if (!reservationDetails.success) {
        console.error('Failed to fetch reservation details');
        return;
    }
    totalPrice.innerHTML = `${reservationDetails.data.total_price.toLocaleString('fa-IR')} تومان`;
    if (!reservationSeats.success) {
        console.error('Failed to fetch reservation seats');
        return;
    }
    seatsNumber.innerHTML = reservationSeats.data.map(seat => `<span>${seat.row_label}${seat.seat_number.toLocaleString('fa-IR')}</span>`).join(', ');
    if (!showtimeId.success) {
        console.error('Failed to fetch showtime');
        return;
    }
    paymentSummary.innerHTML = `
    <span>قیمت بلیط:</span>
    <span>${infoShowTime.price.toLocaleString('fa-IR')} تومان</span>`;

    time.innerHTML = infoShowTime.show_time.slice(0, 5);

    const d = new Date(infoShowTime.show_date);
    date.innerHTML = convertDateToPersian(infoShowTime.show_date);

    btnSubmitPayment.addEventListener('click', () => {
        location.href = `ticket.html?id-movie=${1}&id-cinema=${2}&id-reservation=${reservationId}`;
    })
}