export function setMenuMobile() {
    const btnsMenu = document.querySelectorAll('.menu-mobile__link');
    btnsMenu.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('active')) {
                btnsMenu.forEach((btns) => {
                    btns.classList.remove('active');
                })
                btn.classList.add('active');
            }
        })
    })
}