import { getAllMoviesController } from "../features/movie/controllers/movie.controller.js";
import { getTitleMoviesController, getTitleMoviesMobileController } from "../features/search/controllers/search.controller.js";

document.addEventListener('DOMContentLoaded', getAllMoviesController);
getTitleMoviesController();
getTitleMoviesMobileController();

