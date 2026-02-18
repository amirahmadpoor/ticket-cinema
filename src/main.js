import { setMenuMobile } from "./components/menu-mobile.js";
import { setScrollScreen } from "./components/scrollScreen.js";
import { setOpenAnswerFAQ } from "./components/faq.js";
import { setSelectTab } from "./components/tabs-page-movie.js";
import { handelMovieCard } from "./components/movieCard.js";
import { setFavorites } from "./components/add-favorites.js";
document.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname;
    setMenuMobile();
    setScrollScreen();
    if (path.includes('index')) {
        handelMovieCard();
        setOpenAnswerFAQ();
    } else if (path.includes('movie-page')) {
        setFavorites();
        setSelectTab();
    }
})