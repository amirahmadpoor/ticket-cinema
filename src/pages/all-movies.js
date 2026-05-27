import {renderHeaderFooter} from "../utils/helpers/renderHeader-Footer.js";
import {renderMenuMobile} from "../utils/helpers/renderMenuMobile.js";
import { getMoviesController } from "../controllers/pages/all-movies.page.controller.js";
import { getTitleMoviesController } from "../controllers/pages/all-movies.page.controller.js";
import { getTitleMoviesMobileController } from "../controllers/pages/all-movies.page.controller.js";

renderHeaderFooter();
renderMenuMobile();
document.addEventListener('DOMContentLoaded', getMoviesController);
getTitleMoviesController();
getTitleMoviesMobileController();

