import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { showSeatsController } from '../controllers/components/seats.controller.js';
import { getInfoIdMovie } from "../utils/helpers/get-info-movie.js";

getInfoIdMovie(getMovieIdFromUrl());
showSeatsController();