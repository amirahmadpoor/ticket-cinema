import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";``

export function setFavorites() {
    const btnAdd = document.querySelector('.add-favorites');
    if (!btnAdd) return;

    const movieId = getMovieIdFromUrl();
    const movie = data.find(m => m.id === Number(movieId));
    if (!movie) return;

    function __add() {
        if (!btnAdd.classList.contains('active')) {
            btnAdd.classList.add('active');
            movie.favorites.isFavorite = true;
        } else {
            movie.favorites.isFavorite = false;
            btnAdd.classList.remove('active');
        }
    }

    btnAdd.addEventListener('click', __add);
}
