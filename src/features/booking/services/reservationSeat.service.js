import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";
import { getTokenUser } from "../../../utils/get-token.js";

const reservationSeatsService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/reservation-seats/reservation/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

const reservationSeatsByReservationIdService = async (showtimeId) => {
    try {
        const response = await fetch(`${BASE_URL}/reservation-seats/showtime/${showtimeId}/available`, {
            headers: {
                'Authorization': getTokenUser()
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);
    }
}

export {
    reservationSeatsService,
    reservationSeatsByReservationIdService
}