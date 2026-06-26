import { BASE_URL } from "../../../config/api.js";

;

export const setNewsletterService = async (newUser) => {
    const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    return await response.json();

}