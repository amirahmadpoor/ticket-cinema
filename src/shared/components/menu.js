export function renderMenu() {
    return `
        <div class="menu-mobile">
        <!--home-->
        <a href="/index.html" class="menu-mobile__link active">
            <svg class="icons-menu-mobile">
                <use href="#icon-home"></use>
            </svg>
            <span class="menu-mobile__text">
                خانه
            </span>
        </a>
        <!--movie-->
        <a href="/pages/all-movies.html" class="menu-mobile__link">
            <svg class="icons-menu-mobile">
                <use href="#icon-movie"></use>
            </svg>
            <span class="menu-mobile__text">
                فیلم
            </span>
        </a>
        <!--cinema-->
        <a href="#" class="menu-mobile__link">
            <svg class="icons-menu-mobile">
                <use href="#icon-cinema"></use>
            </svg>
            <span class="menu-mobile__text">
                سینما
            </span>
        </a>
        <!--search-->
        <a href="" class="menu-mobile__link icon-search-mobile">
            <svg class="icons-menu-mobile icon-search">
                <use href="#icon-search"></use>
            </svg>
            <span class="menu-mobile__text">
                جستجو
            </span>
        </a>
        <!--user-->
        <a href="/pages/profile.html" class="menu-mobile__link">
            <svg class="icons-menu-mobile">
                <use href="#icon-user"></use>
            </svg>
            <span class="menu-mobile__text">
                حساب
            </span>
        </a>
    </div>`
}