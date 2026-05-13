import renderHeaderFooter from "../utils/helpers/renderHeader-Footer.js";
import renderMenuMobile from "../utils/helpers/renderMenuMobile.js";
import { getMoviesController } from "../controllers/components/movie.controller.js";
import { getTitleMoviesController } from "../controllers/components/movie.controller.js";
import { getTitleMoviesMobileController } from "../controllers/components/movie.controller.js";

renderHeaderFooter();
renderMenuMobile();
document.addEventListener('DOMContentLoaded', getMoviesController);
getTitleMoviesController();
getTitleMoviesMobileController();

