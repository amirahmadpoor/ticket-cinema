import { dataUserNewService } from "../../services/api/auth.service.js";
import { dataUserService } from "../../services/api/auth.service.js";

export const postDataUserNewController = async (userData) => {
    return await dataUserNewService(userData);
}

export const getDataUserController = async (userData) => {
    const data = await dataUserService(userData);
    return data;
}