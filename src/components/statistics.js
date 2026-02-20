import { data } from "../../data/moviesData.js"
import { cinemas } from "../../data/cinemaData.js";

export function initStatistics() {
    function countMovies() {
        const countMovies = document.querySelector('.statistics__movie');
        countMovies.innerHTML = data.length;
    }

    function countCinemas() {
        const countCinemas = document.querySelector('.statistics__cinema');
        countCinemas.innerHTML = cinemas.length;
    }
    countMovies();
    countCinemas();
}