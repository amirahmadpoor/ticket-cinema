import { renderHeaderFooter } from './utils/helpers/renderHeader-Footer.js';
import { renderMenuMobile } from "./utils/helpers/renderMenuMobile.js";
import { loadProfileHeader } from './components/common/load-profile-header.js';
import { handleLogout } from './utils/logout.js';
import { generateToast } from './components/layout/toast.js';

document.addEventListener('DOMContentLoaded', async () => {
    renderHeaderFooter();
    renderMenuMobile();
    loadProfileHeader();
    handleLogout();
    generateToast();
});