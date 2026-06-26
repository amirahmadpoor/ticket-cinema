
import { BASE_URL } from "../../../config/api.js";



const getAccessToken = () => {
    return (`Bearer ${localStorage.getItem('accessToken')}`);
}

export const reservationService = async (infoReserve) => {
    const response = await fetch(`${BASE_URL}/reservations`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoReserve)
    });

    return await response.json();
}

export const getReservationByIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservations/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
    return await response.json();
}

export const getReservationsByUserIdService = async () => {
    const response = await fetch(`${BASE_URL}/reservations`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
    const data = await response.json();
    return data.data.reservations;
}

export const getWatchedMovieService = async () => {
    const response = await fetch(`${BASE_URL}/reservations/watched-movies`, {
        headers: {
            'Authorization': getAccessToken()
        }
    });
    const data = await response.json();
    return data.data;
}