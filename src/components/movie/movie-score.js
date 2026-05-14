export function initMovieScore({ imdb_rating: score }) {
    const scoreValue = document.querySelector('.reviews__scores-value');
    const scoreFav = document.querySelector('.reviews__scores-favorable');

    score = Number(score);
    function checkScore() {
        scoreValue.innerHTML = score;
        if (score >= 8) {
            scoreValue.style.backgroundColor = 'var(--positive)';
            scoreFav.innerHTML = 'عالی';
        } else if (score >= 5) {
            scoreValue.style.backgroundColor = 'var(--average)';
            scoreFav.innerHTML = 'خوب';
        } else {
            scoreValue.style.backgroundColor = 'var(--negative)';
            scoreFav.innerHTML = 'ضعیف';
        }
    }
    checkScore();
}