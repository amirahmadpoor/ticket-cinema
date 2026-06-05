import { getCinemaIdController } from "../../controllers/components/cinema.controller.js";
import { getCinemaIdService } from "../../services/api/cinema.service.js";
import { initReadInfo } from "../../components/movie/movie-info.js";

export const getInfoCinema = async (id) => {
    const infoCinema = await getCinemaIdService(id);
    console.log(infoCinema);
    
    initReadInfo(infoCinema);
}
