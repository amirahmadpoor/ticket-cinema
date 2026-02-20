import { data } from '../../data/moviesData.js';
import { getMovieIdFromUrl } from '../utils/getIDMovie.js';

export function initReadInfo() {
    const bgInfo = document.querySelector('.info-movie');
    const imagePoster = document.querySelector('.image-poster');
    const movieTitle = document.querySelector('.movie-title');
    const movieDesc = document.querySelector('.movie-desc__text');
    const movieTime = document.querySelector('.movie-time');
    const movieScore = document.querySelector('.movie-score__number');

    const movieId = getMovieIdFromUrl();

    let result = data.find(poster => {
        return poster.id === Number(movieId);
    })

    bgInfo.style.backgroundImage = `url(../assets/images/cover/${result.imageCover})`;
    imagePoster.setAttribute('src', `../assets/images/movies/${result.imageMovie}`);
    movieTitle.innerHTML = result.title;
    movieTime.innerHTML = result.duration;
    movieScore.innerHTML = result.reviews.averageScore;
    movieDesc.textContent = result.summery;
}
