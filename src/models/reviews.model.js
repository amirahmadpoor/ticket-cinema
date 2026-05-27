export const createReviewModel = raw => ({
    id: raw.id,
    user_id: raw.user_id,
    user_name: raw.user_name,
    movie_id: raw.movie_id,
    movie_title: raw.movie_title,
    rating: raw.rating,
    trailer_url: raw.trailer_url,
    comment: raw.comment || '',
    create_at: raw.create_at ?? '',
});