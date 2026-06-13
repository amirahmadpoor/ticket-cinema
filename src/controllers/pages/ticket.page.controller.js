import { getTicketInfoIdController } from "../booking/ticket.controller.js";


export const initTicketPage = async (reservationId) => {
    const titleTicket = document.querySelector('.ticket-card__title');
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


    titleTicket.innerHTML = data.movie.title;
    durationMovie.innerHTML = data.movie.duration;
    cinemaName.innerHTML = data.showtime.cinema_name;
    cinemaAddress.innerHTML = data.showtime.cinema_address;
    showTime.innerHTML = data.showtime.time;
    messageSuccess.innerHTML = ` بلیت شما برای فیلم ${data.movie_title} با موفقیت خریداری شد.`
    successDetailsMovieName.innerHTML = data.movie.title;
    total.innerHTML = `${data.total_price.toLocaleString('fa-IR')} تومان`;
    seats.forEach(seat => seat.innerHTML = data.seats.map(seat => seat).join(' , '))
    userName.innerHTML = data.customer.name;
    userPhone.innerHTML = data.customer.phone;
    userEmail.innerHTML = data.customer.email;
}