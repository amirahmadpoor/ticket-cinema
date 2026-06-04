export const handleAnimationLoadedTop = () => {
    const observerTop = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animation-loaded-top', entry.isIntersecting);
        });
    });
    const hiddenElemsTop = document.querySelectorAll('.hidden-elems-top');
    hiddenElemsTop.forEach(el => observerTop.observe(el));
}