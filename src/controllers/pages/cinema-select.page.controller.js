import { getMovieIdService } from "../../services/api/movie.service.js";
import { getAllCinemaService } from "../../services/api/cinema.service.js";
import { showTimesService } from "../../services/api/showtimes.service.js";
import { initReadInfo } from "../../components/movie/movie-info.js";
import { initTicketCinema } from "../../components/booking/cinema-list.js";
import { handleAnimationLoadedRight } from "../../animations/animation-loaded-right.js";

export const getInfoMovieIdBookingController = async (id) => {
    const movie = await getMovieIdService(id);
    const cinemas = await getAllCinemaService();
    const showtimes = await showTimesService();

    initReadInfo(movie);
    initTicketCinema(cinemas, await showtimes.data.showtimes);
    handleAnimationLoadedRight();
}