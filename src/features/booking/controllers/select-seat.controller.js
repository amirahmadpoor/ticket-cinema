import { initReadInfo } from "../../movie/components/movie-info.js";
import { getCinemaIdFromUrl } from '../../../utils/helpers/getIDCinema.js';
import { getMovieIdFromUrl } from '../../../utils/helpers/getIDMovie.js';
import { getCinemaIdService } from '../../cinema/services/cinema.service.js';
import { getMovieIdService } from '../../movie/services/movie.service.js';
import { showSeatsController } from '../controllers/seats.controller.js';

export const getInfoMovieCinemaController = async () => {

    const [infoMovie, infoCinema] = await Promise.all([
        getMovieIdService(Number(getMovieIdFromUrl())),
        getCinemaIdService(Number(getCinemaIdFromUrl()))
    ]);

    initReadInfo({
        ...infoMovie,
        ...infoCinema
    });

}

export const initSelectSeat = async () => {
    await getInfoMovieCinemaController();
    showSeatsController();
}