import { createSeatModel } from "../../models/seats.model.js";
import { getTokenUser } from "../../utils/get-token.js";

const BASE_URL = 'http://localhost:3000/api';

export const getSeatsService = async () => {
    const response = await fetch(`${BASE_URL}/seats`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenUser()}`,
        },
    }
    );
    const data = await response.json();
    return data.data.seats.map(createSeatModel);
}