import { createMovieModel } from "../../../models/movie.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

const getAllMoviesService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies`);

        const hasError = await handleApiError(response);
        if (hasError) return;

        const data = await response.json();
        return data.data.movies;
    } catch (err) {
        console.error(err);
    }
}

const getMovieIdService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/${id}`);

        const hasError = await handleApiError(response);
        if (hasError) return;

        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);

    }
}

export {
    getAllMoviesService,
    getMovieIdService
}