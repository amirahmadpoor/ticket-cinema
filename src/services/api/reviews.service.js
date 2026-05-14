import { createReviewModel } from "../../models/reviews.model.js";

const BASE_URL = 'http://localhost:3000/api';

export const getReviewService = async () => {
    const response = await fetch(`${BASE_URL}/reviews`);
    const data = await response.json();
    return data.data.movies.map(createReviewModel);
}

export const setReviewService = async ({ movie_id, rating = 6, comment }) => {
    const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Contact-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id, rating, comment })
    })
    const data = await response.json();
    return data;
}
