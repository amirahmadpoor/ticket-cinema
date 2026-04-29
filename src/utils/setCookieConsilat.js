export function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + (12 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}