const BASE_URL = 'http://localhost:3000/api';

export const reservationSeatsService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservation-seats/${id}`);
    return await response.json();
}