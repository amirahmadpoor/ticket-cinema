import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { setMenuMobile } from "../shared/components/mobile-menu.js";
import { setFavorites } from "../features/movie/components/add-favorites.js";
import { getMovieIdController } from "../features/movie/controllers/movie.controller.js";
import { getReviewsController } from "../features/review/controllers/review.controller.js";
import { setSelectTab } from "../features/review/components/tabs-page-movie.js";
import { initBtnTicket } from "../features/movie/components/ticket-button.js";
import { setScrollScreen } from "../shared/components/nav-scroll.js";

const idPage = getMovieIdFromUrl();
setMenuMobile();
setFavorites();
getMovieIdController(idPage);
getReviewsController();
setSelectTab();
initBtnTicket(idPage);
setScrollScreen();