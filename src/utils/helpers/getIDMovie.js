export function getMovieIdFromUrl() {
    let urlSearch = new URLSearchParams(location.search);
    return urlSearch.get('id-movie');
}