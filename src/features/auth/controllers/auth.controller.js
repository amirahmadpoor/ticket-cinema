import { dataUserNewService } from "../services/auth.service.js";
import { dataUserService } from "../services/auth.service.js";
import { getDataUser } from "../services/auth.service.js";
export const postDataUserNewController = async (userData) => {
    return await dataUserNewService(userData);
}

export const getDataUserController = async (userData) => {
    return await dataUserService(userData);
}

export const getProfileDataUserController = async (token) => {
    return await getDataUser(token);
}