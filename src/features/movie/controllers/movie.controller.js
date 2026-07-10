import { getAllMoviesService } from "../services/movie.service.js";
import { handleMovieNow, handleMovieTop } from "../components/movie-card.js";
import { getAllCinemaService } from "../../cinema/services/cinema.service.js";
import { initStatistics } from "../../../shared/components/statistics.js";
import { getMovieIdService } from "../services/movie.service.js";
import initMovieDescription from "../components/movie-description.js";
import initMovieHero from "../components/movie-hero.js";
import { initActorsSection } from "../components/actor-card.js";
import initMovieScore from "../components/movie-score.js";
import { getProfileDataUserController } from "../../auth/controllers/auth.controller.js";
import { getTokenUser } from "../../../utils/get-token.js";

const getAllMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        handleMovieCard(movies);
    }
    catch (err) {
        console.error(err);
    }
}


const getHomeMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        const cinemas = await getAllCinemaService();

        const moviesNow = movies.filter(movie => movie.rating < 4.5);
        const moviesTop = movies.filter(movie => movie.rating >= 4.5);

        handleMovieNow(moviesNow);
        handleMovieTop(moviesTop);

        initStatistics(movies, cinemas);

    } catch (err) {
        console.error(err);
    }
}


const getMovieIdController = async (id) => {
    const userName = document.querySelector('.username');
    const movie = await getMovieIdService(id);

    initMovieDescription(movie);
    initMovieHero(movie);
    initActorsSection(movie);
    initMovieScore(movie);
}

export { getAllMoviesController, getHomeMoviesController, getMovieIdController }