import { createAuthModel } from "../../../models/auth.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";
import { getTokenUser } from "../../../utils/get-token.js";

const registerUserService = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const hasError = await handleApiError(response);
    if (hasError) return;
    return await response.json();
}

const LoginUserService = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const hasError = await handleApiError(response);
    if (hasError) return;
    return await response.json();
}

const getDataUserService = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
        headers: {
            'Authorization': token
        }
    });
    return await response.json();
}

export {
    registerUserService,
    LoginUserService,
    getDataUserService
}