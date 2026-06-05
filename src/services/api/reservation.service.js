
const BASE_URL = 'http://localhost:3000/api'

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