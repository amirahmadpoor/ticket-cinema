import { convertMinutesToHoursMinutes } from "../../../utils/helpers/convert-time.js";

export function handleMovieCard(movies) {
    let path = location.pathname;
    const boxMovies = document.querySelector('.now-in-cinema__boxes');
    const topMovies = document.querySelector('.top-movie-week__boxes');

    function checkPath() {
        return path.includes('all-movies.html');
    }


    function generateMovieCard({ id, trailer_url, title, rating, genre, duration }) {
        return `
        <div class="box" data-id=${id}>
        <div class="box__image">
        <img src="${trailer_url}" alt="" class="image__movie" lazy>
        </div>
        <div class="box__description">
        <div class="box__title-score">
        <a href="/pages/movie-page.html?id-movie=${id}" class="box__title">${title}</a>
        <span class="box__score">
        <svg class="icon-star">
        <use href="#icon-star"></use>
        </svg>
        <span class="score__number">${rating}</span>
        </span>
        </div>
        <div class="box__genre">${genre}</div>
        <div class="box__movie-time">
        <svg class="icon-clock">
        <use href="#icon-clock"></use>
        </svg>
        <span class="movie-time__number">${convertMinutesToHoursMinutes(duration)}</span>
        </div>
        </div>
        </div>`
    }

    function insertBoxMovie(movie) {
        boxMovies.insertAdjacentHTML('beforeend', generateMovieCard(movie));
    }

    function insertBoxMovieTop(movie) {
        topMovies.insertAdjacentHTML('beforeend', generateMovieCard(movie));
    }

    function handlerMovieCards(moviesData) {
        moviesData.forEach(movie => {
            if (checkPath()) {
                insertBoxMovie(movie);
            } else {
                if (Number(movie.rating) < 4.6) {
                    insertBoxMovie(movie);
                }
                else if (Number(movie.rating) >= 4.5) {
                    insertBoxMovieTop(movie);
                }
            }
        })
    }
    handlerMovieCards(movies);
}
