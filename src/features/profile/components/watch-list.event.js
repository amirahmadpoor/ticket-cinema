import { getWatchedMovieController } from "../../booking/controllers/reservation.controller.js";
import { MyWatchList } from "../../watchlist/components/my-watchlist.js";

export const showUserWatchList = async () => {
    const dashboardContainer = document.querySelector('.main');

    try {
        const reservations = await getWatchedMovieController();
        dashboardContainer.innerHTML = reservations.map(MyWatchList).join('');
    } catch (err) {
        console.error(err);
    }
}