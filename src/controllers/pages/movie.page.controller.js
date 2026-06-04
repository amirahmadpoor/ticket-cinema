import { getMovieIdService } from "../../services/api/movie.service.js";
import { initMovieDescription } from "../../components/movie/movie-description.js";
import { initMovieHero } from "../../components/movie/movie-hero.js";
import { initActorsSection } from "../../components/movie/actor-card.js";
import { initMovieScore } from "../../components/movie/movie-score.js";
import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";


const userName = document.querySelector('.username');

async function setUserName() {
    const response = await getProfileDataUserController(getTokenUser());
    if (!response.success) {
        console.log('error');
        return;
    }
    userName.innerHTML = response.data.name;
}

export const getMovieIdController = async (id) => {
    const movie = await getMovieIdService(id);
    initMovieDescription(movie);
    initMovieHero(movie);
    initActorsSection(movie);
    initMovieScore(movie);
    setUserName();
}