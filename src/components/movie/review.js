import { getReviewsController } from "../../controllers/components/review.controller.js";
import { setReviewController } from "../../controllers/components/review.controller.js";
import { getMovieIdFromUrl } from "../../utils/helpers/getIDMovie.js";
import { handleToastBox } from "../../utils/helpers/show-toast.js";

const btnSendComment = document.querySelector('.comment__btn--send');
const inputComment = document.querySelector('#input-comment');
const reviewWrapper = document.querySelector('.review__wrapper');
const notReviewMessage = document.querySelector('.not-review');
const movieId = getMovieIdFromUrl();


function generateReview({ rating, user_name, comment }) {
    reviewWrapper.insertAdjacentHTML('beforeend',
        `<div class="review-box hidden-elems-top">
            <div class="review-box__header">
                <div class="review-box__score">
                    <span class="review-box__score-number">${rating}</span>
                    <span class="review-box__username">${user_name}</span>
                </div>
                <div class="review-box__date">
                    <span class="review-box__date-day">4/</span>
                    <span class="review-box__date-month">2/</span>
                    <span class="review-box__date-year">1404</span>
                </div>
            </div>
            <div class="review-box__main">
                <p class="review-box__text">${comment}</p>
            </div>
            <div class="review__footer">
                <a href="" class="review__full-text">
                    <svg class="icon-all-comment">
                        <use href="#icon-all-comment"></use>
                    </svg>
                    <span>نظرات</span>
                </a>
            </div>
        </div>`)
}

function resetReview() {
    reviewWrapper.innerHTML = '';
}

function getCommentUser() {
    const commentValue = inputComment.value.trim();

    if (commentValue.length === 0)
        return null;

    let newComment = {
        movie_id: Number(movieId),
        rating: 5,
        comment: commentValue
    }
    return newComment;
}

async function handleSetComment() {
    const review = getCommentUser();

    if (!review) {
        handleToastBox("لطفا کامنت خود را وارد کنید");
        return;
    }

    const response = await setReviewController(review);
    if (!response.success) {
        handleToastBox('شما قبلا نظر خود را ثبت کرده اید');
        return;
    }
    resetReview();
    getReviewsController();
}

export async function handelGetComment(reviews) {
    let reviewsAll = await reviews;
    let review = reviewsAll.filter(review => review.movie_id == movieId);
    resetReview();
    if (!review.length) {
        reviewWrapper.classList.add('no-review');
        notReviewMessage.classList.add('show');
        return;
    }
    reviewWrapper.classList.remove('no-review');
    notReviewMessage.classList.remove('show');
    review.forEach(review => {
        generateReview(review);
    });
}

btnSendComment.addEventListener('click', () => {
    handleSetComment();
    inputComment.value = '';
})
