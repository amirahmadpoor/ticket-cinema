import { getMoviesController } from "../controllers/pages/all-movies.page.controller.js";
import { getTitleMoviesController, getTitleMoviesMobileController } from "../controllers/search/search.controller.js";

document.addEventListener('DOMContentLoaded', getMoviesController);
getTitleMoviesController();
getTitleMoviesMobileController();

