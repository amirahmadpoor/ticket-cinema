export const getShowTimeId = () => {
    let urlSearch = new URLSearchParams(location.search);
    return urlSearch.get('id-showtime');
}