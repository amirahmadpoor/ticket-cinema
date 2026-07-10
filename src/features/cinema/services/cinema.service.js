import { createCinemaModel } from "../../../models/cinema.model.js";
import { showTimesService } from "../../booking/services/showtimes.service.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";


const getAllCinemaService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cinemas`);
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data.cinemas.map(createCinemaModel);
    } catch (err) {
        console.error(err);
    }
}

const getCinemaIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/cinemas/${id}`);
        const hasError = await handleApiError(response);
        if (hasError) return;
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);
    }
}

const filterCinemasController = async (inputPrice) => {
    try {
        const showtime = await showTimesService();
        const hasError = await handleApiError(response);
        if (hasError) return;
        return showtime.filter(cinema => cinema.price <= inputPrice);
    } catch (err) {
        console.error(err);
    }
}

export {
    getAllCinemaService,
    getCinemaIdService,
    filterCinemasController
}