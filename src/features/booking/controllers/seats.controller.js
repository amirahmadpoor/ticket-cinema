import { getSeatsService } from "../services/seats.service.js";
import { handlerSeats } from "../components/dynamic-seats.js";
export const showSeatsController = async () => {
    const seat = await getSeatsService();
    handlerSeats(seat); 
}