import { renderHeader } from "../../shared/components/header.js";
import { renderFooter } from "../../shared/components/footer.js";

export function renderHeaderFooter() {
    const header = document.getElementById('header');
    const footer = document.getElementById("footer");

    if (!header && !footer) return;

    header.innerHTML = renderHeader();
    footer.innerHTML = renderFooter();

}