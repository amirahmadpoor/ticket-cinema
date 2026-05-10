export function getCinemaIdFromUrl() {
    let urlSearch = new URLSearchParams(location.search);
    return urlSearch.get('id-cinema');
}