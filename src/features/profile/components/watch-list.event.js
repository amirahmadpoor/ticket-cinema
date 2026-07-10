import { getWatchedMovieController } from "../../booking/controllers/reservation.controller.js";
import MyWatchList from "./my-watchlist.js";

const showUserWatchList = async () => {
    const dashboardContainer = document.querySelector('.main');

    try {
        const reservations = await getWatchedMovieController();
        reservations.length > 0
            ?
            dashboardContainer.innerHTML = reservations.map(MyWatchList).join('')
            :
            dashboardContainer.innerHTML = '<span style="display:flex; justify-content:center; align-items:center; height:100%;">لیست تماشای شما خالی است</span>'
    } catch (err) {
        console.error(err);
    }
}

export {
    showUserWatchList
}