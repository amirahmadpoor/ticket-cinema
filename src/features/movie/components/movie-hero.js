function initMovieHero({ title, poster_url, trailer_url }) {

    const heroMovieTitle = document.querySelector('.hero__movie-title');
    const heroMovieImage = document.querySelector('.hero__movie-image');
    const heroMovieVideo = document.querySelector('.hero__movie-video');

    heroMovieTitle.innerText = title;
    heroMovieImage.setAttribute('src', trailer_url);
    heroMovieVideo.setAttribute('poster', poster_url);
}

export default initMovieHero;