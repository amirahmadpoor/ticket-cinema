import renderHeaderFooter from "./utils/renderHeader-Footer.js";
import { initReadInfo } from "./components/read-info-movie.js";
import { initTicketCinema } from "./components/ticketCinemas.js";
import { initSubmitTicket } from "./components/submitTicket.js";
import { setScrollScreen } from "./components/scrollScreen.js";

renderHeaderFooter();
initReadInfo();
initTicketCinema();
initSubmitTicket();
setScrollScreen();