import { createMovieModel } from "../../../models/movie.model.js";
import { BASE_URL } from "../../../config/api.js";
import { handleApiError } from "../../../utils/error-handler.js";

export const getAllMoviesService = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies`);

        const hasError = await handleApiError(response);
        if (hasError) return;

        const data = await response.json();
        return data.data.movies.map(createMovieModel);
    } catch (err) {
        console.log(err);
    }
}

export const getMovieIdService = async (id) => {
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
