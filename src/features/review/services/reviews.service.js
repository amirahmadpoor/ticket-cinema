import { createReviewModel } from "../../../models/reviews.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";


export const getReviewService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`);
        const hasError = await handleApiError(response);
        const data = await response.json();
        return data.data.reviews.map(createReviewModel);
    } catch (err) {
        console.error(err);
    }
}

export const setReviewService = async (review) => {
    const token = localStorage.getItem('accessToken');
    try {
        const response = await fetch(`${BASE_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        if (hasError) return;
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}
