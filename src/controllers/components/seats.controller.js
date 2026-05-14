import { getSeatsService } from "../../services/api/seats.service.js";
import { createSeats } from "../../components/booking/dynamic-seats.js";
export const showSeatsController = async () => {
    const seat = await getSeatsService();
    console.log(seat);
    
    createSeats(seat);
}