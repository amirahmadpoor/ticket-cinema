import { getReviewService } from "../../services/api/reviews.service.js";
import { setReviewService } from "../../services/api/reviews.service.js";
import { handelGetComment } from "../../components/movie/review.js";
import { handleAnimationLoadedTop } from "../../animations/animation-loaded-top.js";

export const getReviewsController = async () => {
    try {
        const reviews = await getReviewService();
        await handelGetComment(reviews);
        handleAnimationLoadedTop();
    }
    catch (err) {
        console.warn(err);
    }
}

export const setReviewController = async (review) => {
    try {
        return await setReviewService(review);
    }
    catch (err) {
        console.warn(err);
    }
}