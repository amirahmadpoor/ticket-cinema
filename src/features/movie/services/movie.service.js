import { createMovieModel } from "../../../models/movie.model.js";

import { BASE_URL } from "../../../config/api.js";

;

export const getAllMoviesService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies`);
        const data = await response.json();
        return data.data.movies.map(createMovieModel);
    }catch(err){
        console.log(err);
    }
}

export const getMovieIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/movies/${id}`);
    const data = await response.json();
    return data.data;
}
