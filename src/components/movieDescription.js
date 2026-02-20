import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

export function initMovieDescription() {
    const movieId = getMovieIdFromUrl();

    const result = data.find(movie => {
        return movie.id === Number(movieId);
    })

    const summeryText = document.querySelector('.summery__text');
    const directorName = document.querySelector('.director__name');
    const writersName = document.querySelector('.writers__name');

    summeryText.innerHTML = result.summery;
    directorName.innerHTML = result.director.name;
    writersName.innerHTML = result.writers.map(writer => writer.name).join(' - ');
    
}




