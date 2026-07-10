import { getTicketInfoIdController } from "../controllers/ticket.controller.js";
import { convertMinutesToHoursMinutes } from "../../../utils/helpers/convert-time.js";
import { convertDateToPersian } from "../../../utils/helpers/convert-time.js";

const initTicketPage = async (reservationId) => {
    const titleTicket = document.querySelector('.ticket-card__title');
    const showDate = document.querySelector('.show-date');
    const showDateCart = document.querySelector('.ticket-card__meta-value');
    const durationMovie = document.querySelector('.ticket-card__duration');
    const cinemaName = document.querySelector('.ticket-card__cinema');
    const cinemaAddress = document.querySelector('.ticket-card__address');
    const showTime = document.querySelector('.show-time');
    const messageSuccess = document.querySelector('.success-details__subtitle');
    const successDetailsMovieName = document.querySelector('.movie-name')
    const total = document.querySelector('.total');
    const userName = document.querySelector('.user-name');
    const userPhone = document.querySelector('.user-phone');
    const userEmail = document.querySelector('.user-email');
    const seats = document.querySelectorAll('.seats');
    const { data } = await getTicketInfoIdController(reservationId);


    titleTicket.innerHTML = data.movie_title;
    showDate.innerHTML = convertDateToPersian(data.show_date);
    showDateCart.innerHTML = convertDateToPersian(data.show_date);
    durationMovie.innerHTML = convertMinutesToHoursMinutes(data.movie_duration);
    cinemaName.innerHTML = data.cinema_name;
    cinemaAddress.innerHTML = data.cinema_address;
    showTime.innerHTML = data.show_time.slice(0, 5)
        .replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 1728));
    messageSuccess.innerHTML = ` بلیت شما برای فیلم ${data.movie_title} با موفقیت خریداری شد.`
    successDetailsMovieName.innerHTML = data.movie_title;
    total.innerHTML = `${data.total_price.toLocaleString('fa-IR')} تومان`;

    seats.forEach(seat => seat.innerHTML = data.seats.map(seat => seat.row_label + seat.seat_number).join(' , '));

    userName.innerHTML = data.customer_name;
    userPhone.innerHTML = data.customer_phone;
    userEmail.innerHTML = data.customer_email;
}

export default initTicketPage;