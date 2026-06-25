import { createCinemaModel } from "../../../models/cinema.model.js";
import { showTimesService } from "../../booking/services/showtimes.service.js";

const BASE_URL = 'http://localhost:3000/api';

export const getAllCinemaService = async () => {
    const response = await fetch(`${BASE_URL}/cinemas`);
    const data = await response.json();
    return data.data.cinemas.map(createCinemaModel);
}

export const getCinemaIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/cinemas/${id}`);
    const data = await response.json();
    return data.data;
}

export const filterCinemasController = async (inputPrice) => {
    try {
        const showtime = await showTimesService();
        console.log(showtime);
        return showtime.filter(cinema => cinema.price <= inputPrice);
    } catch (err) {
        console.error(err);
    }
};