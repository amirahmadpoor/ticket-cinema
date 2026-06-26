import { getMovieIdFromUrl } from "../utils/helpers/getIDMovie.js";
import { setFavorites } from "../features/movie/components/add-favorites.js";
import { getMovieIdController } from "../features/movie/controllers/movie.controller.js";
import { getReviewsController } from "../features/review/controllers/review.controller.js";
import { setSelectTab } from "../features/review/components/tabs-page-movie.js";
import { initBtnTicket } from "../features/movie/components/ticket-button.js";
import { hideLoading } from "../shared/components/loading.js";

window.addEventListener('DOMContentLoaded', async () => {

    const idPage = getMovieIdFromUrl();
    setFavorites();
    await getMovieIdController(idPage);
    await getReviewsController();
    setSelectTab();
    initBtnTicket(idPage);
    hideLoading();
})