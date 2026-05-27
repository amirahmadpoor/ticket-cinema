const btnLogout = document.querySelector('.logout');

const logoutUser = () => {
    localStorage.removeItem('accessToken');
    location.reload();
}

export const handleLogout = () => {
    btnLogout.addEventListener('click', logoutUser);
}