import { initTicketCinema } from "../../cinema/components/cinema-list.js";
import { getCinemaIdService } from "../services/cinema.service.js";
import { showTimesService } from "../../booking/services/showtimes.service.js";
import { getMovieIdService } from "../../movie/services/movie.service.js";
import initReadInfo from "../../movie/components/movie-info.js";
import { handleAnimationLoadedRight } from "../../../animations/animation-loaded.js";
import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";
import { isAvailableShowTime, filterMovieShowTimes } from "../../../utils/helpers/cinema.helper.js";

const loadCinemaTicketsController = async () => {
    try {
        const showTimes = await showTimesService();
        const availableShowTimes = isAvailableShowTime(showTimes);
        const movieCinemas = filterMovieShowTimes(availableShowTimes);
        initTicketCinema(movieCinemas);
    } catch (err) {
        console.error(err);
    }
};

const filterCinemasController = async (price) => {
    try {
        const showTimes = await showTimesService();

        const filteredShowTimes = showTimes.filter(showTime =>
            showTime.price <= price
        );

        const availableShowTimes = isAvailableShowTime(filteredShowTimes);
        initTicketCinema(filterMovieShowTimes(availableShowTimes));
    } catch (err) {
        console.error(err);
    }
}


const initBookingPageController = async (id) => {
    try {
        const movie = await getMovieIdService(id);
        await initReadInfo(movie);
        await loadCinemaTicketsController();
        handleAnimationLoadedRight();
    } catch (err) {
        console.error(err);
    }
}

export {
    loadCinemaTicketsController,
    filterCinemasController,
    initBookingPageController
}