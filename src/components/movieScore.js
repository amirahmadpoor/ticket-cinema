import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

const movieId = getMovieIdFromUrl();

const result = data.find(movie => {
    return movie.id === Number(movieId);
})

const scoreValue = document.querySelector('.reviews__scores-value');
const scoreFav = document.querySelector('.reviews__scores-favorable');
function checkScore() {
    scoreValue.innerHTML = result.reviews.averageScore;
    if (result.reviews.averageScore >= 8) {
        scoreValue.style.backgroundColor = 'var(--positive)';
        scoreFav.innerHTML = 'عالی';
    } else if (result.reviews.averageScore >= 5) {
        scoreValue.style.backgroundColor = 'var(--average)';
        scoreFav.innerHTML = 'خوب';
    } else {
        scoreValue.style.backgroundColor = 'var(--negative)';
        scoreFav.innerHTML = 'ضعیف';
    }
}
checkScore();