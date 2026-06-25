import { getProfileDataUserController } from "../../features/auth/controllers/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";


function toggleLoginRegister(login,register) {
    if (!login || !register) return;
    login.classList.toggle('hide');
    register.classList.toggle('hide');
}

function toggleProfile(profile) {
    if (!profile) return;
    profile.classList.toggle('show');
}

export const loadProfileHeader = async () => {
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');
    const profile = document.querySelector('.profile');
    const profileName = document.querySelector('.profile__name');
    try {
        const response = await getProfileDataUserController(getTokenUser());
            if (!response.success) {
                // toggleLoginRegister(login,register);
                // toggleProfile(profile);
                console.log('Unauthorized');
            } else {
                if (!profileName) return;
                toggleLoginRegister(login,register);
                toggleProfile(profile);
                profileName.innerHTML = response.data.name;
            }
    } catch (err) {
        console.warn('error:',err);
    }
}
