import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { setMenuMobile } from "../components/layout/mobile-menu.js";
import { setFavorites } from "../components/movie/add-favorites.js";
import { getMovieIdController } from "../controllers/pages/movie.page.controller.js";
import { getReviewsController } from "../controllers/components/review.controller.js";
import { setSelectTab } from "../components/common/tabs-page-movie.js";
import { initBtnTicket } from "../components/booking/ticket-button.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";

const idPage = getMovieIdFromUrl();
setMenuMobile();
setFavorites();
getMovieIdController(idPage);
getReviewsController();
setSelectTab();
initBtnTicket(idPage);
setScrollScreen();