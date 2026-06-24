import { convertDateToPersian, convertMinutesToHoursMinutes } from "../../utils/helpers/convert-time.js";
import { handleAnimationLoadedTop } from "../../animations/animation-loaded.js";

export const renderTicketCard = (data = null) => {
    if (!data) return '';

    const seatsText = data.seats ? data.seats.join(' ، ') : 'نامشخص';
    const movieTitle = data.movie?.title || 'نام فیلم';
    const cinemaName = data.showtime?.cinema_name || 'نام سینما';
    const showDate = data.showtime?.date || 'تاریخ نامشخص';
    const showTime = data.showtime?.time || 'ساعت نامشخص';
    const trailer = data.movie?.trailer_url;
    console.log(data.movie);
    
    const totalPrice = data.total_price ? data.total_price.toLocaleString('fa-IR') : '0';

    return `
        <article class="ticket-card hidden-elems-top">
            <div class="ticket-card__poster">
                <img class="ticket-card__poster-image" 
                     src="${trailer}" 
                     alt="${movieTitle}" 
                     onerror="this.src='/assets/images/cover/default-poster.webp';">
            </div>

            <div class="ticket-card__content">
                <h2 class="ticket-card__title">${data.movie.title}</h2>
                <p class="ticket-card__duration">${data.movie?.duration ? convertMinutesToHoursMinutes(data.movie.duration) : ''}</p>

                <div class="ticket-card__location">
                    <h3 class="ticket-card__cinema">${cinemaName}</h3>
                </div>

                <div class="ticket-card__meta">
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">تاریخ</span>
                        <span class="ticket-card__meta-value">${convertDateToPersian(showDate)}</span>
                    </div>
                    <div class="ticket-card__line"></div>
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">ساعت</span>
                        <span class="ticket-card__meta-value show-time">${showTime.slice(0, 5).toLocaleString('fa-IR')}</span>
                    </div>
                    <div class="ticket-card__line"></div>
                    <div class="ticket-card__meta-item">
                        <span class="ticket-card__meta-label">صندلی‌ها</span>
                        <span class="ticket-card__meta-value seats">${seatsText}</span>
                    </div>
                </div>

                <div class="ticket-card__price">
                    <span class="ticket-card__price-label">مبلغ کل:</span>
                    <span class="ticket-card__price-value">${totalPrice} تومان</span>
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
    `;
}

export const renderUserTickets = (tickets) => {
    if (!tickets || tickets.length === 0) {
        return `<p>هیچ بلیطی رزرو نشده</p>`;
    }

    let ticketsHTML = '';
    tickets.forEach(ticket => {
        ticketsHTML += renderTicketCard(ticket);
    });
    return ticketsHTML;
};