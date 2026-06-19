import { getTicketInfoIdController } from "../booking/ticket.controller.js";
import { convertMinutesToHoursMinutes } from "../../utils/helpers/convert-time.js";

export const initTicketPage = async (reservationId) => {
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

    function toPersianDate(dateString) {
        const date = new Date(dateString);

        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(date);
    }


    console.log(data);


    titleTicket.innerHTML = data.movie.title;
    showDate.innerHTML = toPersianDate(data.showtime.date);
    showDateCart.innerHTML = toPersianDate(data.showtime.date);
    durationMovie.innerHTML = convertMinutesToHoursMinutes(data.movie.duration);
    cinemaName.innerHTML = data.showtime.cinema_name;
    cinemaAddress.innerHTML = data.showtime.cinema_address;
    showTime.innerHTML = data.showtime.time.slice(0, 5)
        .replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 1728));
    messageSuccess.innerHTML = ` بلیت شما برای فیلم ${data.movie.title} با موفقیت خریداری شد.`
    successDetailsMovieName.innerHTML = data.movie.title;
    total.innerHTML = `${data.total_price.toLocaleString('fa-IR')} تومان`;
    seats.forEach(seat => seat.innerHTML = data.seats.map(seat => seat).join(' , '))
    userName.innerHTML = data.customer.name;
    userPhone.innerHTML = data.customer.phone;
    userEmail.innerHTML = data.customer.email;
}