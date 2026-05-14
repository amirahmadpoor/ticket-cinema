import { getMovieIdService } from "../../services/api/movie.service.js";
import { getAllCinemaService } from "../../services/api/cinema.service.js";
import { initReadInfo } from "../../components/movie/movie-info.js";
import { initTicketCinema } from "../../components/booking/cinema-list.js";

export const getInfoMovieIdBookingController = async (id) => {
    const movie = await getMovieIdService(id);
    const cinemas = await getAllCinemaService();
    console.log(cinemas);
    
    initReadInfo(movie);
    initTicketCinema(cinemas);
}