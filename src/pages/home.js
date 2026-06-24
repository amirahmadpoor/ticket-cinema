import { getMoviesController } from "../controllers/pages/home.page.controller.js";
import { setMenuMobile } from "../components/layout/mobile-menu.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";
import { setOpenAnswerFAQ } from "../components/common/faq.js";
import { submitNewsletter } from "../components/newsletter/newsletter.js";

document.addEventListener('DOMContentLoaded', getMoviesController);
setMenuMobile();
setScrollScreen();
setOpenAnswerFAQ();
submitNewsletter();