import renderMenu from "../../components/layout/menu.js";
import renderSearchMobile from "../../components/layout/search.js";

export function renderMenuMobile() {
    document.querySelector('#menu').innerHTML = renderMenu();
    document.querySelector('#search').innerHTML = renderSearchMobile();
}
