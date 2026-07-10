import { convertMinutesToHoursMinutes } from "../../../utils/helpers/convert-time.js";

function initReadInfo({ title, poster_url: poster, trailer_url: trailer, imdb_rating: score, duration, description, name: nameCinema, address
}) {
    const bgInfo = document.querySelector('.bg-poster-movie');
    const imagePoster = document.querySelector('.image-poster');
    const movieTitle = document.querySelector('.info-movie__title');
    const movieDesc = document.querySelector('.info-movie__desc-text');
    const movieTime = document.querySelector('.info-movie__time');
    const movieScore = document.querySelector('.info-movie__score-number');
    const cinemaName = document.querySelector('.cinema-name');
    const cinemaAddress = document.querySelector('.cinema-address');

    bgInfo && (bgInfo.style.backgroundImage = `url(${poster})`);
    imagePoster && imagePoster.setAttribute('src', trailer);
    movieTitle && (movieTitle.innerHTML = title);
    movieDesc && (movieDesc.innerHTML = description);
    movieTime && (movieTime.innerHTML = convertMinutesToHoursMinutes(duration));
    movieScore && (movieScore.innerHTML = score);
    cinemaName && (cinemaName.innerHTML = nameCinema);
    cinemaAddress && (cinemaAddress.innerHTML = address);
}

export default initReadInfo;