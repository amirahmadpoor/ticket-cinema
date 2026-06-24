import { convertMinutesToHoursMinutes } from "../../utils/helpers/convert-time.js";

export const MyWatchList = ({ id, title, poster_url, duration, description, imdb_rating }) => {
    return (`
        <a a href="/pages/movie-page.html?id-movie=${id}" class="movie-card hidden-elems-top">
        <div class="movie-card__poster">
            <img src=${poster_url} alt=${title}
                class="movie-card__poster-img">
            <div class="movie-card__trailer-badge">تماشا شده</div>
        </div>

        <div class="movie-card__info">
            <div class="movie-card__header">
                <h1 class="movie-card__title">${title}</h1>
                <div class="movie-card__rating">${Number(imdb_rating).toLocaleString('fa-IR')} <svg><use href="#icon-star"></use></svg></div>
            </div>

            <div class="movie-card__meta">
                <span class="movie-card__duration">${convertMinutesToHoursMinutes(duration)}</span>
            </div>

            <p class="movie-card__description">
                ${description}
            </p>
        </div>
        </a>
    `);
}