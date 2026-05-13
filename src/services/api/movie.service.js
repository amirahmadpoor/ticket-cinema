import { createMovieModel } from "../../models/movie.model.js";

const BASE_URL = 'http://localhost:3000/api';

export const getAllMoviesService = async () => {
    const response = await fetch(`${BASE_URL}/movies`);
    const data = await response.json();
    return data.data.movies.map(createMovieModel);
}

export const getMovieIdService = async (id) => {
    const response = await fetch(`${BASE_URL}/movies/:${id}`);
    const data = response.json();
    data
        .then(res => createMovieModel(res.data));
}