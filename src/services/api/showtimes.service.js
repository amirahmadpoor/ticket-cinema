const BASE_URL = 'http://localhost:3000/api';

export const showTimesService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/showtimes`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching showtimes:', error);
        throw error;
    }
}

export const getShowTimesIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/showtimes/${id}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching showtime by ID:', error);
        throw error;
    }
}