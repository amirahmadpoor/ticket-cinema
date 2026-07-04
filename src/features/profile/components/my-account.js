export const MyAccount = async (countTicket, welcomeUser) => {
    return (`
            <section class="welcome">
                <h1 class="welcome__title">خوش اومدی ${welcomeUser}</h1>
                <p class="welcome__subtitle">این خلاصه‌ای از فعالیت‌های سینمایی شماست</p>

                <div class="progress">
                    <span class="progress__label">
                        <span>۵۵۰ امتیاز برای بلیط رایگان بعدی شما</span>
                        <svg>
                            <use href="#icon-cup"></use>
                        </svg>
                    </span>
                    <div class="progress__bar">
                        <div class="progress__value" style="width: 65%;"></div>
                    </div>
                </div>
            </section>

            <!-- Stats -->
            <section class="stats">
                <div class="stats__card">
                    <span class="stats__number">550</span>
                    <span class="stats__label">پاداش بعدی شما</span>
                    <div class="stats__progress-bar">
                        <div class="stats__progress-value" style="width: 45%;"></div>
                    </div>
                </div>

                <div class="stats__card">
                    <span class="stats__number count-ticket">${countTicket}</span>
                    <span class="stats__label">فیلم‌هایی که رزرو کرده‌اید</span>
                </div>

                <div class="stats__card">
                    <span class="stats__number">400,000 تومان</span>
                    <span class="stats__label">موجودی کیف پول شما</span>
                </div>
            </section>


            <!-- Sections list -->
            <section id="dashboard-cards" class="cards">

                <div class="cards__item">
                    <div class="cards__info">
                        <div class="cards__title">
                            <svg>
                                <use href="#icon-movie-play"></use>
                            </svg>
                            <h3 class="cards__title-text">پیشنهاد برای شما</h3>
                        </div>
                        <p class="cards__desc">شما ۱ فیلم در حال اکران دارید</p>
                    </div>
                    <a href="#" class="cards__action">مشاهده رزروهای شما</a>
                </div>

                <div class="cards__item">
                    <div class="cards__info">
                        <div class="cards__title">
                            <svg>
                                <use href="#icon-movie-play"></use>
                            </svg>
                            <h3 class="cards__title-text">در لیست پیگیری شما منتظر است</h3>
                        </div>
                        <p class="cards__desc">شما ۲ فیلم ذخیره کرده‌اید که می‌توانید بعداً تماشا کنید</p>
                    </div>
                    <a href="#" class="cards__action">مشاهده عناوین ذخیره شده</a>
                </div>

                <div class="cards__item">
                    <div class="cards__info">
                        <div class="cards__title">
                            <svg>
                                <use href="#icon-movie-play"></use>
                            </svg>
                            <h3 class="cards__title-text">موجودی کیف پول شما</h3>
                        </div>
                        <p class="cards__desc">۱۲۷.۵۰ دلار، آماده استفاده برای فیلم بعدی شما</p>
                    </div>
                    <a href="#" class="cards__action">کیف پول خود را شارژ کنید</a>
                </div>
            </section>
    `);
}