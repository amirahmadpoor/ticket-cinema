import { initReadInfo } from "../../components/movie/movie-info.js";
import { getCinemaIdFromUrl } from '../../utils/helpers/getIDCinema.js';
import { getMovieIdFromUrl } from '../../utils/helpers/getIDMovie.js';
import { getCinemaIdService } from '../../services/api/cinema.service.js';
import { getMovieIdService } from '../../services/api/movie.service.js';

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