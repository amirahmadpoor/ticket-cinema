export function initStatistics(movies,cinemas) {
    function countMovies(movies) {
        const countMovies = document.querySelector('.statistics__movie');
        countMovies.innerHTML = movies.length;
    }

    function countCinemas(cinemas) {
        const countCinemas = document.querySelector('.statistics__cinema');
        countCinemas.innerHTML = cinemas.length;
    }
    countMovies(movies);
    countCinemas(cinemas);
}