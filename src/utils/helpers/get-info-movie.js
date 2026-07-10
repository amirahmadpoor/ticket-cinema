import { getMovieIdService } from "../../services/api/movie.service.js";
import initReadInfo from "../../components/movie/movie-info.js";

export async function getInfoIdMovie(id) {
    const infoMovie = await getMovieIdService(id);
    initReadInfo(infoMovie);
}