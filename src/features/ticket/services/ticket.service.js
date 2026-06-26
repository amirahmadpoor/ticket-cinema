import { BASE_URL } from "../../../config/api.js";

;

export const getInfoTicketIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservations/${id}/ticket`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    );
    return await response.json();
}

// سرویس برای دریافت جزئیات رزرو
export const getReservationDetailsService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservations/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
    return await response.json();
}