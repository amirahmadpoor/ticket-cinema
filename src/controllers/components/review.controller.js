import { getReviewService } from "../../services/api/reviews.service.js";
import { setReviewService } from "../../services/api/reviews.service.js";
import { initReview } from "../../components/movie/review.js";

export const getReviewsController = async () => {
    try {
        const reviews = await getReviewService();
        initReview(reviews);
    }
    catch (err) {
        console.warn(err);
    }
}

export const setReviewController = async (review) => {
    try {
        setReviewService(review);
        // const review = await ;
    }
    catch (err) {
        console.warn(err);
    }
}