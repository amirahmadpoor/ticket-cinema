import { getAllCinemaService } from "../../services/api/cinema.service.js";

export const getCinemasController = async () => {
    try {
        const cinemas = await getAllCinemaService();
        initTicketCinema(cinemas);
    }
    catch (err) {
        console.error(err);
    }
}