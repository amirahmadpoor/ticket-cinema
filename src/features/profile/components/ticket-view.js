import { convertDateToPersian, convertMinutesToHoursMinutes } from "../../../utils/helpers/convert-time.js";
import { handleAnimationLoadedTop } from "../../../animations/animation-loaded.js";

const renderTicketCard = (data) => {
    if (!data) return '';

    return (`
        <article class="ticket-card hidden-elems-top">
            <div class="ticket-card__poster">
                <img class="ticket-card__poster-image" 
                     src="${data.trailer}" 
                     alt="${data.movie_title}">
            </div>

            <div class="ticket-card__content">
                <h2 class="ticket-card__title">${data.movie_title}</h2>
                <p class="ticket-card__duration">${data?.movie_duration ? convertMinutesToHoursMinutes(data.movie_duration) : ''}</p>

                <div class="ticket-card__location">
                    <h3 class="ticket-card__cinema">${data.cinema_name || 'نام سینما'}</h3>
                </div>

                <div class="ticket-card__meta">
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">تاریخ</span>
                        <span class="ticket-card__meta-value">${convertDateToPersian(data.show_date || 'نامشخص')}</span>
                    </div>
                    <div class="ticket-card__line"></div>
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">ساعت</span>
                        <span class="ticket-card__meta-value show-time">${data.show_time.slice(0, 5).toLocaleString('fa-IR') || 'نامشخص'}</span>
                    </div>
                    <div class="ticket-card__line"></div>
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">صندلی‌ها</span>
                        <span class="ticket-card__meta-value seats">${data.seats ? data.seats.map(seat => seat.row_label + seat.seat_number).join(' ، ') : 'نامشخص'
        }</span>
                    </div>
                </div>

                <div class="ticket-card__price">
                    <span class="ticket-card__price-label">مبلغ کل:</span>
                    <span class="ticket-card__price-value">${data.total_price ? data.total_price.toLocaleString('fa-IR') : '0'
        } تومان</span>
                </div>
            </div>

            <!-- دکمه‌های اکشن برای کارت پروفایل -->
            <div class="ticket-card__actions">
                <button class="ticket-card__btn ticket-card__btn--download" onclick="handleDownloadTicket(this)">
                    دانلود بلیت
                    <svg width="18" height="18"><use href="#icon-download"></use></svg>
                </button>
                <button class="ticket-card__btn ticket-card__btn--share" onclick="handleShareTicket(this)">
                    اشتراک‌گذاری
                    <svg width="18" height="18"><use href="#icon-share"></use></svg>
                </button>
            </div>
        </article>
    `);
}

const renderUserTickets = (tickets) => {
    if (!tickets || tickets.length === 0) {
        return `<p>هیچ بلیطی رزرو نشده</p>`;
    }

    // let ticketsHTML = '';
    return tickets.map(renderTicketCard).join('');
    // tickets.forEach(ticket => {
    //     ticketsHTML += renderTicketCard(ticket);
    // });
    // return ticketsHTML;
};

export {
    renderTicketCard,
    renderUserTickets
}