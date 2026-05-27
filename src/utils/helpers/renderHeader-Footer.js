import { renderHeader } from "../../components/layout/header.js";
import { renderFooter } from "../../components/layout/footer.js";

export function renderHeaderFooter() {
    document.getElementById('header').innerHTML = renderHeader();
    document.getElementById('footer').innerHTML = renderFooter();
}