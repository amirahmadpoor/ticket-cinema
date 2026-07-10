import { createSeatModel } from "../../../models/seats.model.js";
import { getTokenUser } from "../../../utils/get-token.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

const getSeatsService = async (cinemaId) => {
    try {
        const response = await fetch(`${BASE_URL}/seats/cinema/${cinemaId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getTokenUser()}`,
            },
        }
        );
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);
    }
}

export {
    getSeatsService
}