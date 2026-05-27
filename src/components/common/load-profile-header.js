import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";

export const loadProfileHeader = async () => {
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');
    const profile = document.querySelector('.profile');
    const profileName = document.querySelector('.profile__name');

    function addLoginRegister() {
        login.classList.remove('hide');
        register.classList.remove('hide');
    }
    function removeLoginRegister() {
        login.classList.add('hide');
        register.classList.add('hide');
    }

    function addProfile() {
        profile.classList.add('show');
    }

    function removeProfile() {
        profile.classList.remove('show');
    }


    try {
        const response = await getProfileDataUserController(getTokenUser());

        if (!response.success) {
            addLoginRegister();
            removeProfile();
            console.log('Unauthorized');
        } else {
            removeLoginRegister();
            addProfile();
            profileName.innerHTML = response.data.name;
        }
    } catch (err) {
        console.log(err);
    }
}
