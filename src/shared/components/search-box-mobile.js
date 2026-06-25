export function renderSearchMobile(){
    return `
        <div class="search-mobile">
        <div class="search-mobile__header">
            <svg class="icon-close-search">
                <use href="#icon-close"></use>
            </svg>
        </div>
        <div class="search-mobile__input">
            <svg>
                <use href="#icon-search"></use>
            </svg>
            <input type="text" class="search-mobile__text-input" autofocus placeholder="جستجو">
        </div>
        <div class="search-mobile__result">
        </div>
    </div>`
}
