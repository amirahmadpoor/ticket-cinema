function createActorCard({ photo_url, name }) {
    return `<a href="#" class="actor">
    <img src="${photo_url}" alt="" class="actor__image">
    <span class="actor__name">${name}</span>
    </a>`
}
// <span class="actor__role">${role}</span>

export function initActorsSection({ actors }) {

    const actorsWrapper = document.querySelector('.actors');
    if (!actorsWrapper) return;

    actors.forEach(actor => {
        actorsWrapper.insertAdjacentHTML('beforeend', createActorCard(actor))
    })
}
