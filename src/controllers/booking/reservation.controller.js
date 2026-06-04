import { reservationService } from "../../services/api/reservation.service.js";

export const reservationController = async (infoReserve) => {
    return await reservationService(infoReserve);
}