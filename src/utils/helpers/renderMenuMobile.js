import { renderMenu } from "../../shared/components/menu.js";
import { renderSearchMobile } from "../../shared/components/search-box-mobile.js";

export function renderMenuMobile() {
    document.querySelector('#menu').innerHTML = renderMenu();
    document.querySelector('#search').innerHTML = renderSearchMobile();
}
