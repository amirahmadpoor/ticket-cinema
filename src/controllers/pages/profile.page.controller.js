import { getProfileDataUserController } from "../../controllers/pages/auth.controller.js";
import { getTokenUser } from "../../utils/get-token.js";
import { getReservationsByUserIdController } from "../../controllers/booking/reservation.controller.js";
import { getTicketInfoIdController } from "../../controllers/booking/ticket.controller.js";
import { renderUserTickets } from "../../components/booking/ticket.js";

export const initProfile = async () => {
    const userData = await getProfileDataUserController(getTokenUser());
    const sidebarMenu = document.querySelector('.sidebar__menu');
    const userName = document.querySelector('.sidebar__name');
    const userEmail = document.querySelector('.sidebar__email');
    const welcome = document.querySelector('.welcome__title');
    const countTicket = document.querySelector('.count-ticket');

    async function getCountReservationTickets() {
        const count = await getReservationsByUserIdController();
        if (count.length) {
            return count.length;
        }
        return 0;
    }

    function setSelected(item) {
        item.classList.add('sidebar__item--active');
    }

    function resetSelected() {
        document.querySelectorAll('.sidebar__item').forEach(item => item.classList.remove('sidebar__item--active'));
    }

    function handlerSelected(item) {
        resetSelected();
        setSelected(item);
    }

    // رویدادگردان برای کلیک روی دکمه‌های منو
    sidebarMenu.addEventListener('click', async (e) => {
        const item = e.target.closest('.sidebar__item');
        const link = e.target.closest('.sidebar__link');
        
        if (!link) return;

        e.preventDefault();
        handlerSelected(item);

        // بررسی کدام دکمه کلیک شده
        const linkText = link.textContent.trim();
        
        if (linkText === 'بلیط‌های من') {
            await showUserTickets();
        } else {
            // مخفی کردن بخش بلیط‌ها برای سایر منو آیتم‌ها
            document.getElementById('tickets-section').style.display = 'none';
            document.getElementById('dashboard-cards').style.display = 'flex';
        }
    })

    // تابع برای نمایش بلیط‌های کاربر
    const showUserTickets = async () => {
        try {
            const reservations = await getReservationsByUserIdController();
            
            if (!reservations || reservations.length === 0) {
                const ticketsContainer = document.getElementById('tickets-container');
                ticketsContainer.innerHTML = '<p>هیچ بلیطی رزرو نشده</p>';
                document.getElementById('tickets-section').style.display = 'block';
                document.getElementById('dashboard-cards').style.display = 'none';
                return;
            }

            // دریافت جزئیات هر بلیط
            const ticketDetails = [];
            for (let reservation of reservations) {
                try {
                    const ticketDetail = await getTicketInfoIdController(reservation.id);
                    if (ticketDetail.data) {
                        ticketDetails.push(ticketDetail.data);
                    }
                } catch (error) {
                    console.error(`خطا در دریافت جزئیات بلیط ${reservation.id}:`, error);
                }
            }

            // رندر کردن بلیط‌ها
            const ticketsContainer = document.querySelector('.main');
            ticketsContainer.innerHTML = renderUserTickets(ticketDetails);

            // نمایش بخش بلیط‌ها
            document.getElementById('tickets-section').style.display = 'block';
            document.getElementById('dashboard-cards').style.display = 'none';

        } catch (error) {
            console.error('خطا در دریافت بلیط‌ها:', error);
            const ticketsContainer = document.getElementById('tickets-container');
            ticketsContainer.innerHTML = '<p>خطا در بارگذاری بلیط‌ها</p>';
        }
    }

    console.log(await getCountReservationTickets());
    userName.innerHTML = userData.data.name;
    userEmail.innerHTML = userData.data.email;
    welcome.innerHTML = `خوش اومدی ${userData.data.name}`;
    countTicket.innerHTML = await getCountReservationTickets();
}