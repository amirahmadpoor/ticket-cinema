import { reservationSeatsService, reservationSeatsByReservationIdService } from "../services/reservationSeat.service.js";
import { getReservationByIdService } from "../services/reservation.service.js";

const reservationSeatsController = async (id) => {
    try {
        return await reservationSeatsService(id);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch reservation seats');
    }
};


const reservationSeatsByReservationIdController = async (showtimeId) => {
    try {
        return await reservationSeatsByReservationIdService(showtimeId);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch reservation seats');
    }
}

export {
    reservationSeatsController,
    reservationSeatsByReservationIdController
}