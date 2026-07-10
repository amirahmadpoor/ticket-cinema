import { getMovieIdFromUrl } from "./getIDMovie.js";

const isAvailableShowTime = (showTimes) => {
    return showTimes.filter(showTime => new Date(showTime.show_date) >= new Date());
};

const filterMovieShowTimes = (showTimes) => {
    const movieId = Number(getMovieIdFromUrl());
    return showTimes.filter(
        showtime => showtime.movie_id === movieId
    );
};

export {
    isAvailableShowTime,
    filterMovieShowTimes
}
