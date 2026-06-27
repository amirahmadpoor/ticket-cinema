import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

export const setNewsletterService = async (newUser) => {
    try {
        const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const hasError = await handleApiError(response);
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);

    }
}