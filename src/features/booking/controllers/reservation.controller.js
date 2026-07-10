import { reservationService, getTicketByIdService, getWatchedMovieService, getReservationByIdService } from "../services/reservation.service.js";
import { getAllReservationsByIdService } from "../services/reservation.service.js";

const reservationController = async (infoReserve) => {
    try {
        return await reservationService(infoReserve);
    } catch (err) {
        console.error(err);
    }
}

const getUserTicketsController = async () => {
    try {
        return await getAllReservationsByIdService();
    } catch (err) {
        console.error(err);
    }
}

const getWatchedMovieController = async () => {
    try {
        return await getWatchedMovieService();
    } catch (err) {
        console.error(err);
    }
}


const getReservationByIdController = async (id) => {
    try {
        return await getReservationByIdService(id)
    } catch (err) {
        console.error(err);
    }
}

const getAllReservationByIdController = async () => {
    try {
        return await getAllReservationsByIdService();
    } catch (err) {
        console.error(err);
    }
}

export {
    reservationController,
    getUserTicketsController,
    getWatchedMovieController,
    getReservationByIdController,
    getAllReservationByIdController,
}
