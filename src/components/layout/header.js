export function renderHeader() {
    return `
    <div class="header-top container">
        <div class="header-top__right">
            <a href="/index.html" class="header-top__logo">
                <img src="/assets/images/logo/Vector.svg" alt="" class="vector-logo">
                <img src="/assets/images/logo/Group.svg" alt="" class="text-logo">
            </a>

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

            <a href="/pages/signin-signup.html" class="login">
                <svg>
                    <use href="#icon-login"></use>
                </svg>
                <span>ورود</span>
            </a>
            <a href="/pages/signin-signup.html" class="register">
                <svg>
                    <use href="#icon-signup"></use>
                </svg>
                <span>ثبت‌نام</span>
            </a>

            <div class="profile">
                <div class="profile__image-wrapper">
                    <img src="/assets/images/profile/user1.png" class="profile__image">
                </div>
                <span class="profile__name"></span>

                <div class="profile__wrapper">
                    <div class="profile__options">
                        <ul class="list-options">
                            <li class="list-options__option">
                                <a href="../../pages/profile.html">
                                    <svg><use href="#icon-user"></use></svg>
                                    <span>پروفایل</span>
                                </a>
                            </li>
                            <li class="list-options__option">
                                <a href="#">
                                    <svg><use href="#icon-wallet"></use></svg>
                                    <span>کیف پول</span>
                                </a>
                            </li>
                            <li class="list-options__option">
                                <a href="#" class="logout">
                                    <svg><use href="#icon-logout"></use></svg>
                                    <span>خروج از حساب</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
