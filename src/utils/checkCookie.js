import { getCookie } from "./getCookieConsilat.js";
export function checkCookie(name) {
    let valueCookie = getCookie(name);
    if (valueCookie !== '') {
        console.log('is validation');
        console.log(getCookie(name));
        return true
    } else {
        console.log('not validation');
        return false
    }
}