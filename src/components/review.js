import { data } from "../../data/moviesData.js";

const btnSendComment = document.querySelector('.comment__btn--send');
const inputComment = document.querySelector('#input-comment');
const reviewWrapper = document.querySelector('.review__wrapper');
// const showMoreBtn = document.querySelector('.reviews__show-more');

const getUrlId = new URLSearchParams(location.search);
const movieId = getUrlId.get('id-movie');

// window.addEventListener('load', () => {
//     handelGenerateReview();
// })

function resetReview() {
    reviewWrapper.innerHTML = '';
}

function getComment(data) {
    return data.find(movie => movie.id === Number(movieId));
}

function generateReview(movie) {
    movie.comments.forEach(comment => {
        reviewWrapper.insertAdjacentHTML('beforeend',
            `<div class="review-box">
                    <div class="review-box__header">
                        <div class="review-box__score">
                            <span class="review-box__score-number">9</span>
                            <span class="review-box__username">امیر</span>
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
    })
}

function handelGenerateReview() {
    resetReview();
    const movie = getComment(data);
    generateReview(movie);
}

function checkLength(comment) {
    if (comment.length > 0) {
        handelReviews(comment);
    }
}

function addComments(comment) {
    const movie = data.find(movie => movie.id === Number(movieId));
    movie.comments.push(comment);
}

function handelReviews(comment) {
    addComments(comment);
    handelGenerateReview();
}

// function toggleShowMore() {
//     showMoreBtn.classList.toggle('active');
// }

btnSendComment.addEventListener('click', () => {
    const comment = inputComment.value.trim();
    checkLength(comment);
    inputComment.value = '';
})