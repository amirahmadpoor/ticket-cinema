export const handleAnimationLoadedRight = () => {
    const hiddenElemsRight = document.querySelectorAll('.hidden-elems-right');
    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animation-loaded-right', entry.isIntersecting);
        });
    });
    hiddenElemsRight.forEach(el => observerRight.observe(el));
}
