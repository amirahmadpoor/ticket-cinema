import { renderHeaderFooter } from '../utils/helpers/renderHeader-Footer.js';
import { handlerSeats } from '../components/booking/dynamic-seats.js';
import { showSeatsController } from '../controllers/components/seats.controller.js';
import { getInfoMovieIdController } from '../controllers/pages/select-seat.controller.js';
import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";

const movieId = getMovieIdFromUrl();
renderHeaderFooter();
getInfoMovieIdController(movieId);
// handlerSeats();
showSeatsController();