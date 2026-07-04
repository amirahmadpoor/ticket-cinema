import { renderMenu } from "../../shared/components/menu.js";
import { renderSearchMobile } from "../../shared/components/search-box-mobile.js";

export function renderMenuMobile() {
    const menu = document.getElementById('menu');
    const search = document.getElementById('search');

    if (!menu && !search) return;

    menu.innerHTML = renderMenu();
    search.innerHTML = renderSearchMobile();
}
