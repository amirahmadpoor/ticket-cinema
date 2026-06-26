import { BASE_URL } from "../../../config/api.js";

;

export const reservationSeatsService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservation-seats/reservation/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
    return await response.json();
}