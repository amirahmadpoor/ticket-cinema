import { getMovieIdService } from "../services/api/movie.service.js";
import { getCinemaIdService } from "../services/api/cinema.service.js";
import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { getCinemaIdFromUrl } from "../utils/helpers/getIDCinema.js";
import { initReadInfo } from "../components/movie/movie-info.js";
import { initPaymentsPage } from "../controllers/pages/payments.page.controller.js";

window.addEventListener('DOMContentLoaded', async () => {
    const reservationId = new URLSearchParams(window.location.search).get('id-reservation');

    const movieId = getMovieIdFromUrl();
    const cinemaId = getCinemaIdFromUrl();

    const [infoMovie, infoCinema] = await Promise.all([
        getMovieIdService(movieId),
        getCinemaIdService(cinemaId)
    ]);

    initReadInfo({
        ...infoMovie,
        ...infoCinema
    });
    await initPaymentsPage(reservationId);
});
