import { createSeatModel } from "../../models/seats.model.js";

const BASE_URL = 'http://localhost:3000/api';

export const getSeatsService = async () => {
    const response = await fetch(`${BASE_URL}/seats`);
    const data = await response.json();
    return data.data.seats.map(createSeatModel);
}