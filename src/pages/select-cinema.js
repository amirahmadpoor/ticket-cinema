import renderHeaderFooter from "../utils/helpers/renderHeader-Footer.js";
import renderMenuMobile from "../utils/helpers/renderMenuMobile.js";
import { initReadInfo } from "../components/movie/movie-info.js";
import { initTicketCinema } from "../components/booking/cinema-list.js";
import { initSubmitTicket } from "../components/booking/submit-ticket.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";

renderHeaderFooter();
renderMenuMobile();
initReadInfo();
initTicketCinema();
initSubmitTicket();
setScrollScreen();