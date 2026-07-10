import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

const showTimesService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/showtimes`);
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data.showtimes;
    } catch (error) {
        console.error('Error fetching showtimes:', error);
        throw error;
    }
}

const getShowTimesIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/showtimes/${id}`);
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching showtime by ID:', error);
        throw error;
    }
}

export {
    showTimesService,
    getShowTimesIdService
}