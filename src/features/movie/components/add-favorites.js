function setFavorites() {
    const btnAdd = document.querySelector('.add-favorites');
    if (!btnAdd) return;

    function __add() {
        if (!btnAdd.classList.contains('active')) {
            btnAdd.classList.add('active');
        } else {
            btnAdd.classList.remove('active');
        }
    }

    btnAdd.addEventListener('click', __add);
}

export default setFavorites;