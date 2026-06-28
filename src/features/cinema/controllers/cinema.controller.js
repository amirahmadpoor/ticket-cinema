import { initTicketCinema } from "../../cinema/components/cinema-list.js";
import { getCinemaIdService } from "../services/cinema.service.js";
import { showTimesService } from "../../booking/services/showtimes.service.js";
import { getMovieIdService } from "../../movie/services/movie.service.js";
import { initReadInfo } from "../../movie/components/movie-info.js";
import { handleAnimationLoadedRight } from "../../../animations/animation-loaded.js";
import { getMovieIdFromUrl } from "../../../utils/helpers/getIDMovie.js";

const isAvailableShowTime = (showTime) => {
    return new Date(showTime.show_date) > new Date();
};

const movieShowTimes = (showTimes) => {
    return showTimes.filter(showtime => showtime.movie_id === Number(getMovieIdFromUrl()));
}

export const getCinemasController = async () => {

    try {
        let showTimes = await showTimesService();
        showTimes = showTimes.filter(showTime => {
            return isAvailableShowTime(showTime);
        })

        initTicketCinema(movieShowTimes(showTimes));
    } catch (err) {
        console.error(err);
    }
};

export const filterCinemasController = async (inputPrice) => {
    try {
        const showTimes = await showTimesService();
        const filteredCinemas = showTimes.filter(showTime => {
            return showTime.price <= inputPrice && isAvailableShowTime(showTime);
        });

        initTicketCinema(movieShowTimes(filteredCinemas));
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
    } catch (err) {
        console.error(err);
    }
}