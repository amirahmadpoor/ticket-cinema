import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import renderHeaderFooter from "../utils/helpers/renderHeader-Footer.js";
import renderMenuMobile from "../utils/helpers/renderMenuMobile.js";
import { getInfoMovieIdBookingController } from "../controllers/pages/cinema-select.page.controller.js";
import { initTicketCinema } from "../components/booking/cinema-list.js";
// import { initSubmitTicket } from "../components/booking/submit-ticket.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";

const idPage = getMovieIdFromUrl();

renderHeaderFooter();
renderMenuMobile();
getInfoMovieIdBookingController(idPage);
// initTicketCinema();
// initSubmitTicket();
setScrollScreen();