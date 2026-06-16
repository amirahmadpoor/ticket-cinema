import { initTicketCinema } from "../../components/booking/cinema-list.js";
import { getCinemaIdService } from "../../services/api/cinema.service.js";
import { showTimesService } from "../../services/api/showtimes.service.js";

export const getCinemasController = async () => {
    try {
        const showtimes = await showTimesService();
        console.log(showtimes);
        initTicketCinema(showtimes);
    } catch (err) {
        console.error(err);
    }
};

export const filterCinemasController = async (inputPrice) => {
    try {
        const showtime = await showTimesService();
        const filteredCinemas = showtime.filter(cinema => cinema.price <= inputPrice);
        initTicketCinema(filteredCinemas);
    } catch (err) {
        console.error(err);
    }
};

export const getCinemaIdController = async (id) => {
    return await getCinemaIdService(id);
}