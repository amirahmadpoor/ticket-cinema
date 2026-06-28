import { createAuthModel } from "../../../models/auth.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

export const dataUserNewService = async (userData) => {
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

export const dataUserService = async (userData) => {
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

export const getDataUser = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // const hasError = await handleApiError(response);
    // if (hasError) return;
    return await response.json();
}