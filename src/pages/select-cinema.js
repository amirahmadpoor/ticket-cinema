import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { getInfoMovieIdBookingController } from "../controllers/pages/cinema-select.page.controller.js";
import { handelFilterBox } from "../components/layout/filter-box.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";
import { handleAnimationLoadedRight } from "../animations/animation-loaded-right.js";

const idPage = getMovieIdFromUrl();

getInfoMovieIdBookingController(idPage);
handelFilterBox();
handleAnimationLoadedRight()
setScrollScreen();