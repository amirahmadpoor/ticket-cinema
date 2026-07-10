import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { initBookingPageController } from "../features/cinema/controllers/cinema.controller.js";
import { handelFilterBox } from "../features/cinema/components/filter-box.js";
import { handleAnimationLoadedRight } from "../animations/animation-loaded.js";
import { hideLoading } from "../shared/components/loading.js";

window.addEventListener('DOMContentLoaded', async () => {
    const idPage = getMovieIdFromUrl();

    await initBookingPageController(idPage);
    handelFilterBox();
    hideLoading();
    handleAnimationLoadedRight();
})