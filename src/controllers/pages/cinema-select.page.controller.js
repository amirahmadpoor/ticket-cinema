import { getMovieIdService } from "../../services/api/movie.service.js";
import { initReadInfo } from "../../components/movie/movie-info.js";
import { getCinemasController } from "../components/cinema.controller.js";
import { handleAnimationLoadedRight } from "../../animations/animation-loaded-right.js";

export const getInfoMovieIdBookingController = async (id) => {
    const movie = await getMovieIdService(id);

    await initReadInfo(movie);
    await getCinemasController();
    handleAnimationLoadedRight();
}