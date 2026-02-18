import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

const movieId = getMovieIdFromUrl();

const actors = document.querySelector('.actors');

const result = data.find(movie => {
    return movie.id === Number(movieId);
})

function createActorCard(actor) {
    return `<a href="#" class="actor">
        <img src="/assets/images/cast/${actor.imageProfile}" alt="" class="actor__image">
        <span class="actor__name">${actor.name}</span>
        <span class="actor__role">${actor.role}</span>
        </a>`
}
result.cast.forEach(actor => {
    actors.insertAdjacentHTML('beforeend', createActorCard(actor))
})