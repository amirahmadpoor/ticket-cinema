import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";


export const reservationSeatsService = async (id) => {
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