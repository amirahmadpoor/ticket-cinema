export function initMovieScore({ rating }) {
    const scoreValue = document.querySelector('.reviews__scores-value');
    const scoreFav = document.querySelector('.reviews__scores-favorable');

    function checkScore() {
        scoreValue.innerHTML = rating;
        if (rating >= 4.5) {
            scoreValue.style.backgroundColor = 'var(--color-success)';
            scoreFav.innerHTML = 'عالی';
        } else if (rating >= 3) {
            scoreValue.style.backgroundColor = 'var(--color-warning)';
            scoreFav.innerHTML = 'خوب';
        } else {
            scoreValue.style.backgroundColor = 'var(--color-danger)';
            scoreFav.innerHTML = 'ضعیف';
        }
    }
    checkScore();
}