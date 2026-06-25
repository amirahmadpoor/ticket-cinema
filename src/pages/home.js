import { getHomeMoviesController } from "../features/movie/controllers/movie.controller.js";
import { setMenuMobile } from "../shared/components/mobile-menu.js";
import { setScrollScreen } from "../shared/components/nav-scroll.js";
import { setOpenAnswerFAQ } from "../shared/components/faq.js";
import { submitNewsletter } from "../features/newsletter/components/newsletter.js";

document.addEventListener('DOMContentLoaded', getHomeMoviesController);
setMenuMobile();
setScrollScreen();
setOpenAnswerFAQ();
submitNewsletter();