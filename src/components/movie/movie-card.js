export function handleMovieCard(movies) {
    let path = location.pathname;
    const boxMovies = document.querySelector('.now-in-cinema__boxes');
    const topMovies = document.querySelector('.top-movie-week__boxes');

    function checkPath() {
        return path.includes('all-movies.html');
    }

    function convertMinutesToHoursMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }


    function generateMovieCard(movie) {
        return `<div class="box">
        <div class="box__image">
        <img src="${movie.trailer_url}" alt="" class="image__movie">
        </div>
        <div class="box__description">
        <div class="box__title-score">
        <a href="/pages/movie-page.html?id-movie=${movie.id}" class="box__title">${movie.title}</a>
        <span class="box__score">
        <svg class="icon-star">
        <use href="#icon-star"></use>
        </svg>
        <span class="score__number">${movie.score}</span>
        </span>
        </div>
        <div class="box__genre">${movie.genre}</div>
        <div class="box__movie-time">
        <svg class="icon-clock">
        <use href="#icon-clock"></use>
        </svg>
        <span class="movie-time__number">${convertMinutesToHoursMinutes(movie.duration)}</span>
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
                if (Number(movie.score) < 8) {
                    insertBoxMovie(movie);
                }
                else if (Number(movie.score) >= 8) {
                    insertBoxMovieTop(movie);
                }
            }
        })
    }
    handlerMovieCards(movies);
}
