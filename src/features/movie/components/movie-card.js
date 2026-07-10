import { convertMinutesToHoursMinutes } from "../../../utils/helpers/convert-time.js";

const boxMovies = document.querySelector('.now-in-cinema__boxes');
const topMovies = document.querySelector('.top-movie-week__boxes');


function generateMovieCard({ id, trailer_url, title, rating, genres, duration }) {
    return (`
    <div class="box" data-id="${id}">
        <div class="box__image">
            <img src="${trailer_url}" alt="" class="image__movie">
        </div>

        <div class="box__description">
            <div class="box__title-score">
                <a href="/pages/movie-page.html?id-movie=${id}" class="box__title">
                    ${title}
                </a>

                <span class="box__score">
                    ${rating}
                </span>
            </div>

            <div class="box__genre">${genres}</div>

            <div class="box__movie-time">
                ${convertMinutesToHoursMinutes(duration)}
            </div>
        </div>
    </div>
    `);
}


function handleMovieNow(movies) {
    boxMovies.innerHTML = movies.map(generateMovieCard).join('');
}


function handleMovieTop(movies) {
    topMovies.innerHTML = movies.map(generateMovieCard).join('');
}

export {
    handleMovieNow,
    handleMovieTop
}