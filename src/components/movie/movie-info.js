export function initReadInfo({ title, poster_url: poster, trailer_url: trailer, imdb_rating: score, duration, description }) {
    const bgInfo = document.querySelector('.bg-poster-movie');
    const imagePoster = document.querySelector('.image-poster');
    const movieTitle = document.querySelector('.info-movie__title');
    const movieDesc = document.querySelector('.info-movie__desc-text');
    const movieTime = document.querySelector('.info-movie__time');
    const movieScore = document.querySelector('.info-movie__score-number');

    function convertMinutesToHoursMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }

    bgInfo && (bgInfo.style.backgroundImage = `url(${poster})`);
    imagePoster.setAttribute('src', `${trailer} `);
    movieTitle.innerHTML = title;
    movieTime.innerHTML = convertMinutesToHoursMinutes(duration);
    movieScore.innerHTML = score;
    movieDesc && (movieDesc.textContent = description);
}
