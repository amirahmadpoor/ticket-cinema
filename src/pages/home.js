import { getHomeMoviesController } from "../features/movie/controllers/movie.controller.js";
import { setMenuMobile } from "../shared/components/mobile-menu.js";
import { setOpenAnswerFAQ } from "../shared/components/faq.js";
import { submitNewsletter } from "../features/newsletter/components/newsletter.js";
import { hideLoading } from "../shared/components/loading.js";

document.addEventListener("DOMContentLoaded", async () => {
    await getHomeMoviesController();

    setMenuMobile();
    setOpenAnswerFAQ();
    submitNewsletter();

    hideLoading();
});