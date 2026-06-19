import { showSeatsController } from '../../controllers/components/seats.controller.js';
import { getInfoMovieCinemaController } from '../booking/select-seat.controller.js';

export const initSelectSeat = async () => {

    await getInfoMovieCinemaController();
    showSeatsController();
}