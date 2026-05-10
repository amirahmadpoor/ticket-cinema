export function deleteCookie(name) {
    let date = new Date();
    date.setTime(date.getTime() - (1 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=;" + expires + ";path=/";
}