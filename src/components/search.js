import { data } from '../../data/moviesData.js';
const iconSearch = document.querySelector('.icon-search');
const searchBox = document.querySelector('.search__box');
const overlay = document.querySelector('.overlay');
const inputSearch = document.querySelector('.search__text-input');
const searchResult = document.querySelector('.search__result');

function resetResult() {
    searchResult.innerHTML = '';
}

function addSearchBox() {
    searchBox.classList.toggle('show');
}
function addOverlay() {
    overlay.classList.toggle('active');
}

function handelSearchBox() {
    addSearchBox()
    addOverlay();
}

function typingSearch(input) {
    if (input.length >= 3) {
        handelSearch(input);
    }
}

function showResult(result) {
    result.forEach(res => {
        searchResult.insertAdjacentHTML('beforeend',
            `<a href="../../pages/movie-page.html?id-movie=${res.id}" class=search__result--show>${res.title}</a>`
        )
    })
}

function getMovieTitle() {
    return data.map(item => ({ id: item.id, title: item.title }))
}

function includesStrategy(title, token) {
    return title.includes(token);
}

function searching(titles, input, strategy = includesStrategy) {
    const tokens = input.split(' ').filter(Boolean);
    return titles.filter(t =>
        tokens.some(token => strategy(t.title, token))
    );
}

function handelSearch(input) {
    const titles = getMovieTitle(data);
    const result = searching(titles,input);
    if (result.length) {
        showResult(result);
    }
}

iconSearch.addEventListener('click', handelSearchBox);
inputSearch.addEventListener('input', () => {
    resetResult();
    const inputVal = inputSearch.value.toLowerCase().trim();
    typingSearch(inputVal);
})

overlay.addEventListener('click', handelSearchBox);