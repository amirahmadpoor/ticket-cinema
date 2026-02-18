import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

const movieId = getMovieIdFromUrl();

const result = data.find(movie => {
    return movie.id === Number(movieId);
})
const getTicketBtn = document.querySelector('.get-ticket');
getTicketBtn.setAttribute('href', `cinema-selection.html?id-movie=${result.id}`);