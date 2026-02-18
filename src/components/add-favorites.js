import { data } from "../../data/moviesData.js";

function setFavorites() {
    let btnAdd = document.querySelector('.add-favorites');

    let getUrlId = new URLSearchParams(location.search);
    let movieId = getUrlId.get('id');
    movieId = Number(movieId);

    function __add() {
        if (!btnAdd.classList.contains('active')) {
            btnAdd.classList.add('active');
            data[movieId + 1].favorites.isFavorite = true;
        } else {
            data[movieId + 1].favorites.isFavorite = false;
            btnAdd.classList.remove('active');
        }
    }

    btnAdd.addEventListener('click', __add);
}

export {setFavorites};