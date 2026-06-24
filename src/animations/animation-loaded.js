export const handleAnimationLoadedTop = () => {
    const observerTop = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animation-loaded-top', entry.isIntersecting);
        });
    });
    const hiddenElemsTop = document.querySelectorAll('.hidden-elems-top');
    hiddenElemsTop.forEach(el => observerTop.observe(el));
}

export const handleAnimationLoadedRight = () => {
    const hiddenElemsRight = document.querySelectorAll('.hidden-elems-right');
    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animation-loaded-right', entry.isIntersecting);
        });
    });
    hiddenElemsRight.forEach(el => observerRight.observe(el));
}
