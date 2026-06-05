export function initReadInfo({
    title,
    poster_url: poster,
    trailer_url: trailer,
    imdb_rating: score,
    duration,
    description,
    name: nameCinema,
    address
}) {
    const bgInfo = document.querySelector('.bg-poster-movie');
    const imagePoster = document.querySelector('.image-poster');
    const movieTitle = document.querySelector('.info-movie__title');
    const movieDesc = document.querySelector('.info-movie__desc-text');
    const movieTime = document.querySelector('.info-movie__time');
    const movieScore = document.querySelector('.info-movie__score-number');
    const cinemaName = document.querySelector('.cinema-name');
    const cinemaAddress = document.querySelector('.cinema-address');

    function convertMinutesToHoursMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }

    bgInfo && (bgInfo.style.backgroundImage = `url(${poster})`);
    imagePoster && imagePoster.setAttribute('src', trailer);
    movieTitle && (movieTitle.textContent = title);
    movieDesc && (movieDesc.textContent = description);
    movieTime && (movieTime.textContent = convertMinutesToHoursMinutes(duration));
    movieScore && (movieScore.textContent = score);
    cinemaName && (cinemaName.textContent = nameCinema);
    cinemaAddress && (cinemaAddress.textContent = address);
}
