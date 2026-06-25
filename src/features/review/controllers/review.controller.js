import { getReviewService } from "../services/reviews.service.js";
import { setReviewService } from "../services/reviews.service.js";
import { handelGetComment } from "../components/review.js";
import { handleAnimationLoadedTop } from "../../../animations/animation-loaded.js";

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