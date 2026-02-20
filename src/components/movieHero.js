import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

export function initMovieHero() {

    const movieId = getMovieIdFromUrl();

    const result = data.find(movie => {
        return movie.id === Number(movieId);
    })
    const heroMovie = document.querySelector('.hero__movie');
    const heroMovieTitle = document.querySelector('.hero__movie-title');
    const heroMovieImage = document.querySelector('.hero__movie-image');
    const heroMovieVideo = document.querySelector('.hero__movie-video');
    heroMovie.style.backgroundImage = `url(/assets/images/cover/${result.imageCover})`;
    heroMovieTitle.innerText = result.title;
    heroMovieImage.setAttribute('src', `/assets/images/movies/${result.name}.webp`);
    heroMovieVideo.setAttribute('poster', `/assets/images/poster/${result.imagePoster}`);
}