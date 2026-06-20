export const renderTicketCard = (data = null) => {
    // اگر داده‌ای داده‌ شود، مقادیر را پر می‌کند
    if (data) {
        const seatsText = data.seats ? data.seats.join(' , ') : 'نامشخص';
        return (`
            <div class="ticket-card">
                <div class="success-details__body">
                    <section class="success-details__section success-details__section--order">
                        <h2 class="success-details__section-title">جزئیات سفارش</h2>
                        <ul class="success-details__list">
                            <li class="success-details__list-item">
                                <span class="success-details__label">فیلم:</span>
                                <span class="success-details__value movie-name">${data.movie.title}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">تاریخ:</span>
                                <span class="success-details__value show-date">${data.showtime.date}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">مدت زمان:</span>
                                <span class="success-details__value duration">${data.movie.duration}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">سینما:</span>
                                <span class="success-details__value cinema-name">${data.showtime.cinema_name}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">آدرس:</span>
                                <span class="success-details__value cinema-address">${data.showtime.cinema_address}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">ساعت اکران:</span>
                                <span class="success-details__value show-time">${data.showtime.time.slice(0, 5)}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">صندلی‌ها:</span>
                                <span class="success-details__value seats">${seatsText}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">مبلغ کل سفارش:</span>
                                <span class="success-details__value total">${data.total_price.toLocaleString('fa-IR')} تومان</span>
                            </li>
                        </ul>
                    </section>

                    <section class="success-details__section success-details__section--customer">
                        <h2 class="success-details__section-title">مشخصات مشتری</h2>
                        <ul class="success-details__list">
                            <li class="success-details__list-item">
                                <span class="success-details__label">نام:</span>
                                <span class="success-details__value user-name">${data.customer.name}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">شماره تماس:</span>
                                <span class="success-details__value user-phone">${data.customer.phone || 'نامشخص'}</span>
                            </li>
                            <li class="success-details__list-item">
                                <span class="success-details__label">ایمیل:</span>
                                <span class="success-details__value user-email">${data.customer.email}</span>
                            </li>
                        </ul>
                    </section>
                </div>

                <div class="success-details__actions">
                    <button class="success-details__button success-details__button--primary" type="button">
                        دانلود بلیت
                        <svg>
                            <use href="#icon-download"></use>
                        </svg>
                    </button>
                    <button class="success-details__button success-details__button--secondary" type="button">
                        اشتراک‌گذاری بلیت
                        <svg>
                            <use href="#icon-share"></use>
                        </svg>
                    </button>
                </div>
            </div>
        `);
    }

    // // نسخه اصلی بدون داده‌ها (برای ticket page)
    // return (`
    //     <div class="ticket-card">
    //         <div class="success-details__body">
    //             <section class="success-details__section success-details__section--order">
    //                 <h2 class="success-details__section-title">جزئیات سفارش</h2>
    //                 <ul class="success-details__list">
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">فیلم:</span>
    //                         <span class="success-details__value movie-name"></span>
    //                     </li>
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">تاریخ:</span>
    //                         <span class="success-details__value show-date"></span>
    //                     </li>
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">صندلی‌ها:</span>
    //                         <span class="success-details__value seats"></span>
    //                     </li>
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">مبلغ کل سفارش:</span>
    //                         <span class="success-details__value total"></span>
    //                     </li>
    //                 </ul>
    //             </section>

    //             <section class="success-details__section success-details__section--customer">
    //                 <h2 class="success-details__section-title">مشخصات مشتری</h2>
    //                 <ul class="success-details__list">
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">نام:</span>
    //                         <span class="success-details__value user-name">بابی دو</span>
    //                     </li>
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">شماره تماس:</span>
    //                         <span class="success-details__value user-phone">۷۱۳ ۲۱۵ ۸۷۷۹</span>
    //                     </li>
    //                     <li class="success-details__list-item">
    //                         <span class="success-details__label">ایمیل:</span>
    //                         <span class="success-details__value user-email">bobdydou@gmail.com</span>
    //                     </li>
    //                 </ul>
    //             </section>
    //         </div>

    //         <div class="success-details__actions">
    //             <button class="success-details__button success-details__button--primary" type="button">
    //                 دانلود بلیت
    //                 <svg>
    //                     <use href="#icon-download"></use>
    //                 </svg>
    //             </button>
    //             <button class="success-details__button success-details__button--secondary" type="button">
    //                 اشتراک‌گذاری بلیت
    //                 <svg>
    //                     <use href="#icon-share"></use>
    //                 </svg>
    //             </button>
    //         </div>
    //     </div>
    // `);
}

// تابع برای رندر کردن لیست بلیط‌های کاربر
export const renderUserTickets = (tickets) => {
    if (!tickets || tickets.length === 0) {
        return `<p>هیچ بلیطی رزرو نشده</p>`;
    }

    let ticketsHTML = '';

    tickets.forEach(ticket => {
        ticketsHTML += renderTicketCard(ticket);
    });

    return ticketsHTML;
}