import { getAllMoviesService } from "../../services/api/movie.service.js";
import { handleMovieCard } from "../../components/movie/movie-card.js";
import { initSearch } from "../../components/search/search.js";
import { initSearchMobile } from "../../components/search/mobile-search.js";

export const getMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        handleMovieCard(movies);
    }
    catch (err) {
        console.error(err);
    }
}

export const getTitleMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearch(movies);
    }
    catch (err) {
        console.log(err);
    }
}

export const getTitleMoviesMobileController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearchMobile(movies);
    }
    catch (err) {
        console.log(err);
    }
}