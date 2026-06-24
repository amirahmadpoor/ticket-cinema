import { getAllMoviesService } from "../../services/api/movie.service.js";
import { handleMovieCard } from "../../components/movie/movie-card.js";

export const getMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        handleMovieCard(movies);
    }
    catch (err) {
        console.error(err);
    }
}
