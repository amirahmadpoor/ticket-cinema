import { setMenuMobile } from "./components/menu-mobile.js";
import { setScrollScreen } from "./components/scrollScreen.js";
import { setOpenAnswerFAQ } from "./components/faq.js";
import { handelMovieCard } from "./components/movieCard.js";
import { initSearch } from "./components/search.js";
import { initSearchMobile } from "./components/search-mobile.js";
import { initStatistics } from "./components/statistics.js";

setMenuMobile();
setScrollScreen();
setOpenAnswerFAQ();
handelMovieCard();
initSearch();
initSearchMobile();
initStatistics();