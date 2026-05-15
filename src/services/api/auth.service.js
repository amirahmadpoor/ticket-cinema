import { createAuthModel } from "../../models/auth.model.js";

const BASE_URL = 'http://localhost:3000/api/auth';

export const dataUserNewService = async (userData) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return await response.json();
}

export const dataUserService = async (userData) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return await response.json();
}

export const getDataUser = async (token) => {
    const response = await fetch(`${BASE_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}