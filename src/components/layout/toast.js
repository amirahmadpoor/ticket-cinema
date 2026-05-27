export const handleToastBox = (text) => {
    const toastBox = document.querySelector('.toast-notification');
    const toastText = document.querySelector('.toast-notification__text');
    const toastTimer = document.querySelector('.toast-notification__timer');
    let time = 100;

    toastText.innerHTML = `${text}.`;
    toastBox.classList.add('show');
    const interval = setInterval(() => {
        time--;
        toastTimer.style.width = `${time}%`;
        if (time === 0) {
            toastBox.classList.remove('show');
            clearInterval(interval);
        }
    }, 40);
}