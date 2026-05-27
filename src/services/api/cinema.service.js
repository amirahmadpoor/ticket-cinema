import { createCinemaModel } from "../../models/cinema.model.js";

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