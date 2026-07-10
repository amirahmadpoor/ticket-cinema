import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

const getInfoTicketIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations/${id}/ticket`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        );
        const hasError = await handleApiError(response);
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

// سرویس برای دریافت جزئیات رزرو
const getReservationDetailsService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations/${id}`, {
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

export {
    getInfoTicketIdService,
    getReservationDetailsService
}