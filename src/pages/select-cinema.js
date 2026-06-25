import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { getInfoMovieIdBookingController } from "../features/cinema/controllers/cinema.controller.js";
import { handelFilterBox } from "../features/cinema/components/filter-box.js";
import { setScrollScreen } from "../shared/components/nav-scroll.js";
import { handleAnimationLoadedRight } from "../animations/animation-loaded.js";

const idPage = getMovieIdFromUrl();

getInfoMovieIdBookingController(idPage);
handelFilterBox();
setScrollScreen();
handleAnimationLoadedRight();