function showResult(searchResultMobile, result) {
    result.forEach(res => {
        searchResultMobile.innerHTML =
            `
            <div class="result">
                <a href="${window.location.pathname.includes("/pages/") ? "movie-page.html" : "pages/movie-page.html"}?id-movie=${res.id}" class="search__result--show">
                    <span>${res.title}</span>
                    <img src=${res.image} class="result__image">
                </a>
            </div>
            `
    })
}

function initSearch(movies) {
    const iconSearch = document.querySelector('.icon-search');
    const searchBox = document.querySelector('.search__box');
    const overlay = document.querySelector('.overlay');
    const inputSearch = document.querySelector('.search__text-input');
    const searchResult = document.querySelector('.search__result');
    if (!inputSearch) {
        console.warn('search input not found');
        return;
    }

    function resetResult() {
        searchResult.innerHTML = '';
    }

    function openSearch() {
        searchBox.classList.add('show');
        overlay.classList.add('active');
    }

    function closeSearch() {
        searchBox.classList.remove('show');
        overlay.classList.remove('active');
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

    function getMovieTitle(movies) {
        return movies.map(item => ({ id: item.id, title: item.title, image: item.trailer_url }));
    }

    function includesStrategy(title, token) {
        return title.includes(token);
    }

    function searching(titles, input, strategy) {
        const tokens = input.split(' ').filter(Boolean);
        return titles.filter(t =>
            tokens.some(token => strategy(t.title, token))
        );
    }

    function handelSearch(input) {
        const titles = getMovieTitle(movies);
        const result = searching(titles, input, includesStrategy);
        if (result.length) {
            showResult(searchResult, result);
        }
    }

    inputSearch.addEventListener('input', () => {
        resetResult();
        const inputVal = inputSearch.value.toLowerCase().trim();
        typingSearch(inputVal);
    })

    iconSearch.addEventListener('click', openSearch);
    overlay.addEventListener('click', closeSearch);
}


function initSearchMobile(movies) {
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
        addSearchBox();
    }

    function typingSearch(input) {
        if (input.length >= 3) {
            handelSearch(input);
        }
    }


    function getMovieTitle(movies) {
        return movies.map(item => ({ id: item.id, title: item.title, image: item.trailer_url }))
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
        const titles = getMovieTitle(movies);
        const result = searching(titles, input);
        if (result.length) {
            showResult(searchResultMobile, result);
        }
    }

    iconSearch.addEventListener('click', (e) => {
        e.preventDefault();
        handelSearchBox();
    });
    iconClose.addEventListener('click', addSearchBox);

    inputSearchMobile.addEventListener('input', () => {
        resetResult();
        const inputVal = inputSearchMobile.value.toLowerCase().trim();
        typingSearch(inputVal);
    })
}

export {
    initSearch,
    initSearchMobile
}