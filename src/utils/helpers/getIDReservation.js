export const getIdReservation = () => {
    return new URLSearchParams(window.location.search).get('id-reservation');
}