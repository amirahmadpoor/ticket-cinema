import { BASE_URL } from "../../../config/api.js";
import { getTokenUser } from "../../../utils/get-token.js";
import { handleApiError } from "../../../utils/error-handler.js";
import { getShowTimeId } from "../../../utils/helpers/get-showtimeId.js";

const getAccessToken = () => {
    return (`Bearer ${getTokenUser()}`);
}

const reservationService = async (infoReserve) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            method: 'POST',
            headers: {
                'Authorization': getAccessToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoReserve)
        });
        const hasError = await handleApiError(await response);
        if (hasError) return;

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const getAllReservationsByIdService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            headers: {
                'Authorization': getAccessToken()
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        let data = await response.json();
        return data.data.reservations;
    } catch (err) {
        console.error(err);
    }
}


const getReservationByIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations/${id}`, {
            headers: {
                'Authorization': getAccessToken()
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

const getTicketByIdService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            headers: {
                'Authorization': getAccessToken()
            }
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        console.log(data.data.reservations);

        return data.data.reservations;
    } catch (err) {
        console.error(err);
    }
}

const getWatchedMovieService = async () => {
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

export {
    reservationService,
    getAllReservationsByIdService,
    getReservationByIdService,
    getTicketByIdService,
    getWatchedMovieService
}