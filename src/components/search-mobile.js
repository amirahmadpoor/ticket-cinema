import { data } from '../../data/moviesData.js';

function showResult(result) {
    result.forEach(res => {
        searchResultMobile.insertAdjacentHTML('beforeend',
            `<a href="${window.location.pathname.includes("/pages/") ? "movie-page.html" : "pages/movie-page.html"}?id-movie=${res.id}" class=search__result--show>${res.title}</a>`
        )
    })
}


export function initSearchMobile() {
    const iconSearch = document.querySelector('.icon-search-mobile');
    const inputSearchMobile = document.querySelector('.search-mobile__text-input');
    const searchResultMobile = document.querySelector('.search-mobile__result');
    const searchMobile = document.querySelector('.search-mobile');
    const iconClose = document.querySelector('.icon-close-search');

    function resetResult() {
        searchResultMobile.innerHTML = '';
    }

    function addSearchBox() {
        searchMobile.classList.toggle('show');
    }

    function handelSearchBox() {
        addSearchBox()
    }

    function typingSearch(input) {
        if (input.length >= 3) {
            handelSearch(input);
        }
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
        const result = searching(titles, input);
        if (result.length) {
            showResult(result);
        }
    }

    iconSearch.addEventListener('click', handelSearchBox);
    iconClose.addEventListener('click', addSearchBox);

    inputSearchMobile.addEventListener('input', () => {
        resetResult();
        const inputVal = inputSearchMobile.value.toLowerCase().trim();
        typingSearch(inputVal);
    })
}
