import { showTimes } from "../../data/showTimes.js";
import { cinemas } from "../../data/cinemaData.js"; 
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

const btnSubmitTicket = document.querySelectorAll('.submit-time');
const movieId = getMovieIdFromUrl();

//submit data ticket
function submitTicket(ticket) {
    if (ticket.classList.contains('enable')) {
        const idCinema = ticket.dataset.idCinema;
        let randomCodeShowTime = Math.floor(Math.random() * 10000);
        showTimes.push({
            id: randomCodeShowTime,
            movieId: Number(movieId),
            cinemaId: Number(idCinema),
            date: '',
            time: '',
            price: Number(cinemas[idCinema].price)

        },);
    } else {
        alert('selected time ticket')
    }
    console.log(showTimes);
    
}
btnSubmitTicket.forEach(ticket => {
    ticket.addEventListener('click', () => {
        submitTicket(ticket);
    })
})