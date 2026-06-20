import { reservationService } from "../../services/api/reservation.service.js";
import { getReservationsByUserIdService } from "../../services/api/reservation.service.js";
export const reservationController = async (infoReserve) => {
    return await reservationService(infoReserve);
}

export const getReservationsByUserIdController = async () => {
    const response = await getReservationsByUserIdService();
    const userId = localStorage.getItem('userId');
    return response.filter(reserve => reserve.user_id == userId)
        .filter(reserve => reserve.payment_status === 'paid');
}