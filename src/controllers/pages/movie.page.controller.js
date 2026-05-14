import { getMovieIdService } from "../../services/api/movie.service.js";
import { initMovieDescription } from "../../components/movie/movie-description.js";
import { initMovieHero } from "../../components/movie/movie-hero.js";
import { initActorsSection } from "../../components/movie/actor-card.js";
import { initMovieScore } from "../../components/movie/movie-score.js";
// import { initReview } from "../../components/movie/review.js";

export const getMovieIdController = async (id) => {
    const movie = await getMovieIdService(id);
    initMovieDescription(movie);
    initMovieHero(movie);
    initActorsSection(movie);
    initMovieScore(movie);
    // initReview(movie);
}