import { getAllCinemaService } from "../../services/api/cinema.service.js";
import { initTicketCinema } from "../../components/booking/cinema-list.js";
import { getCinemaIdService } from "../../services/api/cinema.service.js";
// import { getCinema } from "../../components/booking/dynamic-seats.js";

export const getCinemasController = async () => {
    try {
        const cinemas = await getAllCinemaService();
        initTicketCinema(cinemas);
    }
    catch (err) {
        console.error(err);
    }
}

export const filterCinemasController = async (inputPrice) => {
    const cinemas = await getAllCinemaService();
    const filteredCinemas = cinemas.filter(cinema => cinema.price <= inputPrice);
    initTicketCinema(filteredCinemas);
}

export const getCinemaIdController = async (id) => {
    return await getCinemaIdService(id);
}