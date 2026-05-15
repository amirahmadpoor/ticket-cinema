import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";

export const loadProfileHeader = async () => {
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');
    const profile = document.querySelector('.profile');
    const profileName = document.querySelector('.profile__name');
    const token = localStorage.getItem('accessToken');

    function toggleLoginRegister() {
        login.classList.toggle('hide');
        register.classList.toggle('hide');
    }

    function toggleProfile() {
        profile.classList.toggle('show');
    }


    // try {
    const response = await getProfileDataUserController(token);
    console.log(response);

    if (!response.success) {
        toggleLoginRegister();
        toggleProfile();
        throw new Error('Unauthorized');
    } else {
        toggleLoginRegister();
        toggleProfile();
        profileName.innerHTML = response.data.name;
    }
}
