import { getSeatsService } from "../../services/api/seats.service.js";
import { handlerSeats } from "../../components/booking/dynamic-seats.js";
export const showSeatsController = async () => {
    const seat = await getSeatsService();
    handlerSeats(seat);
}