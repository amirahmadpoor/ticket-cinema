import { getSeatsService } from "../services/seats.service.js";
import { handlerSeats } from "../components/dynamic-seats.js";
import { getCinemaIdFromUrl } from "../../../utils/helpers/getIDCinema.js";

const showSeatsController = async () => {
    const seat = await getSeatsService(getCinemaIdFromUrl());
    handlerSeats(seat);
}

export {
    showSeatsController
}