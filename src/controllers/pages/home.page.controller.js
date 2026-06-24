import { getAllMoviesService } from "../../services/api/movie.service.js";
import { getAllCinemaService } from "../../services/api/cinema.service.js";
import { handleMovieCard } from "../../components/movie/movie-card.js";
import { initStatistics } from "../../components/movie/statistics.js";
import { handleAnimationLoadedRight } from "../../animations/animation-loaded.js";

export const getMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        const cinemas= await getAllCinemaService();
        handleMovieCard(movies);
        handleAnimationLoadedRight();
        initStatistics(movies,cinemas);
    }
    catch (err) {
        console.error(err);
    }
}