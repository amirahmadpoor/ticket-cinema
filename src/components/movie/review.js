// import { getReviewsController } from "../../controllers/components/review.controller.js";
// import { setReviewController } from "../../controllers/components/review.controller.js";
// import { getMovieIdFromUrl } from "../../utils/helpers/getIDMovie.js";

// function generateReview(reviewWrapper, movie) {
//     movie.comments.forEach(comment => {
//         reviewWrapper.insertAdjacentHTML('beforeend',
//             `<div class="review-box">
//                     <div class="review-box__header">
//                         <div class="review-box__score">
//                             <span class="review-box__score-number">9</span>
//                             <span class="review-box__username">امیر</span>
//                         </div>
//                         <div class="review-box__date">
//                             <span class="review-box__date-day">4/</span>
//                             <span class="review-box__date-month">2/</span>
//                             <span class="review-box__date-year">1404</span>
//                         </div>
//                     </div>
//                     <div class="review-box__main">
//                         <p class="review-box__text">${comment}</p>
//                     </div>
//                     <div class="review__footer">
//                         <a href="" class="review__full-text">
//                             <svg class="icon-all-comment">
//                                 <use href="#icon-all-comment"></use>
//                             </svg>
//                             <span>نظرات</span>
//                         </a>
//                     </div>
//                 </div>`)
//     })
// }

// export function initReview(reviews) {
//     const btnSendComment = document.querySelector('.comment__btn--send');
//     const inputComment = document.querySelector('#input-comment');
//     const reviewWrapper = document.querySelector('.review__wrapper');
//     // const showMoreBtn = document.querySelector('.reviews__show-more');

//     const movieId = getMovieIdFromUrl();

//     function resetReview() {
//         reviewWrapper.innerHTML = '';
//     }

//     function getCommentUser() {
//         const commentValue = inputComment.value.trim();
//         if (commentValue.length > 0)
//             return { movie_id: movieId, rating, comment: inputComment.value };
//         return `<span>لطفا کامنت خود را وارد کنید</span>`;
//     }

//     function handlerSetComment() {
//         const review = getCommentUser();
//         setReviewController(review);
//     }

//     function getComments(data) {

//     }


//     function handelGenerateReview() {
//         // resetReview();
//         // const movie = getComment(data);
//         // generateReview(reviewWrapper, movie);
//     }

//     // function checkLength(comment) {
//     //     if (comment.length > 0) {
//     //         handelReviews(comment);
//     //     }
//     // }

//     // function addComments(comment, handelGenerateReview) {
//     //     const movie = getComment(data);
//     //     console.log(movie);
//     //     movie.comments.push(comment);
//     //     handelGenerateReview();
//     // }

//     // function handelReviews(comment) {
//     //     addComments(comment, handelGenerateReview);
//     // }

//     // function toggleShowMore() {
//     //     showMoreBtn.classList.toggle('active');
//     // }

//     btnSendComment.addEventListener('click', () => {
//         handlerSetComment();
//         inputComment.value = '';
//     })
// }