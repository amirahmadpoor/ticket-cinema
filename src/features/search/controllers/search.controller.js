import { getAllMoviesService } from "../../movie/services/movie.service.js";
import { initSearch, initSearchMobile } from "../../search/components/search.js";

const getTitleMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearch(movies);
    }
    catch (err) {
        console.log(err);
    }
}

const getTitleMoviesMobileController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearchMobile(movies);
    }
    catch (err) {
        console.error(err);
    }
}

export {
    getTitleMoviesController,
    getTitleMoviesMobileController
}