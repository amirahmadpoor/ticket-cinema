const BASE_URL = 'http://localhost:3000/api';

export const getInfoTicketIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/reservations/${id}/ticket`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    );
    return await response.json();
}

// export const getInfoTickets = async () => {

// }