import { initTicketCinema } from "../../cinema/components/cinema-list.js";
import { getCinemaIdService } from "../services/cinema.service.js";
import { showTimesService } from "../../booking/services/showtimes.service.js";
import { getMovieIdService } from "../../movie/services/movie.service.js";
import { initReadInfo } from "../../movie/components/movie-info.js";
import { handleAnimationLoadedRight } from "../../../animations/animation-loaded.js";

export const getCinemasController = async () => {
    try {
        const showtimes = await showTimesService();
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


export const getInfoMovieIdBookingController = async (id) => {
    try {
        const movie = await getMovieIdService(id);

        await initReadInfo(movie);
        await getCinemasController();
        handleAnimationLoadedRight();
    }catch(err){
        console.error(err);
    }
}