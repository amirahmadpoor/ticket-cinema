import { renderHeader } from "../../shared/components/header.js";
import { renderFooter } from "../../shared/components/footer.js";

export function renderHeaderFooter() {
    document.getElementById('header').innerHTML = renderHeader();
    document.getElementById('footer').innerHTML = renderFooter();
}