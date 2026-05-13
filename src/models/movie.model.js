export const createMovieModel = raw => ({
    id: raw.id,
    title: raw.title,
    description: raw.description,
    poster: raw.poster_url,
    trailer_url: raw.trailer_url,
    score: Number(raw.imdb_rating) || 0,
    genre: raw.genres ?? '',
    duration: raw.duration,
    age_rating: raw.age_rating,
    country: raw.country,
    language: raw.language,
});