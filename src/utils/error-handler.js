export const handleApiError = async (response) => {
    if (response.ok) return false;
    const error = await response.json();
    switch (response.status) {
        // case 401:
        //     window.location.href = "/pages/signin-signup.html";
        //     break;
        case 403:
            window.location.href = "/pages/403.html";
            break;
        case 404:
            window.location.href = "/pages/404.html";
            break;
        case 500:
            window.location.href = "/pages/500.html";
            break;
        default:
            throw new Error(error.message);
    }
    return true;
}