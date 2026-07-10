import { registerUserService, LoginUserService, getDataUserService } from "../services/auth.service.js";

const registerUserController = async (userData) => {
    return await registerUserService(userData);
}

const LoginUserController = async (userData) => {
    return await LoginUserService(userData);
}

const getProfileDataUserController = async (token) => {
    return await getDataUserService(token);
}

export {
    registerUserController,
    LoginUserController,
    getProfileDataUserController
}