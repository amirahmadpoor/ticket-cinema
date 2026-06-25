import { getAllMoviesService } from "../services/movie.service.js";
import { handleMovieCard } from "../components/movie-card.js";
import { getAllCinemaService } from "../../cinema/services/cinema.service.js";
import { initStatistics } from "../../../shared/components/statistics.js";
import { handleAnimationLoadedRight } from "../../../animations/animation-loaded.js";
import { getMovieIdService } from "../services/movie.service.js";
import { initMovieDescription } from "../components/movie-description.js";
import { initMovieHero } from "../components/movie-hero.js";
import { initActorsSection } from "../components/actor-card.js";
import { initMovieScore } from "../components/movie-score.js";
import { getProfileDataUserController } from "../../auth/controllers/auth.controller.js";
import { getTokenUser } from "../../../utils/get-token.js";

export const getAllMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        handleMovieCard(movies);
    }
    catch (err) {
        console.error(err);
    }
}


export const getHomeMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        const cinemas = await getAllCinemaService();
        handleMovieCard(movies);
        handleAnimationLoadedRight();
        initStatistics(movies, cinemas);
    }
    catch (err) {
        console.error(err);
    }
}


export const getMovieIdController = async (id) => {
    const userName = document.querySelector('.username');
    const movie = await getMovieIdService(id);

    async function setUserName() {
        const response = await getProfileDataUserController(getTokenUser());
        if (!response.success) {
            console.log('error');
            return;
        }
        userName.innerHTML = response.data.name;
    }

    initMovieDescription(movie);
    initMovieHero(movie);
    initActorsSection(movie);
    initMovieScore(movie);
    setUserName();
}