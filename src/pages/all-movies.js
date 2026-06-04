import { getMoviesController } from "../controllers/pages/all-movies.page.controller.js";
import { getTitleMoviesController } from "../controllers/pages/all-movies.page.controller.js";
import { getTitleMoviesMobileController } from "../controllers/pages/all-movies.page.controller.js";

document.addEventListener('DOMContentLoaded', getMoviesController);
getTitleMoviesController();
getTitleMoviesMobileController();

