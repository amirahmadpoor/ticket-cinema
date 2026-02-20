import { data } from '../../data/moviesData.js';
export function handelMovieCard() {
    const boxMovies = document.querySelector('.now-in-cinema__boxes');
    const topMovies = document.querySelector('.top-movie-week__boxes');
    let hours = 0;
    let minute = 0;

    function showDurationMovie(movie) {
        hours = Math.floor(movie.duration / 60);
        minute = movie.duration % 60;
    }

    function createMovieCard(movie) {
        return `<div class="box">
        <div class="box__image">
        <img src="../../assets/images/movies/${movie.name}.webp" alt="" class="image__movie">
        </div>
        <div class="box__description">
        <div class="box__title-score">
        <a href="pages/movie-page.html?id-movie=${movie.id}" class="box__title">${movie.title}</a>
        <span class="box__score">
        <svg class="icon-star">
        <use href="#icon-star"></use>
        </svg>
        <span class="score__number">${movie.reviews.averageScore}</span>
        </span>
        </div>
        <div class="box__genre">${movie.genre}</div>
        <div class="box__movie-time">
        <svg class="icon-clock">
        <use href="#icon-clock"></use>
        </svg>
        <span class="movie-time__number">${hours}h ${minute}m</span>
        </div>
        </div>
        </div>`
    }

    function createMovieCardTop() {
        data.forEach(movie => {
            if (!movie.top) {
                showDurationMovie(movie);
                boxMovies.insertAdjacentHTML('beforeend', createMovieCard(movie));
            }
            else if (movie.top) {
                showDurationMovie(movie);
                topMovies.insertAdjacentHTML('beforeend', createMovieCard(movie));
            }
        })
    }
    createMovieCardTop();
}
