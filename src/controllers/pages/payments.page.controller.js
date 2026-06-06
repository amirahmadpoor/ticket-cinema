import { reservationSeatsController } from "../booking/reservation-seats.controller.js";
import { getReservationByIdController } from "../booking/reservation-seats.controller.js";

export const initPaymentsPage = async (reservationId) => {
    const seatsNumber = document.querySelector('.payment__seats-number');
    const totalPrice = document.querySelector('.payment__total-price');

    const reservationDetails = await getReservationByIdController(reservationId);
    if (!reservationDetails.success) {
        console.error('Failed to fetch reservation details');
        return;
    }
    console.log(reservationDetails.data);
    totalPrice.innerHTML = `${reservationDetails.data.total_price.toLocaleString('fa-IR')} تومان`;
    
    const reservationSeats = await reservationSeatsController(reservationId);
    if (!reservationSeats.success) {
        console.error('Failed to fetch reservation seats');
        return;
    }
    console.log(reservationSeats.data);
    seatsNumber.innerHTML = reservationSeats.data.map(seat => `<span>${seat.row_label}${seat.seat_number.toLocaleString('fa-IR')}</span>`).join(', ');
}
