export function initReadInfo({ title, poster_url: poster, trailer_url: trailer, imdb_rating: score, duration, description }) {
    const bgInfo = document.querySelector('.info-movie');
    const imagePoster = document.querySelector('.image-poster');
    const movieTitle = document.querySelector('.movie-title');
    const movieDesc = document.querySelector('.movie-desc__text');
    const movieTime = document.querySelector('.movie-time');
    const movieScore = document.querySelector('.movie-score__number');

    function convertMinutesToHoursMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }

    bgInfo.style.backgroundImage = `url(${poster})`;
    imagePoster.setAttribute('src', `${trailer} `);
    movieTitle.innerHTML = title;
    movieTime.innerHTML = convertMinutesToHoursMinutes(duration);
    movieScore.innerHTML = score;
    movieDesc.textContent = description;
}
