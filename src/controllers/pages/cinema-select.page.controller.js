import { getMovieIdService } from "../../services/api/movie.service.js";
import { initReadInfo } from "../../components/movie/movie-info.js";
import { getCinemasController } from "../components/cinema.controller.js";
import { handleAnimationLoadedRight } from "../../animations/animation-loaded.js";

export const getInfoMovieIdBookingController = async (id) => {
    try {
        const movie = await getMovieIdService(id);

        await initReadInfo(movie);
        await getCinemasController();
        handleAnimationLoadedRight();
    }catch(err){
        console.error(err);
    }
}