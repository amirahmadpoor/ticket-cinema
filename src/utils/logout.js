
function logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    location.reload();
}

export const handleLogout = () => {
    const btnLogout = document.querySelector('.logout');
    if (!btnLogout) return;
    btnLogout.addEventListener('click', logoutUser);
}