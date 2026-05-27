export function initMovieScore({ rating }) {
    const scoreValue = document.querySelector('.reviews__scores-value');
    const scoreFav = document.querySelector('.reviews__scores-favorable');

    function checkScore() {
        scoreValue.innerHTML = rating;
        if (rating >= 4.5) {
            scoreValue.style.backgroundColor = 'var(--positive)';
            scoreFav.innerHTML = 'عالی';
        } else if (rating >= 3) {
            scoreValue.style.backgroundColor = 'var(--average)';
            scoreFav.innerHTML = 'خوب';
        } else {
            scoreValue.style.backgroundColor = 'var(--negative)';
            scoreFav.innerHTML = 'ضعیف';
        }
    }
    checkScore();
}