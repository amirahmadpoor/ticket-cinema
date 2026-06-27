import { BASE_URL } from "../../../config/api.js";
import { getTokenUser } from "../../../utils/get-token.js";
import { handleApiError } from "../../../utils/error-handler.js";


const getAccessToken = () => {
    return (`Bearer ${getTokenUser()}`);
}

export const reservationService = async (infoReserve) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoReserve)
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}


export const getReservationByIdService = async (id) => {
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

export const getReservationsByUserIdService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data.reservations;
    } catch (err) {
        console.error(err);
    }
}

export const getWatchedMovieService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reservations/watched-movies`, {
            headers: {
                'Authorization': getAccessToken()
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