import { createReviewModel } from "../../models/reviews.model.js";

const BASE_URL = 'http://localhost:3000/api';
const token = localStorage.getItem('accessToken');

export const getReviewService = async () => {
    const response = await fetch(`${BASE_URL}/reviews`);
    const data = await response.json();
    return data.data.reviews.map(createReviewModel);
}

export const setReviewService = async (review) => {
    const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    return await response.json();
}
