import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { showSeatsController } from '../controllers/components/seats.controller.js';
import { getInfoMovieIdController } from '../controllers/pages/select-seat.controller.js';

const movieId = getMovieIdFromUrl();
getInfoMovieIdController(movieId);
showSeatsController();