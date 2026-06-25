import { getAllMoviesService } from "../../movie/services/movie.service.js";
import { initSearch } from "../../search/components/search.js";
import { initSearchMobile } from "../../search/components/mobile-search.js";

export const getTitleMoviesController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearch(movies);
    }
    catch (err) {
        console.log(err);
    }
}

export const getTitleMoviesMobileController = async () => {
    try {
        const movies = await getAllMoviesService();
        initSearchMobile(movies);
    }
    catch (err) {
        console.error(err);
    }
}