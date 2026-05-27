import { renderHeaderFooter } from '../utils/helpers/renderHeader-Footer.js';
import { handlerSeats } from '../components/booking/dynamic-seats.js';
import { showSeatsController } from '../controllers/components/seats.controller.js';

renderHeaderFooter();
handlerSeats();
showSeatsController();