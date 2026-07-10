import { getReviewService } from "../services/reviews.service.js";
import { setReviewService } from "../services/reviews.service.js";
import { handelGetComment } from "../components/review.js";
import { handleAnimationLoadedTop } from "../../../animations/animation-loaded.js";

const getReviewsController = async (movieId) => {
    try {
        const reviews = await getReviewService(movieId);
        await handelGetComment(reviews);
        handleAnimationLoadedTop();
    }
    catch (err) {
        console.error(err);
    }
}

const setReviewController = async (review) => {
    try {
        return await setReviewService(review);
    }
    catch (err) {
        console.error(err);
    }
}

export {
    getReviewsController,
    setReviewController
}