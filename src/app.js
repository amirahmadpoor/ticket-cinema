import { renderHeaderFooter } from './utils/helpers/renderHeader-Footer.js';
import { renderMenuMobile } from "./utils/helpers/renderMenuMobile.js";
import { loadProfileHeader } from './shared/components/load-profile-header.js';
import { getTitleMoviesController, getTitleMoviesMobileController } from './features/search/controllers/search.controller.js';
import { handleLogout } from './utils/logout.js';
import { generateToast } from './shared/components/toast.js';
import { setScrollScreen } from "./shared/components/nav-scroll.js";

document.addEventListener('DOMContentLoaded', async () => {
    renderHeaderFooter();
    renderMenuMobile();
    loadProfileHeader();
    await getTitleMoviesController();
    await getTitleMoviesMobileController();
    handleLogout();
    generateToast();
    setScrollScreen();
});