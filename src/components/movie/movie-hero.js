import { getMovieIdFromUrl } from "../../utils/helpers/getIDMovie.js";

export function initMovieHero() {

    async function getDataMovieHero() {
        const response = await fetch('http://localhost:3000/api/movies');
        const data = response.json();
        data
            .then(res => getMovie(res.data.movies));
    }

    getDataMovieHero();

    const movieId = getMovieIdFromUrl();

    function getMovie(movies) {
        const result = movies.find(movie => {
            return movie.id === Number(movieId);
        })
        handlerShowMovieData(result);
    }
    const heroMovie = document.querySelector('.hero__movie');
    const heroMovieTitle = document.querySelector('.hero__movie-title');
    const heroMovieImage = document.querySelector('.hero__movie-image');
    const heroMovieVideo = document.querySelector('.hero__movie-video');

    function handlerShowMovieData(movie) {
        heroMovie.style.backgroundImage = movie.poster_url;
        heroMovieTitle.innerText = movie.title;
        heroMovieImage.setAttribute('src', movie.trailer_url);
        heroMovieVideo.setAttribute('poster', movie.poster_url);
    }
}

