import renderHeader from "../components/header.js";
import renderFooter from "../components/footer.js";

function renderHeaderFooter() {
    document.getElementById('header').innerHTML = renderHeader();
    document.getElementById('footer').innerHTML = renderFooter();
}

export default renderHeaderFooter;