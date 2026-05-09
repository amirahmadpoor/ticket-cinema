import renderHeader from './components/header.js';
import renderFooter from './components/footer.js';
const sidebarMenu = document.querySelector('.sidebar__menu');

function setSelected(item) {
    item.classList.add('sidebar__item--active');
}

function resetSelected() {
    document.querySelectorAll('.sidebar__item').forEach(item => item.classList.remove('sidebar__item--active'));
}

function handlerSelected(item) {
    resetSelected();
    setSelected(item);
}

sidebarMenu.addEventListener('click', e => {
    const item = e.target.closest('.sidebar__item');
    handlerSelected(item);
})

document.getElementById('header').innerHTML = renderHeader();
document.getElementById('footer').innerHTML = renderFooter();