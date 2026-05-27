import {renderHeaderFooter} from "../utils/helpers/renderHeader-Footer.js";
import {renderMenuMobile} from "../utils/helpers/renderMenuMobile.js";
import { getMoviesController } from "../controllers/pages/home.page.controller.js";
import { setMenuMobile } from "../components/layout/mobile-menu.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";
import { setOpenAnswerFAQ } from "../components/common/faq.js";
import { getTitleMoviesController } from "../controllers/pages/home.page.controller.js";
import { getTitleMoviesMobileController } from "../controllers/pages/home.page.controller.js";
import { submitNewsletter } from "../components/newsletter/newsletter.js";

renderHeaderFooter();
renderMenuMobile();
document.addEventListener('DOMContentLoaded', getMoviesController);
setMenuMobile();
setScrollScreen();
setOpenAnswerFAQ();
getTitleMoviesController();
getTitleMoviesMobileController();
submitNewsletter();