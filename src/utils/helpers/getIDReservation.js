export const getIdReservation = () => {
    return Number(new URLSearchParams(window.location.search).get('id-reservation'));
}