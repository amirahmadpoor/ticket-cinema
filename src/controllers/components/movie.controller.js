import { getAllMoviesService } from "../../services/api/movie.service.js";
import { getMovieIdService } from "../../services/api/movie.service.js";
import { handleMovieCard } from "../../components/movie/movie-card.js";
import { initSearch } from "../../components/search/search.js";
import { initSearchMobile } from "../../components/search/mobile-search.js";
import { initStatistics } from "../../components/movie/statistics.js";
import { initMovieDescription } from "../../components/movie/movie-description.js";
import { initMovieHero } from "../../components/movie/movie-hero.js";
import { initActorsSection } from "../../components/movie/actor-card.js";

export const getMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        handleMovieCard(movies);
        initStatistics(movies);
        initMovieDescription(movies);
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

export const getMovieIdController = async (id) => {
    const movie = await getMovieIdService(id);
    console.log(movie);
    initMovieDescription(movie);
    initMovieHero(movie);
    initActorsSection(movie);
}