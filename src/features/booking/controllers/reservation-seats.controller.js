import { reservationSeatsService } from "../services/reservationSeat.service.js";
import { getReservationByIdService } from "../services/reservation.service.js";

export const reservationSeatsController = async (id) => {
    try {
        return await reservationSeatsService(id);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch reservation seats');
    }
};


export const getReservationByIdController = async (id) => {
    try {
        return await getReservationByIdService(id)
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch reservation details');
    }
}