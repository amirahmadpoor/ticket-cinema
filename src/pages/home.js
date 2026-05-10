import renderHeaderFooter from "../utils/helpers/renderHeader-Footer.js";
import renderMenuMobile from "../utils/helpers/renderMenuMobile.js";
import { setMenuMobile } from "../components/layout/mobile-menu.js";
import { setScrollScreen } from "../components/layout/nav-scroll.js";
import { setOpenAnswerFAQ } from "../components/common/faq.js";
import { handleMovieCard } from "../components/movie/movie-card.js";
import { initSearch } from "../components/search/search.js";
import { initSearchMobile } from "../components/search/mobile-search.js";
import { initStatistics } from "../components/movie/statistics.js";

renderHeaderFooter();
renderMenuMobile();
setMenuMobile();
setScrollScreen();
setOpenAnswerFAQ();
initSearch();
initSearchMobile();
handleMovieCard();
initStatistics();
