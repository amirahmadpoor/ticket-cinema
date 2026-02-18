import { data } from "../../data/moviesData.js";
import { getMovieIdFromUrl } from "../utils/getIDMovie.js";

let movieId = getMovieIdFromUrl();
let date = new Date();
let dayMovie = data[Number(movieId - 1)];

const filterDaysWrapper = document.querySelector('.filter__days');
const btnScrollLeft = document.querySelector('.after-day');
const btnScrollRight = document.querySelector('.before-day');
const filterDays = document.querySelector('.filter__days');
const SCROLL_X = 111;

//create card days
function createFilterCard(day) {
    return `<div class="filter__day" data-index="${date.getDay()}">${day}</div>`;
}
dayMovie.calendar.forEach((day) => {
    filterDays.insertAdjacentHTML('beforeend', createFilterCard(day));
});

//scroll nav btn filter days
function afterDay() {
    filterDaysWrapper.scrollLeft -= SCROLL_X;
}
function beforeDay() {
    filterDaysWrapper.scrollLeft += SCROLL_X;
}

function selectDay(targetItem) {
    if (targetItem.classList.contains('filter__day')) {
        document.querySelectorAll('.filter__day').forEach(btn => {
            btn.classList.remove('select');
        });
        targetItem.classList.add('select');
    }
}

filterDays.addEventListener('click', (e) => {
    const targetItem = e.target;
    selectDay(targetItem)
});


btnScrollLeft.addEventListener('click', afterDay);
btnScrollRight.addEventListener('click', beforeDay);