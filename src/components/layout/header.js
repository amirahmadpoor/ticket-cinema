function renderHeader() {
    return `
    <div class="header-top container">
    <div class="header-top__right">
        <div class="header-top__logo">
            <img src="/assets/images/logo/Vector.svg" alt="" class="vector-logo">
            <img src="/assets/images/logo/Group.svg" alt="" class="text-logo">
        </div>

        <div class="header-top__links">
            <a href="pages/all-movies.html" class="header-top__link">فیلم</a>
            <a href="#" class="header-top__link">سینما</a>
        </div>
    </div>

    <div class="header-top__left">
        <div class="search">
            <svg class="icon-search">
                <use href="#icon-search"></use>
            </svg>
            <div class="search__box">
                <div class="search__input">
                    <svg>
                        <use href="#icon-search"></use>
                    </svg>
                    <input type="text" class="search__text-input" autofocus placeholder="جستجو">
                </div>
                <div class="search__result">
                </div>
            </div>
        </div>

        <a href="#" class="login">
            <svg>
                <use href="#icon-login"></use>
            </svg>
            <span>ورود</span>
        </a>
        <a href="#" class="signup">
            <svg>
                <use href="#icon-signup"></use>
            </svg>
            <span>ثبت‌نام</span>
        </a>
    </div>
</div>

<div class="header-mobile container">
    <div class="header-mobile__wrapper">
        <div class="logo-mobile">
            <img src="/assets/images/logo/Vector.svg" alt="" class="vector-logo">
            <img src="/assets/images/logo/Group.svg" alt="" class="text-logo">
        </div>
    </div>
</div>`
}

export default renderHeader;