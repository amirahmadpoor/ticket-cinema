const loading = document.querySelector('.loading');

function hideLoading() {
    loading.classList.add('hide');
}
document.addEventListener('DOMContentLoad', hideLoading)