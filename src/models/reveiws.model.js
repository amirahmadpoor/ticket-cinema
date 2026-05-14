export const createReviewModel = raw => ({
    id: raw.id,
    user_id: raw.user_id,
    movie_id: raw.movie_id,
    rating: raw.rating,
    trailer_url: raw.trailer_url,
    comment: comment || '',
    create_at: raw.create_at ?? '',
});