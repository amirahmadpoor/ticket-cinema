import { getProfileDataUserController } from "../controllers/pages/auth.controller.js";
import { getTokenUser } from "../utils/get-token.js";


const userData = await getProfileDataUserController(getTokenUser());

const sidebarMenu = document.querySelector('.sidebar__menu');
const userName = document.querySelector('.sidebar__name');
const userEmail = document.querySelector('.sidebar__email');
const welcome = document.querySelector('.welcome__title');

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

userName.innerHTML = userData.data.name;
userEmail.innerHTML = userData.data.email;
welcome.innerHTML = `خوش اومدی ${userData.data.name}`;