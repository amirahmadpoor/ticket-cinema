export const generateToast = () => {
    return document.body.insertAdjacentHTML('beforebegin',
        `<div class="toast-notification">
            <div class="toast-notification__text"></div>
            <div class="toast-notification__timer"></div>
        </div>`
    )

}