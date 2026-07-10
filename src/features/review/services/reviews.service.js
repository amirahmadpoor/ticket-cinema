import { createReviewModel } from "../../../models/reviews.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";


const getReviewService = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/reviews/movie/${movieId}`);
        const data = await response.json();
        return data.data.reviews;
    } catch (err) {
        console.error(err);
    }
}

const setReviewService = async (review) => {
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
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

export {
    getReviewService,
    setReviewService
}