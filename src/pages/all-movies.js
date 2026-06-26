import { getAllMoviesController } from "../features/movie/controllers/movie.controller.js";
import { getTitleMoviesController, getTitleMoviesMobileController } from "../features/search/controllers/search.controller.js";
import { hideLoading } from "../shared/components/loading.js";

document.addEventListener('DOMContentLoaded', async () => {
    await getAllMoviesController();
    await getTitleMoviesController();
    await getTitleMoviesMobileController();
    hideLoading();
});

